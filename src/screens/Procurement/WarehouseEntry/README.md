# 入库管理页面 (WarehouseEntryScreen)

## 页面功能

1. **新建入库按钮**：位于页面顶部右侧，点击可新建入库记录
2. **入库记录列表**：显示所有入库记录，每个记录包含：
   - 入库编号
   - 入库状态（已入库、待入库）
   - 订单编号（关联的采购订单）
   - 供应商名称
   - 总金额
   - 商品数量
   - 入库日期
3. **入库统计**：显示入库相关统计信息：
   - 总入库单
   - 入库总金额
   - 已完成入库

## 详细展示

### 页面结构
- 顶部操作区：右侧有"新建入库"按钮
- 入库记录列表区：显示所有入库记录，每个记录以卡片形式展示
- 统计信息区：以卡片形式展示入库统计数据

### 状态显示
- **已入库**：绿色背景，绿色文字
- **待入库**：橙色背景，橙色文字

### 交互功能
- 点击"新建入库"按钮：触发新建入库操作
- 点击入库记录卡片：可查看入库详情（当前为占位功能）

## 代码实现

```javascript
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const WarehouseEntryScreen = () => {
  // 模拟入库记录数据
  const entries = [
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
              <Text style={[styles.entryStatus, entry.status === '已入库' ? styles.statusCompleted : styles.statusPending]}>
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
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>总入库单</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>¥189,970</Text>
            <Text style={styles.statLabel}>入库总金额</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1</Text>
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