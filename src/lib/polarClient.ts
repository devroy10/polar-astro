import { Polar } from '@polar-sh/sdk'

const accessToken = import.meta.env.MODE === 'production' ? import.meta.env.POLAR_ACCESS_TOKEN : import.meta.env.SANDBOX_POLAR_ACCESS_TOKEN

if (!accessToken) {
  throw new Error(`Missing Polar access token for ${import.meta.env.MODE} environment`)
}

export const polarClient = new Polar({
  accessToken,
  server: import.meta.env.MODE === 'production' ? 'production' : 'sandbox',
})
