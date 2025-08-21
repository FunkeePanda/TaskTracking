import { View, Text, ScrollView } from 'react-native'
import { useMemo } from 'react'
import { Card, Tag } from '../components'

export default function WeekScreen() {
	const days = useMemo(() => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], [])
	const sample = useMemo(
		() => (
			{
				Mon: [
					{ id: 'm1', title: 'Plan week', mode: 'Checklist' as const },
					{ id: 'm2', title: 'Focus block', mode: 'Timer' as const },
				],
				Tue: [
					{ id: 't1', title: 'Workout', mode: 'Checklist' as const },
				],
				Wed: [],
				Thu: [
					{ id: 'h1', title: 'Deep Work', mode: 'Timer' as const },
				],
				Fri: [
					{ id: 'f1', title: 'Retrospective', mode: 'Checklist' as const },
					{ id: 'f2', title: 'Clean inbox', mode: 'Checklist' as const },
				],
				Sat: [],
				Sun: [],
			}
		),
		[]
	)

	return (
		<View style={{ flex: 1 }}>
			<View style={{ flexDirection: 'row', paddingHorizontal: 8, paddingTop: 12, paddingBottom: 4 }}>
				{days.map((d) => (
					<View key={d} style={{ flex: 1, alignItems: 'center' }}>
						<Text style={{ fontSize: 12, color: '#6b7280' }}>{d}</Text>
					</View>
				))}
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 8 }}>
				{days.map((d) => (
					<View key={d} style={{ width: 140, paddingHorizontal: 8 }}>
						{(sample as any)[d].length === 0 ? (
							<View style={{ paddingVertical: 8 }}>
								<Card>
									<Text style={{ color: '#6b7280' }}>No tasks</Text>
								</Card>
							</View>
						) : (
							(sample as any)[d].map((t: any) => (
								<View key={t.id} style={{ paddingVertical: 8 }}>
									<Card>
										<View style={{ flexDirection: 'row', alignItems: 'center' }}>
											<View style={{ width: 6, height: 24, backgroundColor: '#e5e7eb', borderRadius: 3, marginRight: 8 }} />
											<View style={{ flex: 1 }}>
												<Text style={{ fontSize: 14, fontWeight: '600', color: '#111827' }}>{t.title}</Text>
											</View>
											<Tag label={t.mode} tone={t.mode === 'Timer' ? 'blue' : 'violet'} />
										</View>
									</Card>
								</View>
							))
						)}
					</View>
				))}
			</ScrollView>
			<View style={{ padding: 16 }}>
				<Text style={{ color: '#6b7280', textAlign: 'center' }}>Tip: Long-press and drag cards to plan your week.</Text>
			</View>
		</View>
	)
}

