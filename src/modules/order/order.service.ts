import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  // Mock订单数据
  private orders = [
    {
      id: 1,
      userId: 1,
      user: {
        id: 1,
        username: 'admin',
        name: '管理员',
      },
      items: [
        {
          productId: 1,
          productName: 'iPhone 15 Pro',
          quantity: 1,
          price: 7999,
        },
        {
          productId: 3,
          productName: 'AirPods Pro 2',
          quantity: 1,
          price: 1899,
        },
      ],
      totalAmount: 9898,
      status: 'completed',
      paymentMethod: 'credit_card',
      shippingAddress: {
        name: '管理员',
        phone: '13800138000',
        address: '北京市朝阳区某某街道123号',
      },
      createdAt: new Date('2026-01-25T10:00:00Z'),
      updatedAt: new Date('2026-01-25T10:30:00Z'),
    },
    {
      id: 2,
      userId: 2,
      user: {
        id: 2,
        username: 'user1',
        name: '用户1',
      },
      items: [
        {
          productId: 2,
          productName: 'MacBook Pro 14',
          quantity: 1,
          price: 15999,
        },
      ],
      totalAmount: 15999,
      status: 'pending',
      paymentMethod: 'alipay',
      shippingAddress: {
        name: '用户1',
        phone: '13900139000',
        address: '上海市浦东新区某某街道456号',
      },
      createdAt: new Date('2026-01-26T14:00:00Z'),
      updatedAt: new Date('2026-01-26T14:00:00Z'),
    },
    {
      id: 3,
      userId: 3,
      user: {
        id: 3,
        username: 'user2',
        name: '用户2',
      },
      items: [
        {
          productId: 4,
          productName: 'iPad Pro 12.9',
          quantity: 1,
          price: 8999,
        },
        {
          productId: 5,
          productName: 'Apple Watch Series 9',
          quantity: 1,
          price: 2999,
        },
      ],
      totalAmount: 11998,
      status: 'shipping',
      paymentMethod: 'wechat',
      shippingAddress: {
        name: '用户2',
        phone: '13700137000',
        address: '广州市天河区某某街道789号',
      },
      createdAt: new Date('2026-01-27T09:00:00Z'),
      updatedAt: new Date('2026-01-27T10:00:00Z'),
    },
  ];

  async findAll(): Promise<any[]> {
    return this.orders;
  }

  async findByUserId(userId: number): Promise<any[]> {
    return this.orders.filter(order => order.userId === userId);
  }

  async findOneById(id: number): Promise<any> {
    return this.orders.find(order => order.id === id);
  }

  async create(orderData: any): Promise<any> {
    const newOrder = {
      id: this.orders.length + 1,
      userId: orderData.userId,
      user: orderData.user || {
        id: orderData.userId,
        username: `user${orderData.userId}`,
        name: `用户${orderData.userId}`,
      },
      items: orderData.items,
      totalAmount: orderData.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
      status: orderData.status || 'pending',
      paymentMethod: orderData.paymentMethod || 'credit_card',
      shippingAddress: orderData.shippingAddress,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    this.orders.push(newOrder);
    return newOrder;
  }

  async updateStatus(id: number, status: string): Promise<any> {
    const orderIndex = this.orders.findIndex(order => order.id === id);
    if (orderIndex === -1) return null;
    
    this.orders[orderIndex] = {
      ...this.orders[orderIndex],
      status,
      updatedAt: new Date(),
    };
    
    return this.orders[orderIndex];
  }

  async delete(id: number): Promise<boolean> {
    const orderIndex = this.orders.findIndex(order => order.id === id);
    if (orderIndex === -1) return false;
    
    this.orders.splice(orderIndex, 1);
    return true;
  }
}
