import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 导入类型定义
import { HomeStackParamList } from '../../types';

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'HomeMain'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // 导航到商品列表页面
  const navigateToProductList = () => {
    navigation.navigate('ProductList');
  };

  // 导航到采购模块页面
  const navigateToProcurementPlan = () => {
    navigation.navigate('ProcurementPlan');
  };

  const navigateToPurchaseOrder = () => {
    navigation.navigate('PurchaseOrder');
  };

  const navigateToWarehouseEntry = () => {
    navigation.navigate('WarehouseEntry');
  };

  // 导航到供应商模块页面
  const navigateToSupplierList = () => {
    navigation.navigate('SupplierList');
  };

  const navigateToSupplierEvaluation = () => {
    navigation.navigate('SupplierEvaluation');
  };

  const navigateToContactSupplier = () => {
    navigation.navigate('ContactSupplier');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 顶部横幅 */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>欢迎来到电商平台</Text>
        <Text style={styles.bannerSubtitle}>发现优质商品，享受便捷购物</Text>
      </View>

      {/* 采购模块 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>采购管理</Text>
        <View style={styles.moduleContainer}>
          <TouchableOpacity style={styles.moduleItem} onPress={navigateToProcurementPlan}>
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>📋</Text>
            </View>
            <Text style={styles.moduleText}>采购计划</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moduleItem} onPress={navigateToPurchaseOrder}>
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>🛒</Text>
            </View>
            <Text style={styles.moduleText}>采购订单</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moduleItem} onPress={navigateToWarehouseEntry}>
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>📦</Text>
            </View>
            <Text style={styles.moduleText}>入库管理</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 供应商模块 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>供应商管理</Text>
        <View style={styles.moduleContainer}>
          <TouchableOpacity style={styles.moduleItem} onPress={navigateToSupplierList}>
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>🏢</Text>
            </View>
            <Text style={styles.moduleText}>供应商列表</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moduleItem} onPress={navigateToSupplierEvaluation}>
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>⭐</Text>
            </View>
            <Text style={styles.moduleText}>供应商评价</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moduleItem} onPress={navigateToContactSupplier}>
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>📞</Text>
            </View>
            <Text style={styles.moduleText}>联系供应商</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 商品模块 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>商品管理</Text>
        <View style={styles.moduleContainer}>
          <TouchableOpacity 
            style={styles.moduleItem}
            onPress={navigateToProductList}
          >
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>🛍️</Text>
            </View>
            <Text style={styles.moduleText}>商品列表</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moduleItem}>
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>🔥</Text>
            </View>
            <Text style={styles.moduleText}>热门商品</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moduleItem}>
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>📊</Text>
            </View>
            <Text style={styles.moduleText}>库存管理</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 推荐商品预览 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>推荐商品</Text>
        <TouchableOpacity 
          style={styles.productPreview}
          onPress={navigateToProductList}
        >
          <Image 
            source={{ uri: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=iPhone%2015%20Pro%20Max%20product%20image%20white%20background&image_size=square' }} 
            style={styles.productImage} 
          />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>iPhone 15 Pro Max</Text>
            <Text style={styles.productPrice}>¥9999</Text>
            <Text style={styles.viewMore}>查看全部商品 →</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 底部信息 */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 电商平台</Text>
        <Text style={styles.footerSubtext}>让购物更简单</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    backgroundColor: '#f4511e',
    padding: 40,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  entranceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  entranceItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  entranceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  entranceEmoji: {
    fontSize: 30,
  },
  entranceText: {
    fontSize: 14,
    color: '#333',
  },
  moduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moduleItem: {
    width: '31%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  moduleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  moduleEmoji: {
    fontSize: 24,
  },
  moduleText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  productPreview: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#f4511e',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  viewMore: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#ccc',
  },
});

export default HomeScreen;
