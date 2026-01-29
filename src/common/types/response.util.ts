import { ApiResponse } from './response';
import { StatusCode } from './status-code';

/**
 * 响应工具类
 * 
 * 提供静态方法来生成统一格式的响应对象
 */
export class ResponseUtil {
  /**
   * 生成成功响应
   * 
   * @template T - 响应数据的类型
   * @param {T} data - 响应数据
   * @param {string} message - 响应消息，默认为'操作成功'
   * @returns {ApiResponse<T>} 成功响应对象
   */
  static success<T>(data: T, message: string = '操作成功'): ApiResponse<T> {
    return {
      data,
      code: StatusCode.SUCCESS,
      message,
    };
  }

  /**
   * 生成失败响应
   * 
   * @template T - 响应数据的类型
   * @param {StatusCode} code - 状态码
   * @param {string} message - 响应消息
   * @param {T} [data] - 响应数据，默认为null
   * @returns {ApiResponse<T | null>} 失败响应对象
   */
  static error<T>(code: StatusCode, message: string, data: T | null = null): ApiResponse<T | null> {
    return {
      data,
      code,
      message,
    };
  }

  /**
   * 生成参数错误响应
   * 
   * @param {string} message - 响应消息，默认为'请求参数错误'
   * @returns {ApiResponse<null>} 参数错误响应对象
   */
  static badRequest(message: string = '请求参数错误'): ApiResponse<null> {
    return this.error(StatusCode.BAD_REQUEST, message);
  }

  /**
   * 生成资源不存在响应
   * 
   * @param {string} message - 响应消息，默认为'资源不存在'
   * @returns {ApiResponse<null>} 资源不存在响应对象
   */
  static notFound(message: string = '资源不存在'): ApiResponse<null> {
    return this.error(StatusCode.NOT_FOUND, message);
  }

  /**
   * 生成服务器内部错误响应
   * 
   * @param {string} message - 响应消息，默认为'服务器内部错误'
   * @returns {ApiResponse<null>} 服务器内部错误响应对象
   */
  static internalServerError(message: string = '服务器内部错误'): ApiResponse<null> {
    return this.error(StatusCode.INTERNAL_SERVER_ERROR, message);
  }
}
