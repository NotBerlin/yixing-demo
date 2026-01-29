# 采购计划页面 (ProcurementPlanScreen)

## 页面功能

1. **新建计划按钮**：位于页面顶部右侧，点击可新建采购计划
2. **采购计划列表**：显示所有采购计划，每个计划包含：
   - 计划名称
   - 计划状态（进行中、待审批、已完成）
   - 总金额
   - 创建日期
3. **计划统计**：显示计划相关统计信息：
   - 总计划数
   - 计划总金额
   - 进行中计划数

## 详细展示

### 页面结构
- 顶部操作区：右侧有"新建计划"按钮
- 计划列表区：显示所有采购计划，每个计划以卡片形式展示
- 统计信息区：以卡片形式展示计划统计数据

### 状态显示
- **进行中**：蓝色背景，蓝色文字
- **待审批**：橙色背景，橙色文字
- **已完成**：绿色背景，绿色文字

### 交互功能
- 点击"新建计划"按钮：触发新建计划操作
- 点击计划卡片：可查看计划详情（当前为占位功能）

## 代码实现

```javascript
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const ProcurementPlanScreen = () => {
  // 模拟采购计划数据
  const plans = [
    {
      id: '1',
      name: '2026年Q1采购计划',
      status: '进行中',
      totalAmount: 500000,
      createDate: '2026-01-01',
    },
    {
      id: '2',
      name: '2026年Q2采购计划',
      status: '待审批',
      totalAmount: 600000,
      createDate: '2026-01-15',
    },
    {
      id: '3',
      name: '紧急采购计划',
      status: '已完成',
      totalAmount: 100000,
      createDate: '2026-01-20',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>新建计划</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        {plans.map((plan) => (
          <TouchableOpacity key={plan.id} style={styles.planItem}>
            <View style={styles.planHeader}>
              <Text style={styles.planName}>{plan.name}</Text>
              <Text style={[styles.planStatus, plan.status === '进行中' ? styles.statusActive : plan.status === '待审批' ? styles.statusPending : styles.statusCompleted]}>
                {plan.status}
              </Text>
            </View>
            <View style={styles.planInfo}>
              <Text style={styles.planAmount}>总金额: ¥{plan.totalAmount.toLocaleString()}</Text>
              <Text style={styles.planDate}>创建日期: {plan.createDate}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>总计划数</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>¥1,200,000</Text>
            <Text style={styles.statLabel}>计划总金额</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>进行中计划</Text>
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
  planItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  planName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  planStatus: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
  },
  statusActive: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
  },
  statusPending: {
    backgroundColor: '#fff3e0',
    color: '#f57c00',
  },
  statusCompleted: {
    backgroundColor: '#e8f5e8',
    color: '#388e3c',
  },
  planInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  planAmount: {
    fontSize: 14,
    color: '#666',
  },
  planDate: {
    fontSize: 14,
    color: '#666',
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

export default ProcurementPlanScreen;