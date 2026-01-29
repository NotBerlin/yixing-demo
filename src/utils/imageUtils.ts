import * as ImagePicker from 'expo-image-picker';
import { Platform, Alert } from 'react-native';

/**
 * 图片工具类
 * 提供从相册选择图片、拍照等功能
 */
export const imageUtils = {
  /**
   * 请求相册权限
   * @returns 权限状态
   */
  async requestMediaLibraryPermission() {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      return status;
    } catch (error) {
      console.error('请求相册权限失败:', error);
      throw error;
    }
  },

  /**
   * 请求相机权限
   * @returns 权限状态
   */
  async requestCameraPermission() {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      return status;
    } catch (error) {
      console.error('请求相机权限失败:', error);
      throw error;
    }
  },

  /**
   * 从相册选择图片
   * @param options 选择选项
   * @returns 选择的图片信息
   */
  async pickImageFromLibrary(options?: ImagePicker.ImagePickerOptions) {
    try {
      // 请求权限
      const permissionStatus = await this.requestMediaLibraryPermission();
      if (permissionStatus !== 'granted') {
        Alert.alert('权限被拒绝', '需要相册权限才能选择图片');
        return null;
      }

      // 打开相册
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
        ...options,
      });

      if (!result.canceled) {
        return result.assets[0];
      }

      return null;
    } catch (error) {
      console.error('从相册选择图片失败:', error);
      throw error;
    }
  },

  /**
   * 从相册选择多个图片
   * @param options 选择选项
   * @returns 选择的图片信息数组
   */
  async pickMultipleImagesFromLibrary(options?: ImagePicker.ImagePickerOptions) {
    try {
      // 请求权限
      const permissionStatus = await this.requestMediaLibraryPermission();
      if (permissionStatus !== 'granted') {
        Alert.alert('权限被拒绝', '需要相册权限才能选择图片');
        return [];
      }

      // 打开相册
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.8,
        ...options,
      });

      if (!result.canceled) {
        return result.assets;
      }

      return [];
    } catch (error) {
      console.error('从相册选择多个图片失败:', error);
      throw error;
    }
  },

  /**
   * 使用相机拍照
   * @param options 拍照选项
   * @returns 拍摄的图片信息
   */
  async takePhoto(options?: ImagePicker.ImagePickerOptions) {
    try {
      // 请求权限
      const permissionStatus = await this.requestCameraPermission();
      if (permissionStatus !== 'granted') {
        Alert.alert('权限被拒绝', '需要相机权限才能拍照');
        return null;
      }

      // 打开相机
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
        ...options,
      });

      if (!result.canceled) {
        return result.assets[0];
      }

      return null;
    } catch (error) {
      console.error('拍照失败:', error);
      throw error;
    }
  },

  /**
   * 选择视频
   * @param options 选择选项
   * @returns 选择的视频信息
   */
  async pickVideoFromLibrary(options?: ImagePicker.ImagePickerOptions) {
    try {
      // 请求权限
      const permissionStatus = await this.requestMediaLibraryPermission();
      if (permissionStatus !== 'granted') {
        Alert.alert('权限被拒绝', '需要相册权限才能选择视频');
        return null;
      }

      // 打开相册
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 0.8,
        ...options,
      });

      if (!result.canceled) {
        return result.assets[0];
      }

      return null;
    } catch (error) {
      console.error('从相册选择视频失败:', error);
      throw error;
    }
  },

  /**
   * 使用相机录制视频
   * @param options 录制选项
   * @returns 录制的视频信息
   */
  async recordVideo(options?: ImagePicker.ImagePickerOptions) {
    try {
      // 请求权限
      const permissionStatus = await this.requestCameraPermission();
      if (permissionStatus !== 'granted') {
        Alert.alert('权限被拒绝', '需要相机权限才能录制视频');
        return null;
      }

      // 打开相机
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 0.8,
        ...options,
      });

      if (!result.canceled) {
        return result.assets[0];
      }

      return null;
    } catch (error) {
      console.error('录制视频失败:', error);
      throw error;
    }
  },
};
