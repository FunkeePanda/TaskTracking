import { forwardRef } from 'react'
import { Pressable, Text, ViewStyle } from 'react-native'

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = {
	label: string
	onPress?: () => void
	variant?: ButtonVariant
	size?: ButtonSize
	disabled?: boolean
	testID?: string
	accessibilityLabel?: string
}

const sizeStyles: Record<ButtonSize, { paddingHorizontal: number; paddingVertical: number; fontSize: number; borderRadius: number }> = {
	sm: { paddingHorizontal: 12, paddingVertical: 8, fontSize: 14, borderRadius: 8 },
	md: { paddingHorizontal: 16, paddingVertical: 12, fontSize: 16, borderRadius: 10 },
	lg: { paddingHorizontal: 20, paddingVertical: 14, fontSize: 18, borderRadius: 12 },
}

const variantStyles = (variant: ButtonVariant, disabled?: boolean): ViewStyle => {
	const base: ViewStyle = {
		backgroundColor: '#2563eb',
		opacity: disabled ? 0.5 : 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
	if (variant === 'secondary') return { ...base, backgroundColor: '#7c3aed' }
	if (variant === 'success') return { ...base, backgroundColor: '#16a34a' }
	if (variant === 'warning') return { ...base, backgroundColor: '#d97706' }
	if (variant === 'danger') return { ...base, backgroundColor: '#dc2626' }
	if (variant === 'ghost') return { ...base, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#e5e7eb' }
	return base
}

export const Button = forwardRef<any, ButtonProps>(function Button(
	{ label, onPress, variant = 'primary', size = 'md', disabled, testID, accessibilityLabel },
	ref
) {
	const s = sizeStyles[size]
	return (
		<Pressable
			ref={ref}
			onPress={onPress}
			disabled={disabled}
			style={[variantStyles(variant, disabled), { paddingHorizontal: s.paddingHorizontal, paddingVertical: s.paddingVertical, borderRadius: s.borderRadius }]}
			testID={testID}
			accessibilityRole="button"
			accessibilityLabel={accessibilityLabel ?? label}
		>
			<Text style={{ color: variant === 'ghost' ? '#111827' : '#ffffff', fontSize: s.fontSize, fontWeight: '600' }}>{label}</Text>
		</Pressable>
	)
})

export default Button

