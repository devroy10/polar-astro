![](../logo.svg)

# Example of Polar with Astro
This repo is a demonstration of the integration of Polar features such as Webhooks, Customer Portal and Checkout creation organization in Astro.

## Prerequisites

- Node.js installed on your system
- Your POLAR_ACCESS_TOKEN, POLAR_WEBHOOK_SECRET and POLAR_SUCCESS_URL

## 1. Clone the repository

```bash
npx degit polarsource/examples/with-astro ./with-astro
```
## 2. Install dependencies:

```bash
npm install
```
## 3. Configure environment variables:

Create a `.env` file in the project root with your Polar credentials:

```bash
cp .env.example .env
```

Add your Polar API credentials to the `.env` file:

```env
POLAR_ACCESS_TOKEN=your_polar_access_token_here
POLAR_WEBHOOK_SECRET=your_webhook_secret_here
POLAR_SUCCESS_URL=http://localhost:4321/success
```
You can find your POLAR_ACCESS_TOKEN and POLAR_WEBHOOK_SECRET variables in your Polar dashboard settings. see `.env.example`

## 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see the demo interface.

## Configuration

### Polar Dashboard Setup

1. **Create Products**: Set up products in your Polar dashboard
2. **Configure Webhooks**: Add webhook endpoint `https://your-domain.com/api/webhooks/polar`
3. **Get Credentials**: Copy your access token and webhook secret

## Deployment

### Vercel (Recommended)

1. Add the vercel adapter to your proects, [link here](https://docs.astro.build/en/guides/integrations-guide/vercel/#installation)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

The project works with any platform that supports Astro:

- Netlify
- Cloudflare Pages
- Railway
- Render

## 5. Testing

### Local Testing

1. Use Polar's sandbox environment
2. Test with sandbox product IDs
3. Monitor webhook events payloads in your console and  
4. Verify your access token by running the `validateAccessToken.ts` test in `./scripts`

```bash
npm run validate-token
```

### Webhook Testing

1. Use tools like ngrok for local webhook testing
2. Configure webhook URL in Polar dashboard
3. Configure `vite.server.allowedhosts` in `astro.config.mjs` to allow it.
4. Trigger test events from Polar dashboard
