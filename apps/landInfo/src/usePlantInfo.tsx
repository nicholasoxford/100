import { createChromeStorageStateHookLocal } from 'use-chrome-storage'
import { plantHardiness, traderJoes } from './content_script'

const SETTINGS_KEY = 'plantHardiness'
const INITIAL_VALUE: plantHardiness = {
  zipcode: '',
  zone: '',
  trange: '',
  zonetitle: '',
  rangemin: '',
  rangemax: ''
}

export const usePlantInfo = createChromeStorageStateHookLocal(SETTINGS_KEY, INITIAL_VALUE)
