// 导入NestJS核心装饰器
import { Injectable } from '@nestjs/common';

/**
 * 用户服务
 * 
 * @Injectable() 装饰器：标记这个类为可注入的服务
 * 服务是NestJS中的核心概念，负责处理业务逻辑
 * 在React中，类似的逻辑通常放在自定义hooks或utils函数中
 * 但NestJS的服务通过依赖注入系统管理，更加模块化和可测试
 */
@Injectable()
export class UserService {
  // Mock用户数据
  // 在实际项目中，这里会使用数据库存储用户数据
  private users = [
    {
      id: 1,
      username: 'admin',
      password: 'password',
      email: 'admin@example.com',
      name: '管理员',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      username: 'user1',
      password: 'password',
      email: 'user1@example.com',
      name: '用户1',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      username: 'user2',
      password: 'password',
      email: 'user2@example.com',
      name: '用户2',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  /**
   * 获取所有用户
   * 
   * @returns 用户列表（不包含密码）
   * 使用Promise<any[]>作为返回类型，与React中的异步处理类似
   * 但NestJS会自动处理Promise的解析和响应
   */
  async findAll(): Promise<any[]> {
    return this.users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }

  /**
   * 根据ID获取用户
   * 
   * @param id 用户ID
   * @returns 用户详情（不包含密码）或null
   */
  async findOneById(id: number): Promise<any> {
    const user = this.users.find(user => user.id === id);
    if (!user) return null;
    
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * 根据用户名获取用户
   * 
   * @param username 用户名
   * @returns 用户对象（包含密码，用于认证）或undefined
   * 注意：此方法返回包含密码的用户对象，仅用于认证服务
   */
  async findOneByUsername(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }

  /**
   * 创建新用户
   * 
   * @param userData 用户数据
   * @returns 创建的用户（不包含密码）
   */
  async create(userData: any): Promise<any> {
    const newUser = {
      id: this.users.length + 1,
      username: userData.username,
      password: userData.password || 'password',
      email: userData.email,
      name: userData.name,
      role: userData.role || 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    this.users.push(newUser);
    
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  /**
   * 更新用户
   * 
   * @param id 用户ID
   * @param userData 更新的用户数据
   * @returns 更新后的用户（不包含密码）或null
   */
  async update(id: number, userData: any): Promise<any> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...userData,
      updatedAt: new Date(),
    };
    
    const { password, ...userWithoutPassword } = this.users[userIndex];
    return userWithoutPassword;
  }

  /**
   * 删除用户
   * 
   * @param id 用户ID
   * @returns 删除成功返回true，失败返回false
   */
  async delete(id: number): Promise<boolean> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return false;
    
    this.users.splice(userIndex, 1);
    return true;
  }
}
