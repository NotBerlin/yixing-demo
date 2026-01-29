/**
 * 统一响应格式
 * 
 * @template T - 响应数据的类型
 */
export interface ApiResponse<T> {
  /**
   * 响应数据
   * 
   * 泛型类型，可以是任何类型的数据
   */
  data: T;
  
  /**
   * 状态码
   * 
   * 使用StatusCode枚举值
   */
  code: number;
  
  /**
   * 响应消息
   * 
   * 描述操作结果的消息
   */
  message: string;
}
