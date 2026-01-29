# 供应商评价页面 (SupplierEvaluationScreen)

## 页面功能

1. **新建评价按钮**：位于页面顶部右侧，点击可新建供应商评价
2. **评价列表**：显示所有供应商评价，每个评价包含：
   - 供应商名称
   - 评分
   - 评价人
   - 评价日期
   - 评价内容
   - 分类评分（产品质量、交货及时性、服务态度、价格合理性）
3. **评价统计**：显示评价相关统计信息：
   - 总评价数
   - 平均评分
   - 评价供应商数

## 详细展示

### 页面结构
- 顶部操作区：右侧有"新建评价"按钮
- 评价列表区：显示所有评价，每个评价以卡片形式展示
- 统计信息区：以卡片形式展示评价统计数据

### 交互功能
- 点击"新建评价"按钮：触发新建评价操作
- 点击评价卡片：可查看评价详情（当前为占位功能）

## 代码实现

```javascript
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const SupplierEvaluationScreen = () => {
  // 模拟供应商评价数据
  const evaluations = [
    {
      id: 'EVAL-001',
      supplierId: 'SUP-001',
      supplierName: 'Apple Inc.',
      evaluator: '采购部 - 张三',
      rating: 4.8,
      date: '2026-01-20',
      content: '产品质量优秀，交货及时，服务态度好，是值得信赖的供应商。',
      categories: {
        quality: 5,
        delivery: 4.5,
        service: 5,
        price: 4.5,
      },
    },
    {
      id: 'EVAL-002',
      supplierId: 'SUP-002',
      supplierName: 'Samsung Electronics',
      evaluator: '采购部 - 李四',
      rating: 4.6,
      date: '2026-01-18',
      content: '产品性能稳定，交货周期合理，技术支持响应及时。',
      categories: {
        quality: 4.5,
        delivery: 4.5,
        service: 4.5,
        price: 4.5,
      },
    },
    {
      id: 'EVAL-003',
      supplierId: 'SUP-003',
      supplierName: 'Xiaomi Corporation',
      evaluator: '采购部 - 王五',
      rating: 4.5,
      date: '2026-01-15',
      content: '产品性价比高，交货及时，服务态度良好。',
      categories: {
        quality: 4,
        delivery: 5,
        service: 4.5,
        price: 5,
      },
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>新建评价</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        {evaluations.map((evalItem) => (
          <TouchableOpacity key={evalItem.id} style={styles.evalItem}>
            <View style={styles.evalHeader}>
              <Text style={styles.supplierName}>{evalItem.supplierName}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{evalItem.rating}</Text>
                <Text style={styles.ratingStars}>⭐</Text>
              </View>
            </View>
            <View style={styles.evalInfo}>
              <Text style={styles.evaluatorInfo}>评价人: {evalItem.evaluator}</Text>
              <Text style={styles.evalDate}>评价日期: {evalItem.date}</Text>
              <Text style={styles.evalContent}>{evalItem.content}</Text>
              <View style={styles.categoryRatings}>
                <View style={styles.categoryItem}>
                  <Text style={styles.categoryLabel}>产品质量</Text>
                  <Text style={styles.categoryValue}>{evalItem.categories.quality}</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text style={styles.categoryLabel}>交货及时性</Text>
                  <Text style={styles.categoryValue}>{evalItem.categories.delivery}</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text style={styles.categoryLabel}>服务态度</Text>
                  <Text style={styles.categoryValue}>{evalItem.categories.service}</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text style={styles.categoryLabel}>价格合理性</Text>
                  <Text style={styles.categoryValue}>{evalItem.categories.price}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>总评价数</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4.63</Text>
            <Text style={styles.statLabel}>平均评分</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>评价供应商数</Text>
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
  evalItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  evalHeader: {
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
  evalInfo: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
  },
  evaluatorInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  evalDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  evalContent: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 15,
  },
  categoryRatings: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  categoryItem: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  categoryLabel: {
    fontSize: 12,
    color: '#999',
  },
  categoryValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f4511e',
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

export default SupplierEvaluationScreen;