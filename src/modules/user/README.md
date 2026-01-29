# 用户模块 API 文档

## 模块介绍

用户模块负责用户管理相关功能，包括用户的创建、查询、更新和删除操作。

## API 端点

### 1. 获取用户列表

**URL**: `POST /user/list`

**功能**: 获取所有用户的列表

**请求参数**: 无

**响应**: 

```javascript
/**
 * @typedef {Object} User
 * @property {number} id - 用户ID
 * @property {string} username - 用户名
 * @property {string} email - 邮箱
 * @property {string} name - 姓名
 * @property {string} role - 角色
 * @property {Date} createdAt - 创建时间
 * @property {Date} updatedAt - 更新时间
 */

/**
 * @returns {Object} 统一响应格式
 * @property {Array<User>} data - 用户列表
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": [
    {
      "id": 1,
      "username": "admin",
      "email": "admin@example.com",
      "name": "管理员",
      "role": "admin",
      "createdAt": "2026-01-29T00:00:00.000Z",
      "updatedAt": "2026-01-29T00:00:00.000Z"
    },
    // 更多用户...
  ],
  "code": 200,
  "message": "操作成功"
}
```

### 2. 获取用户详情

**URL**: `POST /user/detail`

**功能**: 根据ID获取单个用户的详细信息

**请求体**: 

```javascript
{
  "id": 1
}
```

**响应**: 

```javascript
/**
 * @param {number} id - 用户ID
 * @returns {Object} 统一响应格式
 * @property {User|null} data - 用户详情或null
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com",
    "name": "管理员",
    "role": "admin",
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

### 3. 创建用户

**URL**: `POST /user/create`

**功能**: 创建新用户

**请求体**: 

```javascript
/**
 * @typedef {Object} CreateUserDto
 * @property {string} username - 用户名
 * @property {string} password - 密码
 * @property {string} email - 邮箱
 * @property {string} name - 姓名
 * @property {string} [role] - 角色，默认为'user'
 */

{
  "username": "newuser",
  "password": "password",
  "email": "newuser@example.com",
  "name": "新用户",
  "role": "user"
}
```

**响应**: 

```javascript
/**
 * @param {CreateUserDto} userData - 用户数据
 * @returns {Object} 统一响应格式
 * @property {User} data - 创建的用户
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 4,
    "username": "newuser",
    "email": "newuser@example.com",
    "name": "新用户",
    "role": "user",
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

### 4. 更新用户

**URL**: `POST /user/update`

**功能**: 更新现有用户信息

**请求体**: 

```javascript
/**
 * @typedef {Object} UpdateUserDto
 * @property {number} id - 用户ID
 * @property {Object} data - 更新的用户数据
 * @property {string} [data.username] - 用户名
 * @property {string} [data.password] - 密码
 * @property {string} [data.email] - 邮箱
 * @property {string} [data.name] - 姓名
 * @property {string} [data.role] - 角色
 */

{
  "id": 1,
  "data": {
    "email": "updated@example.com",
    "name": "更新后的姓名"
  }
}
```

**响应**: 

```javascript
/**
 * @param {number} id - 用户ID
 * @param {Object} userData - 更新的用户数据
 * @returns {Object} 统一响应格式
 * @property {User|null} data - 更新后的用户或null
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": {
    "id": 1,
    "username": "admin",
    "email": "updated@example.com",
    "name": "更新后的姓名",
    "role": "admin",
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  },
  "code": 200,
  "message": "操作成功"
}
```

### 5. 删除用户

**URL**: `POST /user/delete`

**功能**: 删除指定ID的用户

**请求体**: 

```javascript
{
  "id": 1
}
```

**响应**: 

```javascript
/**
 * @param {number} id - 用户ID
 * @returns {Object} 统一响应格式
 * @property {boolean} data - 删除成功返回true，失败返回false
 * @property {number} code - 状态码
 * @property {string} message - 响应消息
 */
{
  "data": true,
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
# 获取用户列表
curl -Uri http://localhost:3000/user/list -Method POST

# 获取用户详情
curl -Uri http://localhost:3000/user/detail -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"id": 1}'

# 创建用户
curl -Uri http://localhost:3000/user/create -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"username": "newuser", "password": "password", "email": "newuser@example.com", "name": "新用户"}'

# 更新用户
curl -Uri http://localhost:3000/user/update -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"id": 1, "data": {"email": "updated@example.com", "name": "更新后的姓名"}}'

# 删除用户
curl -Uri http://localhost:3000/user/delete -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"id": 1}'
```
