import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';
import { ActivityIndicator, GestureResponderEvent, Pressable, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import fonts from '~/constants/fonts';
import { useFonts } from 'expo-font';

type TabBarButtonProps = {
  accessibilityLabel?: string;
  accessibilityState?: { selected?: boolean };
  onPress?: (event: GestureResponderEvent) => void;
  testID?: string;
};

export default function TabLayout() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'beige',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

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
          tabBarButton: (props: TabBarButtonProps) => (
            <Pressable
              {...props}
              style={{
                position: 'absolute',
                top: -30,
                alignSelf: 'center',
                backgroundColor: 'darkgreen',
                width: 70,
                height: 70,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#D4AF37',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.6,
                shadowRadius: 6,
                elevation: 10,
              }}>
              <FontAwesome6 name="microphone" size={28} color="#fff" />
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
