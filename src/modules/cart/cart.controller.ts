import { Controller, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { ResponseUtil } from '../../common/types/response.util';
import { StatusCode } from '../../common/types/status-code';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('get')
  async findByUserId(@Body('userId') userId: number) {
    try {
      const cart = await this.cartService.findByUserId(userId);
      if (!cart) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '购物车不存在');
      }
      return ResponseUtil.success(cart, '获取购物车成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '获取购物车失败');
    }
  }

  @Post('add')
  async addItem(@Body('userId') userId: number, @Body('item') itemData: any) {
    try {
      const cart = await this.cartService.addItem(userId, itemData);
      return ResponseUtil.success(cart, '添加商品到购物车成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '添加商品到购物车失败');
    }
  }

  @Post('updateQuantity')
  async updateItemQuantity(@Body('userId') userId: number, @Body('itemId') itemId: number, @Body('quantity') quantity: number) {
    try {
      const cart = await this.cartService.updateItemQuantity(userId, itemId, quantity);
      if (!cart) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '购物车或商品不存在');
      }
      return ResponseUtil.success(cart, '更新购物车商品数量成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '更新购物车商品数量失败');
    }
  }

  @Post('remove')
  async removeItem(@Body('userId') userId: number, @Body('itemId') itemId: number) {
    try {
      const cart = await this.cartService.removeItem(userId, itemId);
      if (!cart) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '购物车或商品不存在');
      }
      return ResponseUtil.success(cart, '删除购物车商品成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '删除购物车商品失败');
    }
  }

  @Post('clear')
  async clearCart(@Body('userId') userId: number) {
    try {
      const cart = await this.cartService.clearCart(userId);
      if (!cart) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '购物车不存在');
      }
      return ResponseUtil.success(cart, '清空购物车成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '清空购物车失败');
    }
  }
}
