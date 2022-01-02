exports = async function(arg){
 var traderJoesCollection = context.services.get('mongodb-atlas').db('geoData').collection('traderJoes')
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
  return doc;
};