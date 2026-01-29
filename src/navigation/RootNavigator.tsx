import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 导入导航器和页面组件
import TabNavigator from './TabNavigator';
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen';

// 导入类型定义
import { RootStackParamList } from '../types';

export type RootStackNavigatorProp = typeof RootStack.Navigator;

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* 底部标签栏作为根页面 */}
        <RootStack.Screen name="Main" component={TabNavigator} />
        {/* 商品详情页面作为全局页面 */}
        <RootStack.Screen 
          name="ProductDetail" 
          component={ProductDetailScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            title: '商品详情',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
