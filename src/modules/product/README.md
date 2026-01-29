# 商品模块 API 文档

## 模块介绍

商品模块负责商品管理相关功能，包括商品的创建、查询、更新和删除操作，以及按分类和品牌筛选商品。

## API 端点

### 1. 获取商品列表

**URL**: `GET /product`

**功能**: 获取所有商品的列表，支持按分类和品牌筛选

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| category | string | 否 | 商品分类 |
| brand | string | 否 | 商品品牌 |

**响应**: 

```javascript
/**
 * @typedef {Object} Product
 * @property {number} id - 商品ID
 * @property {string} name - 商品名称
 * @property {string} description - 商品描述
 * @property {number} price - 商品价格
 * @property {number} stock - 商品库存
 * @property {string} category - 商品分类
 * @property {string} brand - 商品品牌
 * @property {Array<string>} images - 商品图片URL
 * @property {Date} createdAt - 创建时间
 * @property {Date} updatedAt - 更新时间
 */

/**
 * @param {string} [category] - 商品分类
 * @param {string} [brand] - 商品品牌
 * @returns {Array<Product>} 商品列表
 */
[
  {
    "id": 1,
    "name": "iPhone 15 Pro",
    "description": "Apple最新旗舰手机，搭载A17 Pro芯片",
    "price": 7999,
    "stock": 100,
    "category": "手机",
    "brand": "Apple",
    "images": ["https://example.com/iphone15-pro-1.jpg", "https://example.com/iphone15-pro-2.jpg"],
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  // 更多商品...
]
```

### 2. 获取商品详情

**URL**: `GET /product/:id`

**功能**: 根据ID获取单个商品的详细信息

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 商品ID |

**响应**: 

```javascript
/**
 * @param {number} id - 商品ID
 * @returns {Product|null} 商品详情或null
 */
{
  "id": 1,
  "name": "iPhone 15 Pro",
  "description": "Apple最新旗舰手机，搭载A17 Pro芯片",
  "price": 7999,
  "stock": 100,
  "category": "手机",
  "brand": "Apple",
  "images": ["https://example.com/iphone15-pro-1.jpg", "https://example.com/iphone15-pro-2.jpg"],
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 3. 创建商品

**URL**: `POST /product`

**功能**: 创建新商品

**请求体**: 

```javascript
/**
 * @typedef {Object} CreateProductDto
 * @property {string} name - 商品名称
 * @property {string} description - 商品描述
 * @property {number} price - 商品价格
 * @property {number} [stock] - 商品库存，默认为0
 * @property {string} category - 商品分类
 * @property {string} brand - 商品品牌
 * @property {Array<string>} [images] - 商品图片URL，默认为空数组
 */

{
  "name": "iPhone 15 Pro Max",
  "description": "Apple最新旗舰手机，搭载A17 Pro芯片，更大屏幕",
  "price": 9999,
  "stock": 50,
  "category": "手机",
  "brand": "Apple",
  "images": ["https://example.com/iphone15-pro-max-1.jpg"]
}
```

**响应**: 

```javascript
/**
 * @param {CreateProductDto} productData - 商品数据
 * @returns {Product} 创建的商品
 */
{
  "id": 6,
  "name": "iPhone 15 Pro Max",
  "description": "Apple最新旗舰手机，搭载A17 Pro芯片，更大屏幕",
  "price": 9999,
  "stock": 50,
  "category": "手机",
  "brand": "Apple",
  "images": ["https://example.com/iphone15-pro-max-1.jpg"],
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 4. 更新商品

**URL**: `PUT /product/:id`

**功能**: 更新现有商品信息

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 商品ID |

**请求体**: 

```javascript
/**
 * @typedef {Object} UpdateProductDto
 * @property {string} [name] - 商品名称
 * @property {string} [description] - 商品描述
 * @property {number} [price] - 商品价格
 * @property {number} [stock] - 商品库存
 * @property {string} [category] - 商品分类
 * @property {string} [brand] - 商品品牌
 * @property {Array<string>} [images] - 商品图片URL
 */

{
  "price": 8999,
  "stock": 120
}
```

**响应**: 

```javascript
/**
 * @param {number} id - 商品ID
 * @param {UpdateProductDto} productData - 更新的商品数据
 * @returns {Product|null} 更新后的商品或null
 */
{
  "id": 1,
  "name": "iPhone 15 Pro",
  "description": "Apple最新旗舰手机，搭载A17 Pro芯片",
  "price": 8999,
  "stock": 120,
  "category": "手机",
  "brand": "Apple",
  "images": ["https://example.com/iphone15-pro-1.jpg", "https://example.com/iphone15-pro-2.jpg"],
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 5. 删除商品

**URL**: `DELETE /product/:id`

**功能**: 删除指定ID的商品

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 商品ID |

**响应**: 

```javascript
/**
 * @param {number} id - 商品ID
 * @returns {boolean} 删除成功返回true，失败返回false
 */
true
```

## 错误处理

| 状态码 | 错误信息 | 描述 |
|--------|----------|------|
| 400 | Bad Request | 请求参数错误 |
| 404 | Not Found | 商品不存在 |
| 500 | Internal Server Error | 服务器内部错误 |

## 示例请求

### 使用 curl (PowerShell)

```powershell
# 获取所有商品
curl -Uri http://localhost:3000/product -Method GET

# 按分类获取商品
curl -Uri "http://localhost:3000/product?category=手机" -Method GET

# 按品牌获取商品
curl -Uri "http://localhost:3000/product?brand=Apple" -Method GET

# 获取商品详情
curl -Uri http://localhost:3000/product/1 -Method GET

# 创建商品
curl -Uri http://localhost:3000/product -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"name": "iPhone 15 Pro Max", "description": "Apple最新旗舰手机", "price": 9999, "stock": 50, "category": "手机", "brand": "Apple"}'

# 更新商品
curl -Uri http://localhost:3000/product/1 -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"price": 8999, "stock": 120}'

# 删除商品
curl -Uri http://localhost:3000/product/1 -Method DELETE
```
