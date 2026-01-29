import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  async findByUserId(@Query('userId') userId: number) {
    return this.cartService.findByUserId(userId);
  }

  @Post('add')
  async addItem(@Body('userId') userId: number, @Body('item') itemData: any) {
    return this.cartService.addItem(userId, itemData);
  }

  @Put('item/:itemId/quantity')
  async updateItemQuantity(@Query('userId') userId: number, @Param('itemId') itemId: number, @Body('quantity') quantity: number) {
    return this.cartService.updateItemQuantity(userId, itemId, quantity);
  }

  @Delete('item/:itemId')
  async removeItem(@Query('userId') userId: number, @Param('itemId') itemId: number) {
    return this.cartService.removeItem(userId, itemId);
  }

  @Delete('clear')
  async clearCart(@Query('userId') userId: number) {
    return this.cartService.clearCart(userId);
  }
}
