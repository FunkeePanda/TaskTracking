import { createTamagui } from '@tamagui/core'

const config = createTamagui({
	tokens: {
		color: {
			primary: '#2196F3',
			background: '#ffffff',
			text: '#111111',
		},
		space: {
			0: 0,
			1: 4,
			2: 8,
			3: 12,
			4: 16,
			6: 24,
			8: 32,
		},
		radius: {
			0: 0,
			1: 4,
			2: 8,
			3: 12,
		},
		zIndex: {
			0: 0,
			1: 10,
			2: 20,
			3: 30,
		},
	},
	themes: {
		light: {
			background: '#ffffff',
			color: '#111111',
			primary: '#2196F3',
		},
		dark: {
			background: '#000000',
			color: '#ffffff',
			primary: '#2196F3',
		},
	},
})

export type AppConfig = typeof config
export default config

