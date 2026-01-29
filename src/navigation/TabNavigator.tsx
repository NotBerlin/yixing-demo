import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

// 导入导航器和页面组件
import HomeStackNavigator from './HomeStackNavigator';
import ProfileScreen from '../screens/Profile/ProfileScreen';

// 导入类型定义
import { TabParamList } from '../types';

const Tab = createBottomTabNavigator<TabParamList>();

// 简单的图标组件（实际项目中可以使用@expo/vector-icons）
interface TabIconProps {
  name: 'Home' | 'Profile';
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ name, focused }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, color: focused ? '#f4511e' : '#999' }}>
        {name === 'Home' ? '🏠' : '👤'}
      </Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabIcon name={route.name as 'Home' | 'Profile'} focused={focused} />
        ),
        tabBarActiveTintColor: '#f4511e',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigator} 
        options={{ tabBarLabel: '首页' }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarLabel: '我的' }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
