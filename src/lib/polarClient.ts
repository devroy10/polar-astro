import { Polar } from '@polar-sh/sdk'

// Use POLAR_ACCESS_TOKEN for all environments for now
const accessToken = process.env.POLAR_ACCESS_TOKEN

if (!accessToken) {
  throw new Error(`Missing POLAR_ACCESS_TOKEN environment variable`)
}

export const polarClient = new Polar({
  accessToken,
  server: 'production', // or 'sandbox' depending on your token type
})