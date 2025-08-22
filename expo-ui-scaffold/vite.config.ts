import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default defineConfig({
	plugins: [
		react(),
		tamaguiPlugin({
			config: './tamagui.config.ts',
			components: ['tamagui'],
			optimize: true,
		}),
	],
	resolve: {
		alias: {
			'react-native': 'react-native-web',
		},
	},
})

