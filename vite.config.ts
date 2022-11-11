import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        // Enable / disable Phaser 3 features
        replace({
          'typeof CANVAS_RENDERER': "'true'",
          'typeof WEBGL_RENDERER': "'true'",
          'typeof EXPERIMENTAL': "'true'",
          'typeof PLUGIN_CAMERA3D': "'false'",
          'typeof PLUGIN_FBINSTANT': "'false'",
          'typeof FEATURE_SOUND': "'true'",
        }),
      ],
    },
  },
});
