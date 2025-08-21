import Svg, { Circle } from 'react-native-svg'
import { View } from 'react-native'

export type ProgressRingProps = {
	size?: number
	strokeWidth?: number
	progress: number // 0..1
	trackColor?: string
	progressColor?: string
	testID?: string
	accessibilityLabel?: string
}

export default function ProgressRing({
	size = 48,
	strokeWidth = 6,
	progress,
	trackColor = '#e5e7eb',
	progressColor = '#2563eb',
	testID,
	accessibilityLabel,
}: ProgressRingProps) {
	const radius = (size - strokeWidth) / 2
	const circumference = 2 * Math.PI * radius
	const clamp = Math.max(0, Math.min(1, progress))
	const dashOffset = circumference * (1 - clamp)

	return (
		<View
			testID={testID}
			accessibilityRole="progressbar"
			accessibilityLabel={accessibilityLabel ?? 'Progress'}
			accessibilityValue={{ now: Math.round(clamp * 100), min: 0, max: 100 }}
		>
			<Svg width={size} height={size}>
				<Circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke={trackColor}
					strokeWidth={strokeWidth}
					fill="none"
				/>
				<Circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke={progressColor}
					strokeWidth={strokeWidth}
					fill="none"
					strokeDasharray={`${circumference} ${circumference}`}
					strokeDashoffset={dashOffset}
					strokeLinecap="round"
					rotation="-90"
					originX={size / 2}
					originY={size / 2}
				/>
			</Svg>
		</View>
	)
}

