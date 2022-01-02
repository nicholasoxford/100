import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useTJList } from './useTJList'
import { traderJoes } from './content_script'
import { usePlantInfo } from './usePlantInfo'
import { useAQIInfo } from './useAQIInfo'

const Popup = () => {
  const [TJList] = useTJList()
  const [plantHardiness] = usePlantInfo()
  const [airQuality] = useAQIInfo()
  const [currentURL, setCurrentURL] = useState<string>()

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url)
    })
  }, [])

  return (
    <main
      style={{
        minWidth: '390px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem'
        }}
      >
        Land Info
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '200px 140px',
          gridColumnGap: '10px',
          margin: '.5em',
          fontSize: '14px'
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} id="tjInfo">
            Trader Joes
          </div>
          {TJList.map((tj: traderJoes) => (
            <div key={tj._id} style={{ display: 'flex', width: '220' }}>
              <div style={{ width: '60%' }}>{tj.city}: </div>
              <b style={{ flexGrow: 1 }}>{toMiles(tj.calcDistance).toFixed(1)} Miles</b>
            </div>
          ))}
        </div>
        <div>
          {plantHardiness.zipcode && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column',
                textAlign: 'center'
              }}
            >
              <div> Plant Hardiness</div>
              <div>
                <b>{plantHardiness.zone}</b>
              </div>
            </div>
          )}
          {airQuality.aqi && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '.5em'
              }}
            >
              <div>AirQuality </div>
              <div>
                <b>{airQuality.aqi}</b>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
function toMiles(meters: number) {
  return meters * 0.000621371
}
ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('root')
)
