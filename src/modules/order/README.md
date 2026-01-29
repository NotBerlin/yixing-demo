# 订单模块 API 文档

## 模块介绍

订单模块负责订单管理相关功能，包括订单的创建、查询、更新状态和删除操作，以及按用户ID筛选订单。

## API 端点

### 1. 获取订单列表

**URL**: `GET /order`

**功能**: 获取所有订单的列表，支持按用户ID筛选

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| userId | number | 否 | 用户ID |

**响应**: 

```javascript
/**
 * @typedef {Object} OrderItem
 * @property {number} productId - 商品ID
 * @property {string} productName - 商品名称
 * @property {number} quantity - 数量
 * @property {number} price - 单价
 */

/**
 * @typedef {Object} User
 * @property {number} id - 用户ID
 * @property {string} username - 用户名
 * @property {string} name - 姓名
 */

/**
 * @typedef {Object} ShippingAddress
 * @property {string} name - 收货人姓名
 * @property {string} phone - 联系电话
 * @property {string} address - 详细地址
 */

/**
 * @typedef {Object} Order
 * @property {number} id - 订单ID
 * @property {number} userId - 用户ID
 * @property {User} user - 用户信息
 * @property {Array<OrderItem>} items - 订单商品列表
 * @property {number} totalAmount - 总金额
 * @property {string} status - 订单状态
 * @property {string} paymentMethod - 支付方式
 * @property {ShippingAddress} shippingAddress - 收货地址
 * @property {Date} createdAt - 创建时间
 * @property {Date} updatedAt - 更新时间
 */

/**
 * @param {number} [userId] - 用户ID
 * @returns {Array<Order>} 订单列表
 */
[
  {
    "id": 1,
    "userId": 1,
    "user": {
      "id": 1,
      "username": "admin",
      "name": "管理员"
    },
    "items": [
      {
        "productId": 1,
        "productName": "iPhone 15 Pro",
        "quantity": 1,
        "price": 7999
      },
      {
        "productId": 3,
        "productName": "AirPods Pro 2",
        "quantity": 1,
        "price": 1899
      }
    ],
    "totalAmount": 9898,
    "status": "completed",
    "paymentMethod": "credit_card",
    "shippingAddress": {
      "name": "管理员",
      "phone": "13800138000",
      "address": "北京市朝阳区某某街道123号"
    },
    "createdAt": "2026-01-25T10:00:00.000Z",
    "updatedAt": "2026-01-25T10:30:00.000Z"
  },
  // 更多订单...
]
```

### 2. 获取订单详情

**URL**: `GET /order/:id`

**功能**: 根据ID获取单个订单的详细信息

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 订单ID |

**响应**: 

```javascript
/**
 * @param {number} id - 订单ID
 * @returns {Order|null} 订单详情或null
 */
{
  "id": 1,
  "userId": 1,
  "user": {
    "id": 1,
    "username": "admin",
    "name": "管理员"
  },
  "items": [
    {
      "productId": 1,
      "productName": "iPhone 15 Pro",
      "quantity": 1,
      "price": 7999
    },
    {
      "productId": 3,
      "productName": "AirPods Pro 2",
      "quantity": 1,
      "price": 1899
    }
  ],
  "totalAmount": 9898,
  "status": "completed",
  "paymentMethod": "credit_card",
  "shippingAddress": {
    "name": "管理员",
    "phone": "13800138000",
    "address": "北京市朝阳区某某街道123号"
  },
  "createdAt": "2026-01-25T10:00:00.000Z",
  "updatedAt": "2026-01-25T10:30:00.000Z"
}
```

### 3. 创建订单

**URL**: `POST /order`

**功能**: 创建新订单

**请求体**: 

```javascript
/**
 * @typedef {Object} CreateOrderDto
 * @property {number} userId - 用户ID
 * @property {User} [user] - 用户信息
 * @property {Array<OrderItem>} items - 订单商品列表
 * @property {string} [status] - 订单状态，默认为'pending'
 * @property {string} [paymentMethod] - 支付方式，默认为'credit_card'
 * @property {ShippingAddress} shippingAddress - 收货地址
 */

{
  "userId": 1,
  "items": [
    {
      "productId": 2,
      "productName": "MacBook Pro 14",
      "quantity": 1,
      "price": 15999
    }
  ],
  "shippingAddress": {
    "name": "管理员",
    "phone": "13800138000",
    "address": "北京市朝阳区某某街道123号"
  }
}
```

**响应**: 

```javascript
/**
 * @param {CreateOrderDto} orderData - 订单数据
 * @returns {Order} 创建的订单
 */
{
  "id": 4,
  "userId": 1,
  "user": {
    "id": 1,
    "username": "admin",
    "name": "管理员"
  },
  "items": [
    {
      "productId": 2,
      "productName": "MacBook Pro 14",
      "quantity": 1,
      "price": 15999
    }
  ],
  "totalAmount": 15999,
  "status": "pending",
  "paymentMethod": "credit_card",
  "shippingAddress": {
    "name": "管理员",
    "phone": "13800138000",
    "address": "北京市朝阳区某某街道123号"
  },
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 4. 更新订单状态

**URL**: `PUT /order/:id/status`

**功能**: 更新指定ID订单的状态

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 订单ID |

**请求体**: 

```javascript
{
  "status": "shipping"
}
```

**响应**: 

```javascript
/**
 * @param {number} id - 订单ID
 * @param {string} status - 新的订单状态
 * @returns {Order|null} 更新后的订单或null
 */
{
  "id": 1,
  "userId": 1,
  "user": {
    "id": 1,
    "username": "admin",
    "name": "管理员"
  },
  "items": [
    {
      "productId": 1,
      "productName": "iPhone 15 Pro",
      "quantity": 1,
      "price": 7999
    },
    {
      "productId": 3,
      "productName": "AirPods Pro 2",
      "quantity": 1,
      "price": 1899
    }
  ],
  "totalAmount": 9898,
  "status": "shipping",
  "paymentMethod": "credit_card",
  "shippingAddress": {
    "name": "管理员",
    "phone": "13800138000",
    "address": "北京市朝阳区某某街道123号"
  },
  "createdAt": "2026-01-25T10:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 5. 删除订单

**URL**: `DELETE /order/:id`

**功能**: 删除指定ID的订单

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 订单ID |

**响应**: 

```javascript
/**
 * @param {number} id - 订单ID
 * @returns {boolean} 删除成功返回true，失败返回false
 */
true
```

## 错误处理

| 状态码 | 错误信息 | 描述 |
|--------|----------|------|
| 400 | Bad Request | 请求参数错误 |
| 404 | Not Found | 订单不存在 |
| 500 | Internal Server Error | 服务器内部错误 |

## 示例请求

### 使用 curl (PowerShell)

```powershell
# 获取所有订单
curl -Uri http://localhost:3000/order -Method GET

# 按用户ID获取订单
curl -Uri "http://localhost:3000/order?userId=1" -Method GET

# 获取订单详情
curl -Uri http://localhost:3000/order/1 -Method GET

# 创建订单
curl -Uri http://localhost:3000/order -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"userId": 1, "items": [{"productId": 2, "productName": "MacBook Pro 14", "quantity": 1, "price": 15999}], "shippingAddress": {"name": "管理员", "phone": "13800138000", "address": "北京市朝阳区某某街道123号"}}'

# 更新订单状态
curl -Uri http://localhost:3000/order/1/status -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"status": "shipping"}'

# 删除订单
curl -Uri http://localhost:3000/order/1 -Method DELETE
```
