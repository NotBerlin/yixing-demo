import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// 导入页面组件
import HomeScreen from '../screens/Home/HomeScreen';
import ProductListScreen from '../screens/ProductList/ProductListScreen';

// 导入采购模块页面
import ProcurementPlanScreen from '../screens/Procurement/ProcurementPlan/ProcurementPlanScreen';
import PurchaseOrderScreen from '../screens/Procurement/PurchaseOrder/PurchaseOrderScreen';
import WarehouseEntryScreen from '../screens/Procurement/WarehouseEntry/WarehouseEntryScreen';

// 导入供应商模块页面
import SupplierListScreen from '../screens/Supplier/SupplierList/SupplierListScreen';
import SupplierEvaluationScreen from '../screens/Supplier/SupplierEvaluation/SupplierEvaluationScreen';
import ContactSupplierScreen from '../screens/Supplier/ContactSupplier/ContactSupplierScreen';

// 导入类型定义
import { HomeStackParamList } from '../types';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: '返回'
      }}
    >
      <HomeStack.Screen 
        name="HomeMain" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      
      {/* 商品模块 */}
      <HomeStack.Screen 
        name="ProductList" 
        component={ProductListScreen} 
        options={{ title: '商品列表' }} 
      />
      
      {/* 采购模块 */}
      <HomeStack.Screen 
        name="ProcurementPlan" 
        component={ProcurementPlanScreen} 
        options={{ title: '采购计划' }} 
      />
      <HomeStack.Screen 
        name="PurchaseOrder" 
        component={PurchaseOrderScreen} 
        options={{ title: '采购订单' }} 
      />
      <HomeStack.Screen 
        name="WarehouseEntry" 
        component={WarehouseEntryScreen} 
        options={{ title: '入库管理' }} 
      />
      
      {/* 供应商模块 */}
      <HomeStack.Screen 
        name="SupplierList" 
        component={SupplierListScreen} 
        options={{ title: '供应商列表' }} 
      />
      <HomeStack.Screen 
        name="SupplierEvaluation" 
        component={SupplierEvaluationScreen} 
        options={{ title: '供应商评价' }} 
      />
      <HomeStack.Screen 
        name="ContactSupplier" 
        component={ContactSupplierScreen} 
        options={{ title: '联系供应商' }} 
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
