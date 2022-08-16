import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'bac8e0ce8f344e4a96612272e74b55538661',
  apiKey: process.env.API_KEY || '',
})