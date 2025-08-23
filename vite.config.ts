import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import sourceIdentifierPlugin from 'vite-plugin-source-info';

const isProd = process.env.BUILD_MODE === 'prod';

export default defineConfig({
  base: '/', // ← wichtig für Netlify
  plugins: [
    react(),
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: 'data-matrix',
      includeProps: true,
    }),
  ],
  build: { outDir: 'dist' },
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
});
