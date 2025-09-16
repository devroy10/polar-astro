// src/lib/polarClient.ts
import { Polar } from '@polar-sh/sdk'
import { SANDBOX_POLAR_ACCESS_TOKEN } from 'astro:env/server'

const accessToken = SANDBOX_POLAR_ACCESS_TOKEN
if (!accessToken) {
  throw new Error(`Missing SANDBOX_POLAR_ACCESS_TOKEN environment variable hi`)
}

export const polarClient = new Polar({
  accessToken,
  server: 'sandbox',
})
