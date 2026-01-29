# 购物车模块 API 文档

## 模块介绍

购物车模块负责购物车管理相关功能，包括添加商品到购物车、更新购物车商品数量、删除购物车商品和清空购物车操作。

## API 端点

### 1. 获取购物车

**URL**: `GET /cart`

**功能**: 获取指定用户的购物车信息

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| userId | number | 是 | 用户ID |

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
 * @returns {Cart|null} 购物车信息或null
 */
{
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
 * @returns {Cart} 更新后的购物车
 */
{
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
}
```

### 3. 更新购物车商品数量

**URL**: `PUT /cart/item/:itemId/quantity`

**功能**: 更新购物车中指定商品的数量

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| itemId | number | 是 | 购物车商品ID |
| userId | number | 是 | 用户ID（查询参数） |

**请求体**: 

```javascript
/**
 * @typedef {Object} UpdateQuantityDto
 * @property {number} quantity - 新的商品数量
 */

{
  "quantity": 3
}
```

**响应**: 

```javascript
/**
 * @param {number} userId - 用户ID
 * @param {number} itemId - 购物车商品ID
 * @param {UpdateQuantityDto} updateQuantityDto - 更新数量数据
 * @returns {Cart|null} 更新后的购物车或null
 */
{
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
}
```

### 4. 删除购物车商品

**URL**: `DELETE /cart/item/:itemId`

**功能**: 从购物车中删除指定商品

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| itemId | number | 是 | 购物车商品ID |
| userId | number | 是 | 用户ID（查询参数） |

**响应**: 

```javascript
/**
 * @param {number} userId - 用户ID
 * @param {number} itemId - 购物车商品ID
 * @returns {Cart|null} 更新后的购物车或null
 */
{
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
}
```

### 5. 清空购物车

**URL**: `DELETE /cart/clear`

**功能**: 清空指定用户的购物车

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| userId | number | 是 | 用户ID |

**响应**: 

```javascript
/**
 * @param {number} userId - 用户ID
 * @returns {Cart|null} 清空后的购物车或null
 */
{
  "id": 1,
  "userId": 1,
  "items": [],
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

## 错误处理

| 状态码 | 错误信息 | 描述 |
|--------|----------|------|
| 400 | Bad Request | 请求参数错误 |
| 404 | Not Found | 购物车或商品不存在 |
| 500 | Internal Server Error | 服务器内部错误 |

## 示例请求

### 使用 curl (PowerShell)

```powershell
# 获取购物车
curl -Uri "http://localhost:3000/cart?userId=1" -Method GET

# 添加商品到购物车
curl -Uri http://localhost:3000/cart/add -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"userId": 1, "item": {"productId": 4, "productName": "iPad Pro 12.9", "price": 8999, "quantity": 1}}'

# 更新购物车商品数量
curl -Uri "http://localhost:3000/cart/item/2/quantity?userId=1" -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"quantity": 3}'

# 删除购物车商品
curl -Uri "http://localhost:3000/cart/item/2?userId=1" -Method DELETE

# 清空购物车
curl -Uri "http://localhost:3000/cart/clear?userId=1" -Method DELETE
```
