# 个人中心页面 (ProfileScreen)

## 页面功能

1. **用户信息展示**：显示用户的基本信息，包括：
   - 用户头像
   - 用户名
   - 用户邮箱
   - 编辑资料按钮
2. **订单管理**：显示订单相关的快捷入口，包括：
   - 待付款
   - 待发货
   - 待收货
   - 待评价
   - 查看全部订单按钮
3. **个人服务**：显示个人相关的服务入口，包括：
   - 我的优惠券
   - 我的收藏
   - 浏览历史
   - 收货地址
4. **其他设置**：显示其他设置选项，包括：
   - 设置
   - 帮助中心
   - 联系客服
5. **退出登录**：点击可退出当前账号
6. **版本信息**：显示当前应用版本号

## 详细展示

### 页面结构
- 用户信息区：顶部显示用户头像、姓名、邮箱和编辑资料按钮
- 订单管理区：显示订单状态快捷入口
- 个人服务区：显示个人相关服务列表
- 其他设置区：显示其他设置选项
- 退出登录按钮：底部显示退出登录按钮
- 版本信息：最底部显示版本号

### 交互功能
- 点击"编辑资料"按钮：进入编辑资料页面（当前为占位功能）
- 点击订单状态快捷入口：进入对应状态的订单列表（当前为占位功能）
- 点击"查看全部"：进入全部订单列表（当前为占位功能）
- 点击个人服务和其他设置项：进入对应功能页面（当前为占位功能）
- 点击"退出登录"按钮：退出当前账号（当前为占位功能）

## 代码实现

```javascript
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 用户信息区域 */}
      <View style={styles.userSection}>
        <Image 
          source={{ uri: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20placeholder%20profile%20picture&image_size=square' }} 
          style={styles.avatar} 
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>用户昵称</Text>
          <Text style={styles.userEmail}>user@example.com</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>编辑资料</Text>
        </TouchableOpacity>
      </View>

      {/* 订单管理 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>订单管理</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>查看全部 →</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orderTypes}>
          <TouchableOpacity style={styles.orderTypeItem}>
            <Text style={styles.orderTypeIcon}>📦</Text>
            <Text style={styles.orderTypeText}>待付款</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderTypeItem}>
            <Text style={styles.orderTypeIcon}>🚚</Text>
            <Text style={styles.orderTypeText}>待发货</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderTypeItem}>
            <Text style={styles.orderTypeIcon}>📞</Text>
            <Text style={styles.orderTypeText}>待收货</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderTypeItem}>
            <Text style={styles.orderTypeIcon}>⭐</Text>
            <Text style={styles.orderTypeText}>待评价</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 个人服务 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>个人服务</Text>
        <View style={styles.serviceList}>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>🎁</Text>
            <Text style={styles.serviceText}>我的优惠券</Text>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>❤️</Text>
            <Text style={styles.serviceText}>我的收藏</Text>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>👣</Text>
            <Text style={styles.serviceText}>浏览历史</Text>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>📍</Text>
            <Text style={styles.serviceText}>收货地址</Text>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 其他设置 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>其他设置</Text>
        <View style={styles.serviceList}>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>⚙️</Text>
            <Text style={styles.serviceText}>设置</Text>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>❓</Text>
            <Text style={styles.serviceText}>帮助中心</Text>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>📞</Text>
            <Text style={styles.serviceText}>联系客服</Text>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 退出登录 */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>退出登录</Text>
      </TouchableOpacity>

      {/* 版本信息 */}
      <Text style={styles.versionText}>版本 1.0.0</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#999',
  },
  editButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#f4511e',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#f4511e',
    fontSize: 14,
  },
  section: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#999',
  },
  orderTypes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  orderTypeItem: {
    alignItems: 'center',
  },
  orderTypeIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  orderTypeText: {
    fontSize: 12,
    color: '#666',
  },
  serviceList: {
    marginTop: 10,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  serviceIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  serviceText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  serviceArrow: {
    fontSize: 20,
    color: '#999',
  },
  logoutButton: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 15,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#f4511e',
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#ccc',
    marginBottom: 20,
  },
});

export default ProfileScreen;