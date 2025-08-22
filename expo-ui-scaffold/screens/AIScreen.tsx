import { useState } from 'react'
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import { Card, Button } from '../components'

export default function AIScreen() {
	const [input, setInput] = useState('')
	const [sent, setSent] = useState(false)

	function onSend() {
		if (!input.trim()) return
		setSent(true)
	}

	return (
		<View style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ padding: 16, flexGrow: 1 }}>
				{!sent ? (
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ color: '#6b7280' }}>Ask AI to plan something...</Text>
					</View>
				) : (
					<View>
						<Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 8 }}>Plan preview</Text>
						<Card>
							<Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>{input || 'Paint my room'}</Text>
							<Text style={{ color: '#6b7280', marginBottom: 8 }}>Steps</Text>
							<View style={{ gap: 6 }}>
								<Text>1. Measure room and surfaces</Text>
								<Text>2. Choose paint and colors</Text>
								<Text>3. Prep walls and tape edges</Text>
								<Text>4. Paint walls and trim</Text>
								<Text>5. Cleanup and ventilate</Text>
							</View>
							<View style={{ height: 12 }} />
							<Text style={{ color: '#6b7280', marginBottom: 8 }}>Materials</Text>
							<View style={{ gap: 6 }}>
								<Text>Paint, primer, rollers, brushes, tray, tape, drop cloths</Text>
							</View>
						</Card>
						<View style={{ height: 12 }} />
						<Button label="Add to Week" variant="primary" testID="addToWeek" accessibilityLabel="Add plan to week" />
					</View>
				)}
			</ScrollView>
			<View style={{ flexDirection: 'row', alignItems: 'center', padding: 12, borderTopWidth: 1, borderTopColor: '#e5e7eb' }}>
				<View style={{ flex: 1, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 12 }}>
					<TextInput
						value={input}
						onChangeText={setInput}
						placeholder="e.g., Paint my room"
						style={{ height: 44 }}
						testID="aiInput"
						accessibilityLabel="AI input"
					/>
				</View>
				<Pressable onPress={onSend} testID="aiSend" accessibilityRole="button" accessibilityLabel="Send" style={{ marginLeft: 8, backgroundColor: '#2563eb', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 10 }}>
					<Text style={{ color: '#fff', fontWeight: '600' }}>Send</Text>
				</Pressable>
			</View>
		</View>
	)
}

