import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';

// 注释掉Jotai相关代码
// import { useAtom } from 'jotai';
// import { userInfoAtom, persistAccountAtom, clearAccountAtom, AccountInfo } from '../../store/atoms';

// 临时用户信息类型
interface UserInfo {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  role: string;
}

const ProfileScreen: React.FC = () => {
  // 使用React的useState替代Jotai
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  // 模拟登录功能
  const handleLogin = () => {
    const mockUserInfo: UserInfo = {
      id: '1',
      name: '张三',
      email: 'zhangsan@example.com',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20user%20avatar%20portrait&image_size=square',
      phone: '13800138000',
      role: '普通用户'
    };

    setUserInfo(mockUserInfo);
    Alert.alert('登录成功', '欢迎回来！');
  };

  // 退出登录功能
  const handleLogout = () => {
    Alert.alert(
      '退出登录',
      '确定要退出登录吗？',
      [
        { text: '取消', style: 'cancel' },
        {
          text: '确定',
          onPress: () => {
            setUserInfo(null);
            Alert.alert('退出成功', '您已成功退出登录');
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 用户信息区域 */}
      <View style={styles.userSection}>
        <Image 
          source={{ 
            uri: userInfo?.avatar || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20placeholder%20profile%20picture&image_size=square' 
          }} 
          style={styles.avatar} 
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userInfo?.name || '未登录'}</Text>
          <Text style={styles.userEmail}>{userInfo?.email || '点击登录账号'}</Text>
        </View>
        {userInfo ? (
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>编辑资料</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>登录</Text>
          </TouchableOpacity>
        )}
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
      {userInfo && (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>退出登录</Text>
        </TouchableOpacity>
      )}

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
  loginButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#f4511e',
    borderRadius: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
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
