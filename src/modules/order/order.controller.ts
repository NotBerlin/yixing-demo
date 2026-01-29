import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { ResponseUtil } from '../../common/types/response.util';
import { StatusCode } from '../../common/types/status-code';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('list')
  async findAll(@Body('userId') userId?: number) {
    try {
      let orders;
      if (userId) {
        orders = await this.orderService.findByUserId(userId);
      } else {
        orders = await this.orderService.findAll();
      }
      return ResponseUtil.success(orders, '获取订单列表成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '获取订单列表失败');
    }
  }

  @Post('detail')
  async findOne(@Body('id') id: number) {
    try {
      const order = await this.orderService.findOneById(id);
      if (!order) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '订单不存在');
      }
      return ResponseUtil.success(order, '获取订单详情成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '获取订单详情失败');
    }
  }

  @Post('create')
  async create(@Body() orderData: any) {
    try {
      const order = await this.orderService.create(orderData);
      return ResponseUtil.success(order, '创建订单成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '创建订单失败');
    }
  }

  @Post('updateStatus')
  async updateStatus(@Body('id') id: number, @Body('status') status: string) {
    try {
      const order = await this.orderService.updateStatus(id, status);
      if (!order) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '订单不存在');
      }
      return ResponseUtil.success(order, '更新订单状态成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '更新订单状态失败');
    }
  }

  @Post('delete')
  async delete(@Body('id') id: number) {
    try {
      const result = await this.orderService.delete(id);
      if (!result) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '订单不存在');
      }
      return ResponseUtil.success(result, '删除订单成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '删除订单失败');
    }
  }
}
