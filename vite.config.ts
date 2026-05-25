/// <reference types="vitest" />

import legacy
from '@vitejs/plugin-legacy';

import react
from '@vitejs/plugin-react';

import { defineConfig }
from 'vite';

// https://vitejs.dev/config/

export default defineConfig({

  plugins: [

    react(),

    legacy()

  ],

  // NGROK + RED LOCAL

  server: {

    host: true,

    allowedHosts: [

      '.ngrok-free.app',

      '.ngrok-free.dev'

    ]

  },

  test: {

    globals: true,

    environment: 'jsdom',

    setupFiles:
      './src/setupTests.ts',

  }

});