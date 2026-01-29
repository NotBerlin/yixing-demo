import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as BarcodeScanner from 'expo-barcode-scanner';
import { Platform, Alert } from 'react-native';

/**
 * 摄像头工具类
 * 提供摄像头权限获取、扫码、拍照等功能
 */
export const cameraUtils = {
  /**
   * 请求摄像头权限
   * @returns 权限状态
   */
  async requestCameraPermission() {
    try {
      const { status } = await Camera.requestCameraPermissionsAsync();
      return status;
    } catch (error) {
      console.error('请求摄像头权限失败:', error);
      throw error;
    }
  },

  /**
   * 请求扫码权限
   * @returns 权限状态
   */
  async requestScannerPermission() {
    try {
      const { status } = await BarcodeScanner.requestPermissionsAsync();
      return status;
    } catch (error) {
      console.error('请求扫码权限失败:', error);
      throw error;
    }
  },

  /**
   * 扫描二维码/条形码
   * @param onBarcodeScanned 扫码成功回调
   * @param onError 错误回调
   * @returns 扫码组件引用
   */
  async scanBarcode(onBarcodeScanned: (data: string) => void, onError?: (error: Error) => void) {
    try {
      // 请求权限
      const permissionStatus = await this.requestScannerPermission();
      if (permissionStatus !== 'granted') {
        Alert.alert('权限被拒绝', '需要摄像头权限才能扫码');
        return null;
      }

      // 这里返回一个扫码组件的配置，实际使用时需要在组件中渲染
      return {
        permissionGranted: permissionStatus === 'granted',
        onBarcodeScanned: (result: BarcodeScanner.BarcodeScannedEvent) => {
          if (result.data) {
            onBarcodeScanned(result.data);
          }
        },
      };
    } catch (error) {
      console.error('扫码失败:', error);
      onError?.(error as Error);
      throw error;
    }
  },

  /**
   * 拍照
   * @param cameraRef 摄像头引用
   * @param options 拍照选项
   * @returns 拍照结果
   */
  async takePicture(cameraRef: React.RefObject<Camera>, options?: Camera.CaptureOptions) {
    try {
      if (!cameraRef.current) {
        throw new Error('摄像头未初始化');
      }

      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        base64: true,
        ...options,
      });

      return photo;
    } catch (error) {
      console.error('拍照失败:', error);
      throw error;
    }
  },

  /**
   * 切换摄像头
   * @param currentType 当前摄像头类型
   * @returns 新的摄像头类型
   */
  toggleCameraType(currentType: CameraType) {
    return currentType === CameraType.back ? CameraType.front : CameraType.back;
  },

  /**
   * 切换闪光灯
   * @param currentMode 当前闪光灯模式
   * @returns 新的闪光灯模式
   */
  toggleFlashMode(currentMode: FlashMode) {
    const modes: FlashMode[] = ['off', 'on', 'auto'];
    const currentIndex = modes.indexOf(currentMode);
    return modes[(currentIndex + 1) % modes.length];
  },

  /**
   * 获取支持的摄像头类型
   * @returns 摄像头类型数组
   */
  async getAvailableCameraTypes() {
    try {
      const { front, back } = await Camera.getAvailableCameraTypesAsync();
      const types: CameraType[] = [];
      if (back) types.push(CameraType.back);
      if (front) types.push(CameraType.front);
      return types;
    } catch (error) {
      console.error('获取摄像头类型失败:', error);
      return [];
    }
  },
};
