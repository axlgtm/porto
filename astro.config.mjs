// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
                '@styles': fileURLToPath(new URL('./src/styles', import.meta.url))
            }
        }
    },
    site: "https://axlgtm.github.io",
    base: ""
});
