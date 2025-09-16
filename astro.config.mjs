import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
// import node from "@astrojs/node";

export default defineConfig({
  output: 'server',

  // adapter: node({
  //   mode: "standalone",
  // }),
  env: {
    schema: {
      POLAR_ACCESS_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      POLAR_WEBHOOK_SECRET: envField.string({
        context: 'server',
        access: 'secret',
      }),
      POLAR_SUCCESS_URL: envField.string({
        context: 'server',
        access: 'public',
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        '.ngrok-free.app', // e.g when testing on local ensure to set your forwarding URL
      ],
    },
  },

  integrations: [],
})
