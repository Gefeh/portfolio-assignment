import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/portfolio-assignment/',
    plugins: [plugin()],
    server: {
        port: 55787,
    }
})
