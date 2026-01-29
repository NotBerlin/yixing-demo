import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

// 导入类型定义
import { WarehouseEntry } from '../../../types';

const WarehouseEntryScreen: React.FC = () => {
  // 模拟入库记录数据
  const entries: WarehouseEntry[] = [
    {
      id: 'WE-001',
      orderId: 'PO-003',
      supplier: 'Xiaomi Corporation',
      totalAmount: 29990,
      status: '已入库',
      entryDate: '2026-01-22',
      items: 1,
    },
    {
      id: 'WE-002',
      orderId: 'PO-002',
      supplier: 'Samsung Electronics',
      totalAmount: 59990,
      status: '待入库',
      entryDate: '2026-01-25',
      items: 3,
    },
    {
      id: 'WE-003',
      orderId: 'PO-001',
      supplier: 'Apple Inc.',
      totalAmount: 99990,
      status: '待入库',
      entryDate: '2026-01-30',
      items: 2,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>新建入库</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        {entries.map((entry) => (
          <TouchableOpacity key={entry.id} style={styles.entryItem}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryId}>入库编号: {entry.id}</Text>
              <Text style={[
                styles.entryStatus, 
                entry.status === '已入库' ? styles.statusCompleted : styles.statusPending
              ]}>
                {entry.status}
              </Text>
            </View>
            <View style={styles.entryInfo}>
              <Text style={styles.orderReference}>订单编号: {entry.orderId}</Text>
              <Text style={styles.supplierName}>供应商: {entry.supplier}</Text>
              <Text style={styles.entryAmount}>总金额: ¥{entry.totalAmount.toLocaleString()}</Text>
              <Text style={styles.entryDetails}>商品数量: {entry.items} | 入库日期: {entry.entryDate}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{entries.length}</Text>
            <Text style={styles.statLabel}>总入库单</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>¥{entries.reduce((sum, entry) => sum + entry.totalAmount, 0).toLocaleString()}</Text>
            <Text style={styles.statLabel}>入库总金额</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{entries.filter(entry => entry.status === '已入库').length}</Text>
            <Text style={styles.statLabel}>已完成入库</Text>
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
  entryItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  entryId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  entryStatus: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
  },
  statusPending: {
    backgroundColor: '#fff3e0',
    color: '#f57c00',
  },
  statusCompleted: {
    backgroundColor: '#e8f5e8',
    color: '#388e3c',
  },
  entryInfo: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
  },
  orderReference: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  supplierName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  entryAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f4511e',
    marginBottom: 5,
  },
  entryDetails: {
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

export default WarehouseEntryScreen;
