import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'NuUi',
      fileName: 'nu-ui',
    },
  },
  plugins: [dts(),react()],
});
