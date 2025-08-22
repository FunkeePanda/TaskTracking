import { ReactNode } from 'react'
import { View, Text, Pressable } from 'react-native'

export type ListItemProps = {
	title: string
	subtitle?: string
	left?: ReactNode
	right?: ReactNode
	onPress?: () => void
	separator?: boolean
	testID?: string
	accessibilityLabel?: string
}

export default function ListItem({ title, subtitle, left, right, onPress, separator = true, testID, accessibilityLabel }: ListItemProps) {
	const content = (
		<View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 }}>
			{left ? <View style={{ marginRight: 12 }}>{left}</View> : null}
			<View style={{ flex: 1 }}>
				<Text style={{ color: '#111827', fontSize: 16, fontWeight: '600' }}>{title}</Text>
				{subtitle ? <Text style={{ color: '#6b7280', fontSize: 14, marginTop: 2 }}>{subtitle}</Text> : null}
			</View>
			{right ? <View style={{ marginLeft: 12 }}>{right}</View> : null}
		</View>
	)

	const Wrapper = onPress ? Pressable : View
	return (
		<View>
			<Wrapper
				onPress={onPress}
				testID={testID}
				accessibilityRole={onPress ? 'button' : undefined}
				accessibilityLabel={accessibilityLabel ?? title}
			>
				{content}
			</Wrapper>
			{separator ? <View style={{ height: 1, backgroundColor: '#e5e7eb', marginLeft: 16 }} /> : null}
		</View>
	)
}

