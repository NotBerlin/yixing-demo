# 购物车模块 API 文档

## 模块介绍

购物车模块负责购物车管理相关功能，包括添加商品到购物车、更新购物车商品数量、删除购物车商品和清空购物车操作。

## API 端点

### 1. 获取购物车

**URL**: `POST /cart/get`

**功能**: 获取指定用户的购物车信息

**请求体**: 

```javascript
{
  "userId": 1
}
```

**响应**: 

```javascript
/**
 * @typedef {Object} CartItem
 * @property {number} id - 购物车商品ID
 * @property {number} productId - 商品ID
 * @property {string} productName - 商品名称
 * @property {number} price - 单价
 * @property {number} quantity - 数量
 */

/**
 * @typedef {Object} Cart
 * @property {number} id - 购物车ID
 * @property {number} userId - 用户ID
 * @property {Array<CartItem>} items - 购物车商品列表
 * @property {Date} createdAt - 创建时间
 * @property {Date} updatedAt - 更新时间
 */

/**
 * @param {number} userId - 用户ID
 * @returns {Object} 统一响应格式
 * @property {Cart|null} data - 购物车信息或null
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 1,
    "userId": 1,
    "items": [
      {
        "id": 1,
        "productId": 1,
        "productName": "iPhone 15 Pro",
        "price": 7999,
        "quantity": 1
      },
      {
        "id": 2,
        "productId": 3,
        "productName": "AirPods Pro 2",
        "price": 1899,
        "quantity": 2
      }
    ],
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

### 2. 添加商品到购物车

**URL**: `POST /cart/add`

**功能**: 向指定用户的购物车添加商品

**请求体**: 

```javascript
/**
 * @typedef {Object} AddItemDto
 * @property {number} userId - 用户ID
 * @property {Object} item - 商品信息
 * @property {number} item.productId - 商品ID
 * @property {string} item.productName - 商品名称
 * @property {number} item.price - 单价
 * @property {number} [item.quantity] - 数量，默认为1
 */

{
  "userId": 1,
  "item": {
    "productId": 4,
    "productName": "iPad Pro 12.9",
    "price": 8999,
    "quantity": 1
  }
}
```

**响应**: 

```javascript
/**
 * @param {AddItemDto} addItemDto - 添加商品数据
 * @returns {Object} 统一响应格式
 * @property {Cart} data - 更新后的购物车
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 1,
    "userId": 1,
    "items": [
      {
        "id": 1,
        "productId": 1,
        "productName": "iPhone 15 Pro",
        "price": 7999,
        "quantity": 1
      },
      {
        "id": 2,
        "productId": 3,
        "productName": "AirPods Pro 2",
        "price": 1899,
        "quantity": 2
      },
      {
        "id": 3,
        "productId": 4,
        "productName": "iPad Pro 12.9",
        "price": 8999,
        "quantity": 1
      }
    ],
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

### 3. 更新购物车商品数量

**URL**: `POST /cart/updateQuantity`

**功能**: 更新购物车中指定商品的数量

**请求体**: 

```javascript
/**
 * @typedef {Object} UpdateQuantityDto
 * @property {number} userId - 用户ID
 * @property {number} itemId - 购物车商品ID
 * @property {number} quantity - 新的商品数量
 */

{
  "userId": 1,
  "itemId": 2,
  "quantity": 3
}
```

**响应**: 

```javascript
/**
 * @param {UpdateQuantityDto} updateQuantityDto - 更新数量数据
 * @returns {Object} 统一响应格式
 * @property {Cart|null} data - 更新后的购物车或null
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 1,
    "userId": 1,
    "items": [
      {
        "id": 1,
        "productId": 1,
        "productName": "iPhone 15 Pro",
        "price": 7999,
        "quantity": 1
      },
      {
        "id": 2,
        "productId": 3,
        "productName": "AirPods Pro 2",
        "price": 1899,
        "quantity": 3
      }
    ],
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

### 4. 删除购物车商品

**URL**: `POST /cart/remove`

**功能**: 从购物车中删除指定商品

**请求体**: 

```javascript
/**
 * @typedef {Object} RemoveItemDto
 * @property {number} userId - 用户ID
 * @property {number} itemId - 购物车商品ID
 */

{
  "userId": 1,
  "itemId": 2
}
```

**响应**: 

```javascript
/**
 * @param {RemoveItemDto} removeItemDto - 删除商品数据
 * @returns {Object} 统一响应格式
 * @property {Cart|null} data - 更新后的购物车或null
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 1,
    "userId": 1,
    "items": [
      {
        "id": 1,
        "productId": 1,
        "productName": "iPhone 15 Pro",
        "price": 7999,
        "quantity": 1
      }
    ],
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

### 5. 清空购物车

**URL**: `POST /cart/clear`

**功能**: 清空指定用户的购物车

**请求体**: 

```javascript
{
  "userId": 1
}
```

**响应**: 

```javascript
/**
 * @param {number} userId - 用户ID
 * @returns {Object} 统一响应格式
 * @property {Cart|null} data - 清空后的购物车或null
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 1,
    "userId": 1,
    "items": [],
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
| 404 | NOT_FOUND | 购物车或商品不存在 |
| 500 | INTERNAL_SERVER_ERROR | 服务器内部错误 |

## 示例请求

### 使用 curl (PowerShell)

```powershell
# 获取购物车
curl -Uri http://localhost:3000/cart/get -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"userId": 1}'

# 添加商品到购物车
curl -Uri http://localhost:3000/cart/add -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"userId": 1, "item": {"productId": 4, "productName": "iPad Pro 12.9", "price": 8999, "quantity": 1}}'

# 更新购物车商品数量
curl -Uri http://localhost:3000/cart/updateQuantity -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"userId": 1, "itemId": 2, "quantity": 3}'

# 删除购物车商品
curl -Uri http://localhost:3000/cart/remove -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"userId": 1, "itemId": 2}'

# 清空购物车
curl -Uri http://localhost:3000/cart/clear -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"userId": 1}'
```
