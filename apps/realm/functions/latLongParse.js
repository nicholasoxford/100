// This function is the endpoint's request handler.
exports = async function ({ query, headers, body }, response) {
  // import got from 'got';
  const axios = require('axios')

  // Data can be extracted from the request as follows:

  const geo = JSON.parse(body.text())
  
  var traderJoesCollection = context.services.get('mongodb-atlas').db('geoData').collection('traderJoes')
  var logging = context.services.get('mongodb-atlas').db('geoData').collection('logging')
  
  // You can use 'context' to interact with other Realm features.
  // Accessing a value:
  // var x = context.values.get("value_name");
  // Querying a mongodb service:
  let result = { traderJoes: [], plant: {}, airQuality: {} }

  // console.log([geo.longitude, geo.latitude], 'result')
  const url = `https://c0bra.api.stdlib.com/zipcode-to-hardiness-zone/?zipcode=${geo.address.postalCode}`
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(url)
      result.plant = resp.data
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }
  
    await sendGetRequest()
    const AQurl = `http://api.waqi.info/feed/geo:${geo.latitude};${geo.longitude}/?token=0dd5b2a1ff8704475961cdac1661380d07aabdf5`
    
    const sendGetRequest2 = async () => {
      try {
        const resp = await axios.get(AQurl)
        result.airQuality = resp.data
      } catch (err) {
        // Handle Error Here
        console.error(err)
      }
    }
    await sendGetRequest2()
    const doc = await traderJoesCollection
      .aggregate([
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [Number.parseFloat(geo.longitude), Number.parseFloat(geo.latitude)]
            },
            key: 'location',
            spherical: true,
            distanceField: 'calcDistance'
          }
        },
        {
          $project: {
            location: 0
          }
        },
        { $limit: 5 }
      ])
      .toArray()
    logging.insertOne({
      address: geo.address,
      airQuality: result.airQuality.data,
      plantHardiness: result.plant,
      headers: headers
    })
    doc.forEach(x => result.traderJoes.push(JSON.stringify(x)))


    return JSON.stringify(result)

}
