import { createTamagui } from '@tamagui/core'

const colorsLight = {
	background: '#ffffff',
	surface: '#f7f7f9',
	text: '#111827',
	subtleText: '#6b7280',
	border: '#e5e7eb',
	primary: '#2563eb',
	secondary: '#7c3aed',
	success: '#16a34a',
	warning: '#d97706',
	danger: '#dc2626',
	// vibrant palettes
	violet: '#7c3aed',
	blue: '#2563eb',
	green: '#22c55e',
	pink: '#ec4899',
}

const colorsDark = {
	background: '#0b0b0f',
	surface: '#15151b',
	text: '#f3f4f6',
	subtleText: '#9ca3af',
	border: '#27272a',
	primary: '#60a5fa',
	secondary: '#a78bfa',
	success: '#4ade80',
	warning: '#fbbf24',
	danger: '#f87171',
	violet: '#a78bfa',
	blue: '#60a5fa',
	green: '#86efac',
	pink: '#f472b6',
}

const config = createTamagui({
	tokens: {
		color: colorsLight,
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
		shadow: {
			xs: 2,
			sm: 6,
			md: 12,
			lg: 20,
		},
		zIndex: {
			0: 0,
			1: 10,
			2: 20,
			3: 30,
		},
	},
	themes: {
		light: { ...colorsLight },
		dark: { ...colorsDark },
	},
})

export type AppConfig = typeof config
export default config

