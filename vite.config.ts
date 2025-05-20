import { defineConfig, loadEnv } from 'vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      'import.meta.env.SANITY_STUDIO_PROJECT_ID': JSON.stringify(env.SANITY_STUDIO_PROJECT_ID),
      'import.meta.env.SANITY_STUDIO_DATASET': JSON.stringify(env.SANITY_STUDIO_DATASET),
      'import.meta.env.SANITY_STUDIO_API_VERSION': JSON.stringify(env.SANITY_STUDIO_API_VERSION),
      'import.meta.env.SANITY_STUDIO_PREVIEW_TOKEN': JSON.stringify(env.SANITY_STUDIO_PREVIEW_TOKEN),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})