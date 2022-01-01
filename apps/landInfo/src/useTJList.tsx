import { createChromeStorageStateHookLocal } from 'use-chrome-storage'
import { traderJoes } from './content_script'

const SETTINGS_KEY = 'traderJoes'
const INITIAL_VALUE: traderJoes[] = [
  {
    _id: '',
    title: '',
    long: '',
    lat: '',
    city: 'test',
    state: '',
    address: '',
    postalCode: '',
    calcDistance: 0
  }
]

export const useTJList = createChromeStorageStateHookLocal(SETTINGS_KEY, INITIAL_VALUE)
