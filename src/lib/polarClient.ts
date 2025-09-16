import { Polar } from '@polar-sh/sdk'
import { POLAR_ACCESS_TOKEN } from 'astro:env/server'

if (!POLAR_ACCESS_TOKEN) {
  throw new Error(`Missing POLAR_ACCESS_TOKEN environment variable`)
}

export const polarClient = new Polar({
  accessToken: POLAR_ACCESS_TOKEN,
  server: 'sandbox',
})
