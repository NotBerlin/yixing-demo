# 用户模块 API 文档

## 模块介绍

用户模块负责用户管理相关功能，包括用户的创建、查询、更新和删除操作。

## API 端点

### 1. 获取用户列表

**URL**: `GET /user`

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
 * @returns {Array<User>} 用户列表
 */
[
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
]
```

### 2. 获取用户详情

**URL**: `GET /user/:id`

**功能**: 根据ID获取单个用户的详细信息

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 用户ID |

**响应**: 

```javascript
/**
 * @param {number} id - 用户ID
 * @returns {User|null} 用户详情或null
 */
{
  "id": 1,
  "username": "admin",
  "email": "admin@example.com",
  "name": "管理员",
  "role": "admin",
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 3. 创建用户

**URL**: `POST /user`

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
 * @returns {User} 创建的用户
 */
{
  "id": 4,
  "username": "newuser",
  "email": "newuser@example.com",
  "name": "新用户",
  "role": "user",
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 4. 更新用户

**URL**: `PUT /user/:id`

**功能**: 更新现有用户信息

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 用户ID |

**请求体**: 

```javascript
/**
 * @typedef {Object} UpdateUserDto
 * @property {string} [username] - 用户名
 * @property {string} [password] - 密码
 * @property {string} [email] - 邮箱
 * @property {string} [name] - 姓名
 * @property {string} [role] - 角色
 */

{
  "email": "updated@example.com",
  "name": "更新后的姓名"
}
```

**响应**: 

```javascript
/**
 * @param {number} id - 用户ID
 * @param {UpdateUserDto} userData - 更新的用户数据
 * @returns {User|null} 更新后的用户或null
 */
{
  "id": 1,
  "username": "admin",
  "email": "updated@example.com",
  "name": "更新后的姓名",
  "role": "admin",
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

### 5. 删除用户

**URL**: `DELETE /user/:id`

**功能**: 删除指定ID的用户

**请求参数**: 

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | number | 是 | 用户ID |

**响应**: 

```javascript
/**
 * @param {number} id - 用户ID
 * @returns {boolean} 删除成功返回true，失败返回false
 */
true
```

## 错误处理

| 状态码 | 错误信息 | 描述 |
|--------|----------|------|
| 400 | Bad Request | 请求参数错误 |
| 404 | Not Found | 用户不存在 |
| 500 | Internal Server Error | 服务器内部错误 |

## 示例请求

### 使用 curl (PowerShell)

```powershell
# 获取用户列表
curl -Uri http://localhost:3000/user -Method GET

# 获取用户详情
curl -Uri http://localhost:3000/user/1 -Method GET

# 创建用户
curl -Uri http://localhost:3000/user -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"username": "newuser", "password": "password", "email": "newuser@example.com", "name": "新用户"}'

# 更新用户
curl -Uri http://localhost:3000/user/1 -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"email": "updated@example.com", "name": "更新后的姓名"}'

# 删除用户
curl -Uri http://localhost:3000/user/1 -Method DELETE
```
