import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';
import { CartModule } from './modules/cart/cart.module';
import { PaymentModule } from './modules/payment/payment.module';
import { AddressModule } from './modules/address/address.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { ReviewModule } from './modules/review/review.module';
import { AuthModule } from './common/auth/auth.module';
// import { DatabaseModule } from './common/database/database.module';
import { ConfigModule } from './common/config/config.module';

@Module({
  imports: [
    // 基础服务模块
    ConfigModule,
    // DatabaseModule, // 暂时注释掉数据库连接
    AuthModule,
    
    // 核心业务模块
    UserModule,
    ProductModule,
    OrderModule,
    CartModule,
    PaymentModule,
    AddressModule,
    CouponModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
