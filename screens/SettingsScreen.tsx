import { View, Text, Pressable, ScrollView } from 'react-native'
import { useState } from 'react'
import { Card, Button, Tag } from '../components'

export default function SettingsScreen() {
	const [defaultMode, setDefaultMode] = useState<'Checklist' | 'Timer'>('Checklist')
	const [conflict, setConflict] = useState<'Ask' | 'Silent' | 'Off'>('Ask')
	const [theme, setTheme] = useState<'light' | 'dark'>('light')
	const [palette, setPalette] = useState<'violet' | 'blue' | 'green' | 'pink'>('violet')
	const [celebration, setCelebration] = useState<'Off' | 'Subtle' | 'Fun'>('Subtle')

	function RadioRow({ label, selected, onPress }: { label: string; selected: boolean; onPress: () => void }) {
		return (
			<Pressable onPress={onPress} accessibilityRole="radio" accessibilityState={{ selected }} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8 }}>
				<View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: selected ? '#2563eb' : '#d1d5db', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
					<View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: selected ? '#2563eb' : 'transparent' }} />
				</View>
				<Text style={{ fontSize: 16, color: '#111827' }}>{label}</Text>
			</Pressable>
		)
	}

	function Section({ title, children }: { title: string; children: React.ReactNode }) {
		return (
			<View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
				<Text style={{ fontSize: 12, color: '#6b7280', marginBottom: 8 }}>{title.toUpperCase()}</Text>
				<Card>{children}</Card>
			</View>
		)
	}

	return (
		<ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
			<Section title="Default Task Mode">
				<View accessibilityRole="radiogroup">
					<RadioRow label="Checklist" selected={defaultMode === 'Checklist'} onPress={() => setDefaultMode('Checklist')} />
					<RadioRow label="Timer" selected={defaultMode === 'Timer'} onPress={() => setDefaultMode('Timer')} />
				</View>
			</Section>

			<Section title="Conflict Handling">
				<View accessibilityRole="radiogroup">
					<RadioRow label="Ask" selected={conflict === 'Ask'} onPress={() => setConflict('Ask')} />
					<RadioRow label="Silent" selected={conflict === 'Silent'} onPress={() => setConflict('Silent')} />
					<RadioRow label="Off" selected={conflict === 'Off'} onPress={() => setConflict('Off')} />
				</View>
			</Section>

			<Section title="Theme">
				<View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', marginBottom: 8 }}>
					<RadioRow label="Light" selected={theme === 'light'} onPress={() => setTheme('light')} />
					<RadioRow label="Dark" selected={theme === 'dark'} onPress={() => setTheme('dark')} />
				</View>
				<View style={{ flexDirection: 'row', gap: 8 }}>
					{(['violet', 'blue', 'green', 'pink'] as const).map((p) => (
						<Pressable key={p} onPress={() => setPalette(p)} accessibilityRole="radio" accessibilityState={{ selected: palette === p }} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 12 }}>
							<View style={{ width: 20, height: 20, borderRadius: 10, marginRight: 8, backgroundColor: p === 'violet' ? '#7c3aed' : p === 'blue' ? '#2563eb' : p === 'green' ? '#22c55e' : '#ec4899' }} />
							<Text style={{ color: '#111827' }}>{p[0].toUpperCase() + p.slice(1)}</Text>
						</Pressable>
					))}
				</View>
			</Section>

			<Section title="Celebration Intensity">
				<View accessibilityRole="radiogroup">
					<RadioRow label="Off" selected={celebration === 'Off'} onPress={() => setCelebration('Off')} />
					<RadioRow label="Subtle" selected={celebration === 'Subtle'} onPress={() => setCelebration('Subtle')} />
					<RadioRow label="Fun" selected={celebration === 'Fun'} onPress={() => setCelebration('Fun')} />
				</View>
			</Section>

			<View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
				<Button label="Save" variant="primary" size="md" testID="settingsSave" accessibilityLabel="Save settings" />
			</View>
		</ScrollView>
	)
}

