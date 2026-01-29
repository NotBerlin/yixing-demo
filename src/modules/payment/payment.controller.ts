import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ResponseUtil } from '../../common/types/response.util';
import { StatusCode } from '../../common/types/status-code';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('methods')
  async getPaymentMethods() {
    try {
      const methods = await this.paymentService.getPaymentMethods();
      return ResponseUtil.success(methods, '获取支付方式列表成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '获取支付方式列表失败');
    }
  }

  @Post('list')
  async findAll(@Body('userId') userId?: number, @Body('orderId') orderId?: number) {
    try {
      let payments;
      if (userId) {
        payments = await this.paymentService.findByUserId(userId);
      } else if (orderId) {
        payments = await this.paymentService.findByOrderId(orderId);
      } else {
        payments = await this.paymentService.findAll();
      }
      return ResponseUtil.success(payments, '获取支付列表成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '获取支付列表失败');
    }
  }

  @Post('create')
  async create(@Body() paymentData: any) {
    try {
      const payment = await this.paymentService.create(paymentData);
      return ResponseUtil.success(payment, '创建支付成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '创建支付失败');
    }
  }

  @Post('updateStatus')
  async updateStatus(@Body('id') id: number, @Body('status') status: string) {
    try {
      const payment = await this.paymentService.updateStatus(id, status);
      if (!payment) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '支付不存在');
      }
      return ResponseUtil.success(payment, '更新支付状态成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '更新支付状态失败');
    }
  }

  @Post('refund')
  async refund(@Body('id') id: number, @Body('amount') amount: number) {
    try {
      const refund = await this.paymentService.refund(id, amount);
      return ResponseUtil.success(refund, '退款成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '退款失败');
    }
  }
}
