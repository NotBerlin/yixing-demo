# 支付模块 API 文档

## 模块介绍

支付模块负责支付管理相关功能，包括获取支付方式列表、创建支付、查询支付状态和处理退款操作。

## API 端点

### 1. 获取支付方式列表

**URL**: `POST /payment/methods`

**功能**: 获取所有支持的支付方式

**请求参数**: 无

**响应**: 

```javascript
/**
 * @typedef {Object} PaymentMethod
 * @property {number} id - 支付方式ID
 * @property {string} name - 支付方式名称
 * @property {string} displayName - 支付方式显示名称
 * @property {boolean} enabled - 是否启用
 */

/**
 * @returns {Object} 统一响应格式
 * @property {Array<PaymentMethod>} data - 支付方式列表
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": [
    {
      "id": 1,
      "name": "credit_card",
      "displayName": "信用卡",
      "enabled": true
    },
    {
      "id": 2,
      "name": "alipay",
      "displayName": "支付宝",
      "enabled": true
    },
    {
      "id": 3,
      "name": "wechat",
      "displayName": "微信支付",
      "enabled": true
    },
    {
      "id": 4,
      "name": "bank_transfer",
      "displayName": "银行转账",
      "enabled": true
    }
  ],
  "code": 200,
  "message": "操作成功"
}
```

### 2. 获取支付列表

**URL**: `POST /payment/list`

**功能**: 获取所有支付的列表，支持按用户ID和订单ID筛选

**请求体**: 

```javascript
{
  "userId": 1, // 可选
  "orderId": 1 // 可选
}
```

**响应**: 

```javascript
/**
 * @typedef {Object} Payment
 * @property {number} id - 支付ID
 * @property {number} orderId - 订单ID
 * @property {number} userId - 用户ID
 * @property {number} amount - 支付金额
 * @property {string} paymentMethod - 支付方式
 * @property {string} paymentStatus - 支付状态
 * @property {string} transactionId - 交易ID
 * @property {Date} createdAt - 创建时间
 * @property {Date} updatedAt - 更新时间
 */

/**
 * @param {number} [userId] - 用户ID
 * @param {number} [orderId] - 订单ID
 * @returns {Object} 统一响应格式
 * @property {Array<Payment>} data - 支付列表
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": [
    {
      "id": 1,
      "orderId": 1,
      "userId": 1,
      "amount": 9898,
      "paymentMethod": "credit_card",
      "paymentStatus": "completed",
      "transactionId": "tx_1234567890",
      "createdAt": "2026-01-29T00:00:00.000Z",
      "updatedAt": "2026-01-29T00:00:00.000Z"
    },
    // 更多支付...
  ],
  "code": 200,
  "message": "操作成功"
}
```

### 3. 创建支付

**URL**: `POST /payment/create`

**功能**: 创建新支付

**请求体**: 

```javascript
/**
 * @typedef {Object} CreatePaymentDto
 * @property {number} orderId - 订单ID
 * @property {number} userId - 用户ID
 * @property {number} amount - 支付金额
 * @property {string} paymentMethod - 支付方式
 */

{
  "orderId": 1,
  "userId": 1,
  "amount": 9898,
  "paymentMethod": "credit_card"
}
```

**响应**: 

```javascript
/**
 * @param {CreatePaymentDto} paymentData - 支付数据
 * @returns {Object} 统一响应格式
 * @property {Payment} data - 创建的支付
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 4,
    "orderId": 1,
    "userId": 1,
    "amount": 9898,
    "paymentMethod": "credit_card",
    "paymentStatus": "pending",
    "transactionId": "tx_1234567890",
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

### 4. 更新支付状态

**URL**: `POST /payment/updateStatus`

**功能**: 更新指定ID支付的状态

**请求体**: 

```javascript
/**
 * @typedef {Object} UpdatePaymentStatusDto
 * @property {number} id - 支付ID
 * @property {string} status - 新的支付状态
 */

{
  "id": 2,
  "status": "completed"
}
```

**响应**: 

```javascript
/**
 * @param {UpdatePaymentStatusDto} updateStatusDto - 更新状态数据
 * @returns {Object} 统一响应格式
 * @property {Payment|null} data - 更新后的支付或null
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 2,
    "orderId": 2,
    "userId": 2,
    "amount": 15999,
    "paymentMethod": "alipay",
    "paymentStatus": "completed",
    "transactionId": "tx_0987654321",
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

### 5. 处理退款

**URL**: `POST /payment/refund`

**功能**: 处理指定ID支付的退款

**请求体**: 

```javascript
/**
 * @typedef {Object} RefundDto
 * @property {number} id - 支付ID
 * @property {number} amount - 退款金额
 */

{
  "id": 1,
  "amount": 9898
}
```

**响应**: 

```javascript
/**
 * @param {RefundDto} refundDto - 退款数据
 * @returns {Object} 统一响应格式
 * @property {Payment} data - 退款交易记录
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 5,
    "orderId": 1,
    "userId": 1,
    "amount": -9898,
    "paymentMethod": "credit_card",
    "paymentStatus": "completed",
    "transactionId": "refund_1234567890",
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

## 错误处理

| 状态码 | 错误信息 | 描述 |
|--------|----------|------|
| 200 | SUCCESS | 操作成功 |
| 400 | BAD_REQUEST | 请求参数错误 |
| 401 | UNAUTHORIZED | 未授权 |
| 403 | FORBIDDEN | 禁止访问 |
| 404 | NOT_FOUND | 资源不存在 |
| 500 | INTERNAL_SERVER_ERROR | 服务器内部错误 |

## 示例请求

### 使用 curl (PowerShell)

```powershell
# 获取支付方式列表
curl -Uri http://localhost:3000/payment/methods -Method POST

# 获取所有支付
curl -Uri http://localhost:3000/payment/list -Method POST

# 按用户ID获取支付
curl -Uri http://localhost:3000/payment/list -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"userId": 1}'

# 按订单ID获取支付
curl -Uri http://localhost:3000/payment/list -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"orderId": 1}'

# 创建支付
curl -Uri http://localhost:3000/payment/create -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"orderId": 1, "userId": 1, "amount": 9898, "paymentMethod": "credit_card"}'

# 更新支付状态
curl -Uri http://localhost:3000/payment/updateStatus -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"id": 2, "status": "completed"}'

# 处理退款
curl -Uri http://localhost:3000/payment/refund -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"id": 1, "amount": 9898}'
```
