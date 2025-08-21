import { useState } from 'react'
import { View } from 'react-native'
import { Sheet as TSheet } from '@tamagui/sheet'

export type SheetProps = {
	open?: boolean
	onOpenChange?: (open: boolean) => void
	height?: number
	children?: React.ReactNode
	testID?: string
	accessibilityLabel?: string
}

export default function Sheet({ open, onOpenChange, height = 0.4, children, testID, accessibilityLabel }: SheetProps) {
	const [internalOpen, setInternalOpen] = useState(false)
	const isOpen = open ?? internalOpen
	const setOpen = (v: boolean) => {
		setInternalOpen(v)
		onOpenChange?.(v)
	}

	return (
		<View testID={testID} accessibilityLabel={accessibilityLabel} accessible>
			<TSheet
				modal
				open={isOpen}
				onOpenChange={setOpen}
				dismissOnSnapToBottom
				snapPoints={[height, 0.9]}
			>
				<TSheet.Overlay />
				<TSheet.Frame padding={16} backgroundColor="#fff" borderTopLeftRadius={16} borderTopRightRadius={16}>
					{children}
				</TSheet.Frame>
			</TSheet>
		</View>
	)
}

