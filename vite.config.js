import path from 'path'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, './src/'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@styles': path.resolve(__dirname, './src/static/styles/'),
			'@hooks': path.resolve(__dirname, './src/hooks/'),
			'@images': path.resolve(__dirname, './src/static/images/'),
			'@utils': path.resolve(__dirname, './src/utils/'),
			'@services': path.resolve(__dirname, './src/services/')
		}
	}
})
