import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'my-module',
            filename: 'remoteEntry.js',
            exposes: {
                './MyButton': './src/MyButton.vue',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
})
