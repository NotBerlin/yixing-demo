import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll(@Query('userId') userId?: number) {
    if (userId) {
      return this.orderService.findByUserId(userId);
    }
    return this.orderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.orderService.findOneById(id);
  }

  @Post()
  async create(@Body() orderData: any) {
    return this.orderService.create(orderData);
  }

  @Put(':id/status')
  async updateStatus(@Param('id') id: number, @Body('status') status: string) {
    return this.orderService.updateStatus(id, status);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.orderService.delete(id);
  }
}
