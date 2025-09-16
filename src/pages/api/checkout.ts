import { Checkout } from '@polar-sh/astro'
import { SANDBOX_POLAR_ACCESS_TOKEN, POLAR_SUCCESS_URL } from 'astro:env/server'

// const accessToken = process.env.SANDBOX_POLAR_ACCESS_TOKEN
if (!SANDBOX_POLAR_ACCESS_TOKEN) {
  throw new Error(`Missing SANDBOX_POLAR_ACCESS_TOKEN environment variable`)
}

export const GET = Checkout({
  accessToken: SANDBOX_POLAR_ACCESS_TOKEN,
  successUrl: POLAR_SUCCESS_URL,
  server: 'sandbox',
  theme: 'light', // optional
})
