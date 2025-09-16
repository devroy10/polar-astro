import { Checkout } from '@polar-sh/astro'
// import { POLAR_ACCESS_TOKEN, POLAR_SUCCESS_URL } from "astro:env/server";

const accessToken = import.meta.env.MODE === 'production' ? import.meta.env.POLAR_ACCESS_TOKEN : import.meta.env.SANDBOX_POLAR_ACCESS_TOKEN

if (!accessToken) {
  throw new Error(`Missing Polar access token for ${import.meta.env.MODE} environment`)
}

export const GET = Checkout({
  accessToken: accessToken,
  successUrl: import.meta.env.POLAR_SUCCESS_URL,
  server: import.meta.env.MODE === 'production' ? 'production' : 'sandbox',
  theme: 'light', // optional
})
