// 导入NestJS核心装饰器和模块
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

/**
 * 用户控制器
 * 
 * @Controller('user') 装饰器：定义控制器类，指定基础路由路径为 'user'
 * 在React中没有类似的控制器概念，React使用组件和hooks处理UI和逻辑
 * NestJS的控制器负责处理HTTP请求，路由定义，和响应返回
 */
@Controller('user')
export class UserController {
  /**
   * 构造函数
   * 
   * @param userService 用户服务实例
   * 使用依赖注入（Dependency Injection）机制自动注入UserService
   * 这是NestJS的核心特性之一，React中没有类似的依赖注入系统
   */
  constructor(private readonly userService: UserService) {}

  /**
   * 获取用户列表
   * 
   * @Get() 装饰器：定义GET请求的路由，路径为基础路径 '/'（完整路径：/user）
   * async/await 语法：处理异步操作，与React中的异步处理类似
   * 
   * @returns 用户列表
   */
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  /**
   * 获取单个用户详情
   * 
   * @Get(':id') 装饰器：定义带参数的GET请求路由，路径为 '/:id'（完整路径：/user/:id）
   * @Param('id') 装饰器：从URL参数中获取id值并绑定到参数
   * 
   * @param id 用户ID
   * @returns 用户详情
   */
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOneById(id);
  }

  /**
   * 创建用户
   * 
   * @Post() 装饰器：定义POST请求的路由，路径为基础路径 '/'（完整路径：/user）
   * @Body() 装饰器：从请求体中获取数据并绑定到参数
   * 
   * @param userData 用户数据
   * @returns 创建的用户
   */
  @Post()
  async create(@Body() userData: any) {
    return this.userService.create(userData);
  }

  /**
   * 更新用户
   * 
   * @Put(':id') 装饰器：定义PUT请求的路由，路径为 '/:id'（完整路径：/user/:id）
   * 
   * @param id 用户ID
   * @param userData 更新的用户数据
   * @returns 更新后的用户
   */
  @Put(':id')
  async update(@Param('id') id: number, @Body() userData: any) {
    return this.userService.update(id, userData);
  }

  /**
   * 删除用户
   * 
   * @Delete(':id') 装饰器：定义DELETE请求的路由，路径为 '/:id'（完整路径：/user/:id）
   * 
   * @param id 用户ID
   * @returns 删除结果
   */
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
