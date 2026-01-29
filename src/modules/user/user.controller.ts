// 导入NestJS核心装饰器和模块
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ResponseUtil } from '../../common/types/response.util';
import { StatusCode } from '../../common/types/status-code';

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
   * @Post('list') 装饰器：定义POST请求的路由，路径为 '/list'（完整路径：/user/list）
   * async/await 语法：处理异步操作，与React中的异步处理类似
   * 
   * @returns 用户列表
   */
  @Post('list')
  async findAll() {
    try {
      const users = await this.userService.findAll();
      return ResponseUtil.success(users, '获取用户列表成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '获取用户列表失败');
    }
  }

  /**
   * 获取单个用户详情
   * 
   * @Post('detail') 装饰器：定义POST请求的路由，路径为 '/detail'（完整路径：/user/detail）
   * @Body() 装饰器：从请求体中获取数据并绑定到参数
   * 
   * @param params 请求参数
   * @returns 用户详情
   */
  @Post('detail')
  async findOne(@Body('id') id: number) {
    try {
      const user = await this.userService.findOneById(id);
      if (!user) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '用户不存在');
      }
      return ResponseUtil.success(user, '获取用户详情成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '获取用户详情失败');
    }
  }

  /**
   * 创建用户
   * 
   * @Post('create') 装饰器：定义POST请求的路由，路径为 '/create'（完整路径：/user/create）
   * @Body() 装饰器：从请求体中获取数据并绑定到参数
   * 
   * @param userData 用户数据
   * @returns 创建的用户
   */
  @Post('create')
  async create(@Body() userData: any) {
    try {
      const user = await this.userService.create(userData);
      return ResponseUtil.success(user, '创建用户成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '创建用户失败');
    }
  }

  /**
   * 更新用户
   * 
   * @Post('update') 装饰器：定义POST请求的路由，路径为 '/update'（完整路径：/user/update）
   * @Body() 装饰器：从请求体中获取数据并绑定到参数
   * 
   * @param params 请求参数，包含id和更新的用户数据
   * @returns 更新后的用户
   */
  @Post('update')
  async update(@Body('id') id: number, @Body('data') userData: any) {
    try {
      const user = await this.userService.update(id, userData);
      if (!user) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '用户不存在');
      }
      return ResponseUtil.success(user, '更新用户成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '更新用户失败');
    }
  }

  /**
   * 删除用户
   * 
   * @Post('delete') 装饰器：定义POST请求的路由，路径为 '/delete'（完整路径：/user/delete）
   * @Body() 装饰器：从请求体中获取数据并绑定到参数
   * 
   * @param params 请求参数，包含id
   * @returns 删除结果
   */
  @Post('delete')
  async delete(@Body('id') id: number) {
    try {
      const result = await this.userService.delete(id);
      if (!result) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '用户不存在');
      }
      return ResponseUtil.success(result, '删除用户成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '删除用户失败');
    }
  }
}
