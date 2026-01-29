import { Controller, Get, Post, Put, Param, Body, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('methods')
  async getPaymentMethods() {
    return this.paymentService.getPaymentMethods();
  }

  @Get()
  async findAll(@Query('userId') userId?: number, @Query('orderId') orderId?: number) {
    if (userId) {
      return this.paymentService.findByUserId(userId);
    }
    if (orderId) {
      return this.paymentService.findByOrderId(orderId);
    }
    return this.paymentService.findAll();
  }

  @Post()
  async create(@Body() paymentData: any) {
    return this.paymentService.create(paymentData);
  }

  @Put(':id/status')
  async updateStatus(@Param('id') id: number, @Body('status') status: string) {
    return this.paymentService.updateStatus(id, status);
  }

  @Post(':id/refund')
  async refund(@Param('id') id: number, @Body('amount') amount: number) {
    return this.paymentService.refund(id, amount);
  }
}
