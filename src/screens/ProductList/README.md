# 商品列表页面 (ProductListScreen)

## 页面功能

1. **商品列表展示**：显示所有商品，每个商品包含：
   - 商品图片
   - 商品名称
   - 商品价格
   - 商品描述
2. **商品详情导航**：点击商品卡片可导航到商品详情页面
3. **滚动加载**：使用FlatList实现商品列表的滚动加载

## 详细展示

### 页面结构
- 商品列表：使用FlatList展示商品卡片
- 商品卡片：每个商品以横向卡片形式展示，左侧是商品图片，右侧是商品信息

### 交互功能
- 点击商品卡片：导航到商品详情页面，并传递商品数据

## 代码实现

```javascript
import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const ProductListScreen = ({ navigation }) => {
  // 模拟商品数据
  const products = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max',
      price: 9999,
      description: '最新款iPhone，搭载A17 Pro芯片',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=iPhone%2015%20Pro%20Max%20product%20image%20white%20background&image_size=square'
    },
    {
      id: '2',
      name: 'MacBook Pro 16',
      price: 19999,
      description: '专业级笔记本电脑，M3 Pro芯片',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MacBook%20Pro%2016%20inch%20product%20image%20white%20background&image_size=square'
    },
    {
      id: '3',
      name: 'AirPods Pro 2',
      price: 1899,
      description: '主动降噪耳机，空间音频',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AirPods%20Pro%202nd%20generation%20product%20image%20white%20background&image_size=square'
    },
    {
      id: '4',
      name: 'iPad Pro 12.9',
      price: 8999,
      description: '专业级平板电脑，M2芯片',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=iPad%20Pro%2012.9%20inch%20product%20image%20white%20background&image_size=square'
    },
    {
      id: '5',
      name: 'Apple Watch Ultra',
      price: 6299,
      description: '极限运动手表，超长续航',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Apple%20Watch%20Ultra%20product%20image%20white%20background&image_size=square'
    }
  ];

  const renderProduct = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.productCard}
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>¥{item.price}</Text>
          <Text style={styles.productDescription} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
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
    marginBottom: 5,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#f4511e',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default ProductListScreen;