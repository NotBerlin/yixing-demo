# 供应商列表页面 (SupplierListScreen)

## 页面功能

1. **添加供应商按钮**：位于页面顶部右侧，点击可添加新供应商
2. **供应商列表**：显示所有供应商信息，每个供应商包含：
   - 供应商名称
   - 评分
   - 联系人姓名
   - 联系电话
   - 联系邮箱
   - 供应商状态（活跃/非活跃）
   - 供应商分类
3. **供应商统计**：显示供应商相关统计信息：
   - 总供应商数
   - 活跃供应商数
   - 平均评分

## 详细展示

### 页面结构
- 顶部操作区：右侧有"添加供应商"按钮
- 供应商列表区：显示所有供应商，每个供应商以卡片形式展示
- 统计信息区：以卡片形式展示供应商统计数据

### 状态显示
- **活跃**：绿色背景，绿色文字
- **非活跃**：红色背景，红色文字

### 交互功能
- 点击"添加供应商"按钮：触发添加供应商操作
- 点击供应商卡片：可查看供应商详情（当前为占位功能）

## 代码实现

```javascript
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const SupplierListScreen = () => {
  // 模拟供应商数据
  const suppliers = [
    {
      id: 'SUP-001',
      name: 'Apple Inc.',
      contact: 'John Doe',
      phone: '+1 (408) 996-1010',
      email: 'contact@apple.com',
      rating: 4.8,
      status: '活跃',
      category: '电子设备',
    },
    {
      id: 'SUP-002',
      name: 'Samsung Electronics',
      contact: 'Kim Min-joon',
      phone: '+82 2-2053-3000',
      email: 'info@samsung.com',
      rating: 4.6,
      status: '活跃',
      category: '电子设备',
    },
    {
      id: 'SUP-003',
      name: 'Xiaomi Corporation',
      contact: 'Lei Jun',
      phone: '+86 10-60606666',
      email: 'contact@xiaomi.com',
      rating: 4.5,
      status: '活跃',
      category: '电子设备',
    },
    {
      id: 'SUP-004',
      name: 'Sony Corporation',
      contact: 'Kenichiro Yoshida',
      phone: '+81 3-6748-2111',
      email: 'info@sony.com',
      rating: 4.7,
      status: '活跃',
      category: '电子设备',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>添加供应商</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        {suppliers.map((supplier) => (
          <TouchableOpacity key={supplier.id} style={styles.supplierItem}>
            <View style={styles.supplierHeader}>
              <Text style={styles.supplierName}>{supplier.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{supplier.rating}</Text>
                <Text style={styles.ratingStars}>⭐</Text>
              </View>
            </View>
            <View style={styles.supplierInfo}>
              <Text style={styles.contactInfo}>联系人: {supplier.contact}</Text>
              <Text style={styles.contactInfo}>电话: {supplier.phone}</Text>
              <Text style={styles.contactInfo}>邮箱: {supplier.email}</Text>
              <View style={styles.supplierMeta}>
                <Text style={[styles.statusBadge, supplier.status === '活跃' ? styles.statusActive : styles.statusInactive]}>
                  {supplier.status}
                </Text>
                <Text style={styles.categoryText}>分类: {supplier.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>总供应商</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>活跃供应商</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4.65</Text>
            <Text style={styles.statLabel}>平均评分</Text>
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
  supplierItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  supplierHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  supplierName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f4511e',
    marginRight: 5,
  },
  ratingStars: {
    fontSize: 16,
  },
  supplierInfo: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
  },
  contactInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  supplierMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
  },
  statusActive: {
    backgroundColor: '#e8f5e8',
    color: '#388e3c',
  },
  statusInactive: {
    backgroundColor: '#ffebee',
    color: '#d32f2f',
  },
  categoryText: {
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

export default SupplierListScreen;