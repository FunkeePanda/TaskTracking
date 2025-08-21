import { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'

export type CardProps = PropsWithChildren<{
	shadow?: 'xs' | 'sm' | 'md' | 'lg'
	padding?: number
	radius?: number
	border?: boolean
	testID?: string
	accessibilityLabel?: string
}>

function getShadowStyle(level: NonNullable<CardProps['shadow']>): ViewStyle {
	if (level === 'xs') return { shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, shadowOffset: { width: 0, height: 1 }, elevation: 1 }
	if (level === 'sm') return { shadowColor: '#000', shadowOpacity: 0.07, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2 }
	if (level === 'md') return { shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 4 }
	return { shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 20, shadowOffset: { width: 0, height: 8 }, elevation: 6 }
}

export default function Card({ children, shadow = 'md', padding = 16, radius = 12, border, testID, accessibilityLabel }: CardProps) {
	return (
		<View
			style={{
				backgroundColor: '#fff',
				borderRadius: radius,
				padding,
				borderWidth: border ? 1 : 0,
				borderColor: '#e5e7eb',
				...getShadowStyle(shadow),
			}}
			testID={testID}
			accessibilityRole="summary"
			accessibilityLabel={accessibilityLabel}
		>
			{children}
		</View>
	)
}

