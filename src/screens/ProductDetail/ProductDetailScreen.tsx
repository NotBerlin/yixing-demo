import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

// 导入类型定义
import { Product, RootStackParamList } from '../../types';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen: React.FC = () => {
  // 从路由参数中获取商品数据
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { product } = route.params;

  const handleAddToCart = () => {
    // 模拟加入购物车功能
    alert(`${product.name} 已加入购物车`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 商品图片 */}
      <Image source={{ uri: product.image }} style={styles.productImage} />
      
      {/* 商品信息 */}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>¥{product.price}</Text>
        <Text style={styles.sectionTitle}>商品描述</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        
        {/* 商品详情 */}
        <Text style={styles.sectionTitle}>商品详情</Text>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>品牌</Text>
          <Text style={styles.detailValue}>Apple</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>产地</Text>
          <Text style={styles.detailValue}>美国</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>库存</Text>
          <Text style={styles.detailValue}>充足</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>保修</Text>
          <Text style={styles.detailValue}>1年保修</Text>
        </View>
      </View>
      
      {/* 底部操作栏 */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>查看购物车</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>加入购物车</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  productImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
  },
  productInfo: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f4511e',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  detailItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailLabel: {
    width: 80,
    fontSize: 14,
    color: '#999',
  },
  detailValue: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  cartButtonText: {
    fontSize: 16,
    color: '#333',
  },
  addToCartButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#f4511e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 10,
  },
  addToCartButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
