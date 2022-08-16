import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'konerudesign',
  apiKey: process.env.API_KEY || 'bac8e0ce8f344e4a96612272e74b55538661',
})