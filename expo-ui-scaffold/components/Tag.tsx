import { View, Text } from 'react-native'

type TagTone = 'default' | 'violet' | 'blue' | 'green' | 'pink'

export type TagProps = {
	label: string
	tone?: TagTone
	testID?: string
	accessibilityLabel?: string
}

const toneMap: Record<TagTone, { bg: string; fg: string; border: string }> = {
	default: { bg: '#f3f4f6', fg: '#111827', border: '#e5e7eb' },
	violet: { bg: '#ede9fe', fg: '#5b21b6', border: '#ddd6fe' },
	blue: { bg: '#dbeafe', fg: '#1e3a8a', border: '#bfdbfe' },
	green: { bg: '#dcfce7', fg: '#065f46', border: '#bbf7d0' },
	pink: { bg: '#fce7f3', fg: '#9d174d', border: '#fbcfe8' },
}

export default function Tag({ label, tone = 'default', testID, accessibilityLabel }: TagProps) {
	const c = toneMap[tone]
	return (
		<View
			style={{
				alignSelf: 'flex-start',
				backgroundColor: c.bg,
				borderColor: c.border,
				borderWidth: 1,
				borderRadius: 999,
				paddingHorizontal: 10,
				paddingVertical: 4,
			}}
			testID={testID}
			accessibilityRole="text"
			accessibilityLabel={accessibilityLabel ?? label}
		>
			<Text style={{ color: c.fg, fontSize: 12, fontWeight: '600' }}>{label}</Text>
		</View>
	)
}

