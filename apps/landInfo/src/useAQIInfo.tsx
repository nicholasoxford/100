import { createChromeStorageStateHookLocal } from 'use-chrome-storage'

const SETTINGS_KEY = 'airQuality'
const INITIAL_VALUE: airQualityInfo = {
  aqi: 0,
  idx: 0,
  attributions: [],
  city: {} as City,
  dominentpol: ''
}

export const useAQIInfo = createChromeStorageStateHookLocal(SETTINGS_KEY, INITIAL_VALUE)
export type airQuality = {
  data: airQualityInfo
}
export interface airQualityInfo {
  aqi: number
  idx: number
  attributions?: AttributionsEntity[] | null
  city: City
  dominentpol: string
}
export interface AttributionsEntity {
  url: string
  name: string
}
export interface City {
  geo?: number[] | null
  name: string
  url: string
}
