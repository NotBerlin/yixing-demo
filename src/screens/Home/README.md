# 首页 (HomeScreen)

## 页面功能

1. **顶部横幅**：显示欢迎信息和平台标语
2. **采购管理模块**：
   - 采购计划：导航到采购计划页面
   - 采购订单：导航到采购订单页面
   - 入库管理：导航到入库管理页面
3. **供应商管理模块**：
   - 供应商列表：导航到供应商列表页面
   - 供应商评价：导航到供应商评价页面
   - 联系供应商：导航到联系供应商页面
4. **商品管理模块**：
   - 商品列表：导航到商品列表页面
   - 热门商品：占位功能
   - 库存管理：占位功能
5. **推荐商品预览**：显示推荐商品并导航到商品列表页面
6. **底部信息**：显示版权信息

## 详细展示

### 页面结构
- 顶部横幅：橙色背景，白色文字
- 模块区域：每个模块包含标题和三个功能入口
- 推荐商品：包含商品图片、名称、价格和查看全部链接
- 底部信息：灰色文字，居中显示

### 导航功能
- 点击采购计划 → 导航到 ProcurementPlan 页面
- 点击采购订单 → 导航到 PurchaseOrder 页面
- 点击入库管理 → 导航到 WarehouseEntry 页面
- 点击供应商列表 → 导航到 SupplierList 页面
- 点击供应商评价 → 导航到 SupplierEvaluation 页面
- 点击联系供应商 → 导航到 ContactSupplier 页面
- 点击商品列表 → 导航到 ProductList 页面
- 点击推荐商品预览 → 导航到 ProductList 页面

## 代码实现

```javascript
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
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