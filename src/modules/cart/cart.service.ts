import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  // Mock购物车数据
  private carts = [
    {
      id: 1,
      userId: 1,
      items: [
        {
          id: 1,
          productId: 1,
          productName: 'iPhone 15 Pro',
          price: 7999,
          quantity: 1,
        },
        {
          id: 2,
          productId: 3,
          productName: 'AirPods Pro 2',
          price: 1899,
          quantity: 2,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      userId: 2,
      items: [
        {
          id: 3,
          productId: 2,
          productName: 'MacBook Pro 14',
          price: 15999,
          quantity: 1,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      userId: 3,
      items: [
        {
          id: 4,
          productId: 4,
          productName: 'iPad Pro 12.9',
          price: 8999,
          quantity: 1,
        },
        {
          id: 5,
          productId: 5,
          productName: 'Apple Watch Series 9',
          price: 2999,
          quantity: 1,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async findByUserId(userId: number): Promise<any> {
    return this.carts.find(cart => cart.userId === userId);
  }

  async addItem(userId: number, itemData: any): Promise<any> {
    let cart = this.carts.find(c => c.userId === userId);
    
    if (!cart) {
      // 如果用户没有购物车，创建一个新的
      cart = {
        id: this.carts.length + 1,
        userId,
        items: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.carts.push(cart);
    }
    
    // 检查商品是否已在购物车中
    const existingItemIndex = cart.items.findIndex(item => item.productId === itemData.productId);
    
    if (existingItemIndex !== -1) {
      // 如果商品已存在，更新数量
      cart.items[existingItemIndex].quantity += itemData.quantity || 1;
    } else {
      // 如果商品不存在，添加新商品
      const newItem = {
        id: cart.items.length + 1,
        productId: itemData.productId,
        productName: itemData.productName,
        price: itemData.price,
        quantity: itemData.quantity || 1,
      };
      cart.items.push(newItem);
    }
    
    cart.updatedAt = new Date();
    return cart;
  }

  async updateItemQuantity(userId: number, itemId: number, quantity: number): Promise<any> {
    const cart = this.carts.find(c => c.userId === userId);
    if (!cart) return null;
    
    const itemIndex = cart.items.findIndex(item => item.id === itemId);
    if (itemIndex === -1) return null;
    
    cart.items[itemIndex].quantity = quantity;
    cart.updatedAt = new Date();
    return cart;
  }

  async removeItem(userId: number, itemId: number): Promise<any> {
    const cart = this.carts.find(c => c.userId === userId);
    if (!cart) return null;
    
    const itemIndex = cart.items.findIndex(item => item.id === itemId);
    if (itemIndex === -1) return null;
    
    cart.items.splice(itemIndex, 1);
    cart.updatedAt = new Date();
    return cart;
  }

  async clearCart(userId: number): Promise<any> {
    const cart = this.carts.find(c => c.userId === userId);
    if (!cart) return null;
    
    cart.items = [];
    cart.updatedAt = new Date();
    return cart;
  }
}
