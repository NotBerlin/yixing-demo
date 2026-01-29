import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';

/**
 * 文件操作工具类
 * 提供文件选择、读取、保存、分享等功能
 */
export const fileUtils = {
  /**
   * 选择文件
   * @param options 选择选项
   * @returns 选择的文件信息
   */
  async pickDocument(options?: DocumentPicker.DocumentPickerOptions) {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
        ...options,
      });
      return result;
    } catch (error) {
      console.error('选择文件失败:', error);
      throw error;
    }
  },

  /**
   * 选择多个文件
   * @param options 选择选项
   * @returns 选择的文件信息数组
   */
  async pickMultipleDocuments(options?: DocumentPicker.DocumentPickerOptions) {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
        multiple: true,
        ...options,
      });
      return result;
    } catch (error) {
      console.error('选择多个文件失败:', error);
      throw error;
    }
  },

  /**
   * 读取文件内容
   * @param uri 文件URI
   * @returns 文件内容
   */
  async readFile(uri: string) {
    try {
      const content = await FileSystem.readAsStringAsync(uri);
      return content;
    } catch (error) {
      console.error('读取文件失败:', error);
      throw error;
    }
  },

  /**
   * 保存文件
   * @param uri 文件URI
   * @param filename 文件名
   * @returns 保存后的文件URI
   */
  async saveFile(uri: string, filename: string) {
    try {
      const directory = `${FileSystem.documentDirectory}downloads/`;
      
      // 确保目录存在
      const dirInfo = await FileSystem.getInfoAsync(directory);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
      }

      const newUri = `${directory}${filename}`;
      await FileSystem.copyAsync({ from: uri, to: newUri });
      return newUri;
    } catch (error) {
      console.error('保存文件失败:', error);
      throw error;
    }
  },

  /**
   * 分享文件
   * @param uri 文件URI
   * @param title 分享标题
   * @returns 分享结果
   */
  async shareFile(uri: string, title?: string) {
    try {
      if (!(await Sharing.isAvailableAsync())) {
        throw new Error('当前设备不支持分享功能');
      }
      await Sharing.shareAsync(uri, { title });
      return true;
    } catch (error) {
      console.error('分享文件失败:', error);
      throw error;
    }
  },

  /**
   * 获取文件信息
   * @param uri 文件URI
   * @returns 文件信息
   */
  async getFileInfo(uri: string) {
    try {
      const info = await FileSystem.getInfoAsync(uri);
      return info;
    } catch (error) {
      console.error('获取文件信息失败:', error);
      throw error;
    }
  },

  /**
   * 删除文件
   * @param uri 文件URI
   * @returns 删除结果
   */
  async deleteFile(uri: string) {
    try {
      await FileSystem.deleteAsync(uri, { idempotent: true });
      return true;
    } catch (error) {
      console.error('删除文件失败:', error);
      throw error;
    }
  },
};
