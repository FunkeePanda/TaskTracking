import { View, Text, Pressable, TextInput, FlatList } from 'react-native'
import { useMemo, useState } from 'react'
import { Card, ListItem, Tag, ProgressRing, Button } from '../components'

type Mode = 'Checklist' | 'Timer'

type SampleTask = {
	id: string
	title: string
	mode: Mode
	progress: number
	subtasks: number
}

export default function TodayScreen() {
	const [text, setText] = useState('')
	const data = useMemo<SampleTask[]>(
		() => [
			{ id: '1', title: 'Morning routine', mode: 'Checklist', progress: 0.4, subtasks: 5 },
			{ id: '2', title: 'Deep work block', mode: 'Timer', progress: 0.7, subtasks: 0 },
			{ id: '3', title: 'Workout', mode: 'Checklist', progress: 0.2, subtasks: 3 },
			{ id: '4', title: 'Read 30 pages', mode: 'Timer', progress: 0.1, subtasks: 0 },
		],
		[]
	)

	const dateStr = useMemo(() => {
		const d = new Date()
		return d.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })
	}, [])

	function renderHeader() {
		return (
			<View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
				<View style={{ flex: 1 }}>
					<Text accessibilityRole="header" style={{ fontSize: 28, fontWeight: '700', color: '#111827' }} testID="todayDate">
						{dateStr}
					</Text>
					<Text style={{ color: '#6b7280', marginTop: 4 }}>Win the Day</Text>
				</View>
				<Button label="★" variant="secondary" size="sm" testID="winTheDayButton" accessibilityLabel="Win the Day" />
			</View>
		)
	}

	function renderItem({ item }: { item: SampleTask }) {
		return (
			<ListItem
				title={item.title}
				subtitle={item.subtasks ? `${item.subtasks} subtasks` : undefined}
				left={<ProgressRing size={28} strokeWidth={4} progress={item.progress} />}
				right={<Tag label={item.mode} tone={item.mode === 'Timer' ? 'blue' : 'violet'} />}
				testID={`task-${item.id}`}
				accessibilityLabel={item.title}
			/>
		)
	}

	function renderEmpty() {
		return (
			<View style={{ padding: 16 }}>
				<Card testID="emptyCard" accessibilityLabel="No tasks today">
					<Text style={{ fontSize: 16, color: '#6b7280' }}>No tasks yet. Add one to win the day!</Text>
				</Card>
			</View>
		)
	}

	function renderQuickAdd() {
		return (
			<View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, gap: 8 }}>
				<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 12 }}>
					<Text style={{ fontSize: 20, marginRight: 8 }}>+</Text>
					<TextInput
						value={text}
						onChangeText={setText}
						placeholder="Quick add a task"
						style={{ flex: 1, height: 44 }}
						testID="quickAddInput"
						accessibilityLabel="Quick add task"
					/>
				</View>
				<Pressable testID="quickAddButton" accessibilityRole="button" accessibilityLabel="Add task" style={{ paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#2563eb', borderRadius: 10 }}>
					<Text style={{ color: '#fff', fontWeight: '600' }}>Add</Text>
				</Pressable>
			</View>
		)
	}

	return (
		<View style={{ flex: 1 }}>
			{renderHeader()}
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
				ListEmptyComponent={renderEmpty}
				contentContainerStyle={{ paddingVertical: 8 }}
				testID="todayList"
			/>
			{renderQuickAdd()}
		</View>
	)
}

