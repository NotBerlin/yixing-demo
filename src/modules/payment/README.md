# 支付模块 API 文档

## 模块介绍

支付模块负责支付管理相关功能，包括获取支付方式列表、创建支付、查询支付状态和处理退款操作。

## API 端点

### 1. 获取支付方式列表

**URL**: `GET /payment/methods`

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
 * @returns {Array<PaymentMethod>} 支付方式列表
 */
[
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
]
```

### 2. 获取支付列表

**URL**: `GET /payment`

**功能**: 获取所有支付的列表，支持按用户ID和订单ID筛选

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| userId | number | 否 | 用户ID |
| orderId | number | 否 | 订单ID |

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
 * @returns {Array<Payment>|Payment} 支付列表或单个支付
 */
[
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
]
```

### 3. 创建支付

**URL**: `POST /payment`

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
 * @returns {Payment} 创建的支付
 */
{
  "id": 4,
  "orderId": 1,
  "userId": 1,
  "amount": 9898,
  "paymentMethod": "credit_card",
  "paymentStatus": "pending",
  "transactionId": "tx_1234567890",
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 4. 更新支付状态

**URL**: `PUT /payment/:id/status`

**功能**: 更新指定ID支付的状态

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 支付ID |

**请求体**: 

```javascript
/**
 * @typedef {Object} UpdatePaymentStatusDto
 * @property {string} status - 新的支付状态
 */

{
  "status": "completed"
}
```

**响应**: 

```javascript
/**
 * @param {number} id - 支付ID
 * @param {UpdatePaymentStatusDto} updateStatusDto - 更新状态数据
 * @returns {Payment|null} 更新后的支付或null
 */
{
  "id": 2,
  "orderId": 2,
  "userId": 2,
  "amount": 15999,
  "paymentMethod": "alipay",
  "paymentStatus": "completed",
  "transactionId": "tx_0987654321",
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 5. 处理退款

**URL**: `POST /payment/:id/refund`

**功能**: 处理指定ID支付的退款

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 支付ID |

**请求体**: 

```javascript
/**
 * @typedef {Object} RefundDto
 * @property {number} amount - 退款金额
 */

{
  "amount": 9898
}
```

**响应**: 

```javascript
/**
 * @param {number} id - 支付ID
 * @param {RefundDto} refundDto - 退款数据
 * @returns {Payment} 退款交易记录
 */
{
  "id": 5,
  "orderId": 1,
  "userId": 1,
  "amount": -9898,
  "paymentMethod": "credit_card",
  "paymentStatus": "completed",
  "transactionId": "refund_1234567890",
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

## 错误处理

| 状态码 | 错误信息 | 描述 |
|--------|----------|------|
| 400 | Bad Request | 请求参数错误 |
| 404 | Not Found | 支付不存在 |
| 500 | Internal Server Error | 服务器内部错误 |

## 示例请求

### 使用 curl (PowerShell)

```powershell
# 获取支付方式列表
curl -Uri http://localhost:3000/payment/methods -Method GET

# 获取所有支付
curl -Uri http://localhost:3000/payment -Method GET

# 按用户ID获取支付
curl -Uri "http://localhost:3000/payment?userId=1" -Method GET

# 按订单ID获取支付
curl -Uri "http://localhost:3000/payment?orderId=1" -Method GET

# 创建支付
curl -Uri http://localhost:3000/payment -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"orderId": 1, "userId": 1, "amount": 9898, "paymentMethod": "credit_card"}'

# 更新支付状态
curl -Uri http://localhost:3000/payment/2/status -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"status": "completed"}'

# 处理退款
curl -Uri http://localhost:3000/payment/1/refund -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"amount": 9898}'
```
