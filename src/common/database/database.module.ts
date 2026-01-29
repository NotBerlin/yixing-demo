import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'ecommerce',
      entities: [], // 实际项目中应该添加实体类
      synchronize: true, // 开发环境中使用，生产环境应该设置为false
      logging: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
