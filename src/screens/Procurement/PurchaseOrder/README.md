# 采购订单页面 (PurchaseOrderScreen)

## 页面功能

1. **新建订单按钮**：位于页面顶部右侧，点击可新建采购订单
2. **采购订单列表**：显示所有采购订单，每个订单包含：
   - 订单编号
   - 订单状态（已下单、已发货、已完成）
   - 供应商名称
   - 总金额
   - 商品数量
   - 创建日期
3. **订单统计**：显示订单相关统计信息：
   - 总订单数
   - 订单总金额
   - 未完成订单数

## 详细展示

### 页面结构
- 顶部操作区：右侧有"新建订单"按钮
- 订单列表区：显示所有采购订单，每个订单以卡片形式展示
- 统计信息区：以卡片形式展示订单统计数据

### 状态显示
- **已下单**：蓝色背景，蓝色文字
- **已发货**：橙色背景，橙色文字
- **已完成**：绿色背景，绿色文字

### 交互功能
- 点击"新建订单"按钮：触发新建订单操作
- 点击订单卡片：可查看订单详情（当前为占位功能）

## 代码实现

```javascript
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const PurchaseOrderScreen = () => {
  // 模拟采购订单数据
  const orders = [
    {
      id: 'PO-001',
      supplier: 'Apple Inc.',
      totalAmount: 99990,
      status: '已下单',
      createDate: '2026-01-20',
      items: 2,
    },
    {
      id: 'PO-002',
      supplier: 'Samsung Electronics',
      totalAmount: 59990,
      status: '已发货',
      createDate: '2026-01-18',
      items: 3,
    },
    {
      id: 'PO-003',
      supplier: 'Xiaomi Corporation',
      totalAmount: 29990,
      status: '已完成',
      createDate: '2026-01-15',
      items: 1,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>新建订单</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        {orders.map((order) => (
          <TouchableOpacity key={order.id} style={styles.orderItem}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderId}>订单编号: {order.id}</Text>
              <Text style={[styles.orderStatus, order.status === '已下单' ? styles.statusOrdered : order.status === '已发货' ? styles.statusShipped : styles.statusCompleted]}>
                {order.status}
              </Text>
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.supplierName}>供应商: {order.supplier}</Text>
              <Text style={styles.orderAmount}>总金额: ¥{order.totalAmount.toLocaleString()}</Text>
              <Text style={styles.orderDetails}>商品数量: {order.items} | 创建日期: {order.createDate}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>总订单数</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>¥189,970</Text>
            <Text style={styles.statLabel}>订单总金额</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>未完成订单</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
  },
  addButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#f4511e',
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  orderItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderStatus: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
  },
  statusOrdered: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
  },
  statusShipped: {
    backgroundColor: '#fff3e0',
    color: '#f57c00',
  },
  statusCompleted: {
    backgroundColor: '#e8f5e8',
    color: '#388e3c',
  },
  orderInfo: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
  },
  supplierName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f4511e',
    marginBottom: 5,
  },
  orderDetails: {
    fontSize: 12,
    color: '#999',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    padding: 15,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f4511e',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default PurchaseOrderScreen;