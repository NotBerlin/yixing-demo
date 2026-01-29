import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

// 导入类型定义
import { PurchaseOrder } from '../../../types';

const PurchaseOrderScreen: React.FC = () => {
  // 模拟采购订单数据
  const orders: PurchaseOrder[] = [
    {
      id: 'PO-001',
      supplier: 'Apple Inc.',
      totalAmount: 99990,
      status: '已下单',
      items: 2,
      createDate: '2026-01-20',
    },
    {
      id: 'PO-002',
      supplier: 'Samsung Electronics',
      totalAmount: 59990,
      status: '已发货',
      items: 3,
      createDate: '2026-01-18',
    },
    {
      id: 'PO-003',
      supplier: 'Xiaomi Corporation',
      totalAmount: 29990,
      status: '已完成',
      items: 1,
      createDate: '2026-01-15',
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
              <Text style={[
                styles.orderStatus, 
                order.status === '已下单' ? styles.statusOrdered : 
                order.status === '已发货' ? styles.statusShipped : 
                styles.statusCompleted
              ]}>
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
            <Text style={styles.statValue}>{orders.length}</Text>
            <Text style={styles.statLabel}>总订单数</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>¥{orders.reduce((sum, order) => sum + order.totalAmount, 0).toLocaleString()}</Text>
            <Text style={styles.statLabel}>订单总金额</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{orders.filter(order => order.status !== '已完成').length}</Text>
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
