import * as Location from 'expo-location';
import { Alert } from 'react-native';

/**
 * 位置工具类
 * 提供获取当前位置、位置权限管理等功能
 */
export const locationUtils = {
  /**
   * 请求位置权限
   * @returns 权限状态
   */
  async requestLocationPermission() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      return status;
    } catch (error) {
      console.error('请求位置权限失败:', error);
      throw error;
    }
  },

  /**
   * 请求后台位置权限
   * @returns 权限状态
   */
  async requestBackgroundLocationPermission() {
    try {
      const { status } = await Location.requestBackgroundPermissionsAsync();
      return status;
    } catch (error) {
      console.error('请求后台位置权限失败:', error);
      throw error;
    }
  },

  /**
   * 获取当前位置
   * @param options 位置选项
   * @returns 当前位置信息
   */
  async getCurrentLocation(options?: Location.LocationOptions) {
    try {
      // 请求权限
      const permissionStatus = await this.requestLocationPermission();
      if (permissionStatus !== 'granted') {
        Alert.alert('权限被拒绝', '需要位置权限才能获取当前位置');
        return null;
      }

      // 获取位置
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
        ...options,
      });

      return location;
    } catch (error) {
      console.error('获取当前位置失败:', error);
      throw error;
    }
  },

  /**
   * 监听位置变化
   * @param callback 位置变化回调
   * @param options 位置选项
   * @returns 订阅对象
   */
  async watchPosition(
    callback: (location: Location.LocationObject) => void,
    options?: Location.LocationOptions
  ) {
    try {
      // 请求权限
      const permissionStatus = await this.requestLocationPermission();
      if (permissionStatus !== 'granted') {
        Alert.alert('权限被拒绝', '需要位置权限才能监听位置变化');
        return null;
      }

      // 监听位置
      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Balanced,
          timeInterval: 1000,
          distanceInterval: 10,
          ...options,
        },
        callback
      );

      return subscription;
    } catch (error) {
      console.error('监听位置变化失败:', error);
      throw error;
    }
  },

  /**
   * 地理编码（地址转坐标）
   * @param address 地址
   * @returns 坐标信息
   */
  async geocodeAddress(address: string) {
    try {
      const results = await Location.geocodeAsync(address);
      return results;
    } catch (error) {
      console.error('地理编码失败:', error);
      throw error;
    }
  },

  /**
   * 反向地理编码（坐标转地址）
   * @param latitude 纬度
   * @param longitude 经度
   * @returns 地址信息
   */
  async reverseGeocode(latitude: number, longitude: number) {
    try {
      const results = await Location.reverseGeocodeAsync({ latitude, longitude });
      return results;
    } catch (error) {
      console.error('反向地理编码失败:', error);
      throw error;
    }
  },

  /**
   * 计算两个位置之间的距离
   * @param location1 第一个位置
   * @param location2 第二个位置
   * @returns 距离（米）
   */
  calculateDistance(
    location1: { latitude: number; longitude: number },
    location2: { latitude: number; longitude: number }
  ) {
    try {
      const distance = Location.distanceBetween(
        location1.latitude,
        location1.longitude,
        location2.latitude,
        location2.longitude
      );
      return distance;
    } catch (error) {
      console.error('计算距离失败:', error);
      throw error;
    }
  },
};
