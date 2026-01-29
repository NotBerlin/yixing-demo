// 导入NestJS核心装饰器和模块
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

/**
 * 用户模块
 * 
 * @Module() 装饰器：定义模块类，这是NestJS的核心概念
 * 模块是组织代码的基本单位，类似于React中的组件库或功能模块
 * 但NestJS的模块更加结构化，包含控制器、服务和其他依赖
 * 
 * 在React中，代码组织通常基于功能或文件类型
 * 而NestJS使用模块系统来封装相关的控制器和服务
 */
@Module({
  /**
   * controllers 数组：注册该模块中的控制器
   * 控制器负责处理HTTP请求和响应
   * 每个控制器都使用 @Controller() 装饰器定义
   */
  controllers: [UserController],
  
  /**
   * providers 数组：注册该模块中的服务
   * 服务负责处理业务逻辑
   * 每个服务都使用 @Injectable() 装饰器定义
   */
  providers: [UserService],
  
  /**
   * exports 数组：指定哪些服务可以被其他模块使用
   * 这里导出 UserService，使得其他模块（如 AuthModule）可以注入使用
   * 这是NestJS模块系统的重要特性，实现了模块间的依赖管理
   * 在React中，类似的功能通常通过import/export语句实现
   */
  exports: [UserService],
})
/**
 * UserModule 类：模块的核心类
 * 类本身是空的，所有配置都通过 @Module() 装饰器提供
 * 这与React中的类组件不同，React组件类包含渲染逻辑和生命周期方法
 */
export class UserModule {}
