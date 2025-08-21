import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider, YStack, H3 } from 'tamagui';
import config from './tamagui.config';
import './global.css';
import TodayScreen from './screens/TodayScreen';
import WeekScreen from './screens/WeekScreen';
import SettingsScreen from './screens/SettingsScreen';
import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState<'today' | 'week' | 'settings'>('today');
  return (
    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={styles.container}>
        <View style={styles.content}> 
          {tab === 'today' && <TodayScreen />}
          {tab === 'week' && <WeekScreen />}
          {tab === 'settings' && <SettingsScreen />}
        </View>
        <View style={styles.tabs}>
          <YStack flex={1} alignItems="center" justifyContent="center" onTouchEnd={() => setTab('today')}>
            <H3>Today</H3>
          </YStack>
          <YStack flex={1} alignItems="center" justifyContent="center" onTouchEnd={() => setTab('week')}>
            <H3>Week</H3>
          </YStack>
          <YStack flex={1} alignItems="center" justifyContent="center" onTouchEnd={() => setTab('settings')}>
            <H3>Settings</H3>
          </YStack>
        </View>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    height: 64,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e5e7eb',
  },
});
