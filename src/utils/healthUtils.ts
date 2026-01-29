import * as HealthKit from 'expo-health';
import { Platform, Alert } from 'react-native';

/**
 * 健康数据工具类
 * 提供获取运动步数、活动数据等功能
 */
export const healthUtils = {
  /**
   * 检查平台支持
   * @returns 是否支持健康数据
   */
  isHealthDataAvailable() {
    return Platform.OS === 'ios' || Platform.OS === 'android';
  },

  /**
   * 请求健康数据权限
   * @param permissions 权限数组
   * @returns 权限状态
   */
  async requestPermissions(permissions: HealthKit.Permission[]) {
    try {
      if (!this.isHealthDataAvailable()) {
        throw new Error('当前平台不支持健康数据');
      }

      const { status } = await HealthKit.requestPermissionsAsync(permissions);
      return status;
    } catch (error) {
      console.error('请求健康数据权限失败:', error);
      throw error;
    }
  },

  /**
   * 请求步数权限
   * @returns 权限状态
   */
  async requestStepsPermission() {
    try {
      return await this.requestPermissions([
        HealthKit.Permission.Steps,
      ]);
    } catch (error) {
      console.error('请求步数权限失败:', error);
      throw error;
    }
  },

  /**
   * 获取今日步数
   * @returns 今日步数
   */
  async getTodaySteps() {
    try {
      if (!this.isHealthDataAvailable()) {
        Alert.alert('不支持', '当前平台不支持健康数据');
        return 0;
      }

      // 请求权限
      const permissionStatus = await this.requestStepsPermission();
      if (!permissionStatus[HealthKit.Permission.Steps]) {
        Alert.alert('权限被拒绝', '需要健康数据权限才能获取步数');
        return 0;
      }

      // 获取今天的开始和结束时间
      const now = new Date();
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

      // 获取步数
      const result = await HealthKit.getStepsAsync(startOfDay, endOfDay);
      return result;
    } catch (error) {
      console.error('获取今日步数失败:', error);
      throw error;
    }
  },

  /**
   * 获取指定时间段的步数
   * @param startDate 开始时间
   * @param endDate 结束时间
   * @returns 步数
   */
  async getSteps(startDate: Date, endDate: Date) {
    try {
      if (!this.isHealthDataAvailable()) {
        Alert.alert('不支持', '当前平台不支持健康数据');
        return 0;
      }

      // 请求权限
      const permissionStatus = await this.requestStepsPermission();
      if (!permissionStatus[HealthKit.Permission.Steps]) {
        Alert.alert('权限被拒绝', '需要健康数据权限才能获取步数');
        return 0;
      }

      // 获取步数
      const result = await HealthKit.getStepsAsync(startDate, endDate);
      return result;
    } catch (error) {
      console.error('获取步数失败:', error);
      throw error;
    }
  },

  /**
   * 获取最近7天的步数
   * @returns 最近7天的步数数组
   */
  async getLast7DaysSteps() {
    try {
      const stepsArray: { date: string; steps: number }[] = [];
      const now = new Date();

      // 获取最近7天的步数
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        
        const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);

        const steps = await this.getSteps(startOfDay, endOfDay);
        stepsArray.push({
          date: date.toISOString().split('T')[0],
          steps,
        });
      }

      return stepsArray;
    } catch (error) {
      console.error('获取最近7天步数失败:', error);
      throw error;
    }
  },

  /**
   * 获取活动卡路里
   * @param startDate 开始时间
   * @param endDate 结束时间
   * @returns 活动卡路里
   */
  async getActiveEnergy(startDate: Date, endDate: Date) {
    try {
      if (!this.isHealthDataAvailable()) {
        Alert.alert('不支持', '当前平台不支持健康数据');
        return 0;
      }

      // 请求权限
      const permissionStatus = await this.requestPermissions([
        HealthKit.Permission.ActiveEnergy,
      ]);
      if (!permissionStatus[HealthKit.Permission.ActiveEnergy]) {
        Alert.alert('权限被拒绝', '需要健康数据权限才能获取活动卡路里');
        return 0;
      }

      // 获取活动卡路里
      const result = await HealthKit.getActiveEnergyAsync(startDate, endDate);
      return result;
    } catch (error) {
      console.error('获取活动卡路里失败:', error);
      throw error;
    }
  },

  /**
   * 获取步行+跑步距离
   * @param startDate 开始时间
   * @param endDate 结束时间
   * @returns 步行+跑步距离（米）
   */
  async getWalkingRunningDistance(startDate: Date, endDate: Date) {
    try {
      if (!this.isHealthDataAvailable()) {
        Alert.alert('不支持', '当前平台不支持健康数据');
        return 0;
      }

      // 请求权限
      const permissionStatus = await this.requestPermissions([
        HealthKit.Permission.WalkingRunningDistance,
      ]);
      if (!permissionStatus[HealthKit.Permission.WalkingRunningDistance]) {
        Alert.alert('权限被拒绝', '需要健康数据权限才能获取步行+跑步距离');
        return 0;
      }

      // 获取步行+跑步距离
      const result = await HealthKit.getWalkingRunningDistanceAsync(startDate, endDate);
      return result;
    } catch (error) {
      console.error('获取步行+跑步距离失败:', error);
      throw error;
    }
  },
};
