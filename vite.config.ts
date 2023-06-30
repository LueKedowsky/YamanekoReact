/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: '/src/shared/api',
      assets: '/src/shared/assets',
      context: '/src/entities/context',
      entities: '/src/entities',
      features: '/src/features/',
      helpers: '/src/shared/helpers',
      pages: '/src/pages',
      shared: '/src/shared',
      tests: '/src/tests',
      types: '/src/shared/types',
      utils: '/src/shared/utils',
      widgets: '/src/widgets',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
