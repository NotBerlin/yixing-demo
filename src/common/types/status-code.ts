/**
 * 状态码枚举
 * 
 * 定义API响应的状态码及其含义
 */
export enum StatusCode {
  // 成功状态码
  SUCCESS = 200, // 操作成功
  
  // 客户端错误状态码
  BAD_REQUEST = 400, // 请求参数错误
  UNAUTHORIZED = 401, // 未授权
  FORBIDDEN = 403, // 禁止访问
  NOT_FOUND = 404, // 资源不存在
  CONFLICT = 409, // 资源冲突
  
  // 服务器错误状态码
  INTERNAL_SERVER_ERROR = 500, // 服务器内部错误
  SERVICE_UNAVAILABLE = 503, // 服务不可用
  
  // 业务错误状态码
  VALIDATION_ERROR = 1000, // 数据验证错误
  BUSINESS_ERROR = 1001, // 业务逻辑错误
  DATABASE_ERROR = 1002, // 数据库操作错误
  NETWORK_ERROR = 1003, // 网络请求错误
}
