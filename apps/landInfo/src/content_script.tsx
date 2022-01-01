import { airQuality, airQualityInfo } from './useAQIInfo'

chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  // listen for messages sent from background.js
  if (request.message === 'update') {
    var traderJoesList: traderJoes[] = []
    var plantHardiness = {} as plantHardiness
    var airquality = {} as airQualityInfo
    if (request.url.includes('zillow.com')) {
      var geoInfo = checkScriptJSONZillow(request.url)
    } else {
      var geoInfo = checkScriptJSON()
    }
    console.log('geoInfo', geoInfo)
    if (geoInfo.longitude && geoInfo.latitude) {
      var response = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/landinfo-jpfgc/endpoint/landinfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          latitude: geoInfo.latitude,
          longitude: geoInfo.longitude,
          address: geoInfo.address
        })
      })
      let json = await response.json()
      const parseJson: result = JSON.parse(json)
      for (const iterator of parseJson.traderJoes) {
        traderJoesList.push(JSON.parse(iterator))
      }
      plantHardiness = parseJson.plant
      airquality = parseJson.airQuality.data
    }
    // set list of closests Trader Joes
    chrome.storage.local.set({ traderJoes: traderJoesList }, function () {})
    // Set plant hardiness scale
    chrome.storage.local.set({ plantHardiness: plantHardiness }, function () {})
    // set are quality, and send a message to the background script to update tab icon
    chrome.storage.local.set({ airQuality: airquality }, function () {})

    await chrome.runtime.sendMessage({
      message: 'airQualityUpdate',
      airQuality: airquality.aqi ?? ''
    })
  }
})

function checkScriptJSON(): geoInfo {
  var info = document.querySelectorAll('script[type="application/ld+json"]')
  var geoInfo = {} as geoInfo
  for (var i = 0; i < info.length; i++) {
    const json = JSON.parse(info[i].innerHTML)
    if (json.geo) {
      geoInfo.longitude = json.geo.longitude
      geoInfo.latitude = json.geo.latitude
    }
    if (json.address) {
      geoInfo.address = json.address
    }
  }
  return geoInfo
}
function checkScriptJSONZillow(url: string): geoInfo {
  var info = document.querySelectorAll('script[type="application/ld+json"]')
  var geoInfo = {} as geoInfo
  for (var i = 0; i < info.length; i++) {
    const json = JSON.parse(info[i].innerHTML)
    if (json.url === url) {
      if (json.geo) {
        geoInfo.longitude = json.geo.longitude
        geoInfo.latitude = json.geo.latitude
      }
      if (json.address) {
        geoInfo.address = json.address
      }
    }
  }
  return geoInfo
}
type geoInfo = {
  longitude: number
  latitude: number
  address: address
}

export interface traderJoes {
  _id: string
  title: string
  long: string
  lat: string
  city: string
  state: string
  address: string
  postalCode: string
  calcDistance: number
}
export interface address {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
}

export type result = {
  traderJoes: string
  plant: plantHardiness
  airQuality: airQuality
}

export interface plantHardiness {
  zipcode: string
  zone: string
  trange: string
  zonetitle: string
  rangemin: string
  rangemax: string
}
