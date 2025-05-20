import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';
import { Pressable } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#D4AF37',
        tabBarInactiveTintColor: '#F5F5DC',
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          tabBarButton: (props) => (
            <Pressable
              {...props}
              style={{
                top: -20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'darkgreen',
                shadowColor: '#fff',
                shadowOffset: { width: 0.5, height: 0.5 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                width: 70,
                height: 70,
                borderRadius: 35,
                alignSelf: 'center',
              }}>
              <FontAwesome6 name="microphone" size={30} color="white" />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="options"
        options={{ tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} /> }}
      />
    </Tabs>
  );
}
