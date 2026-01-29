import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  // Mock支付数据
  private payments = [
    {
      id: 1,
      orderId: 1,
      userId: 1,
      amount: 9898,
      paymentMethod: 'credit_card',
      paymentStatus: 'completed',
      transactionId: 'tx_1234567890',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      orderId: 2,
      userId: 2,
      amount: 15999,
      paymentMethod: 'alipay',
      paymentStatus: 'pending',
      transactionId: 'tx_0987654321',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      orderId: 3,
      userId: 3,
      amount: 11998,
      paymentMethod: 'wechat',
      paymentStatus: 'completed',
      transactionId: 'tx_5678901234',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  // 支持的支付方式
  private paymentMethods = [
    {
      id: 1,
      name: 'credit_card',
      displayName: '信用卡',
      enabled: true,
    },
    {
      id: 2,
      name: 'alipay',
      displayName: '支付宝',
      enabled: true,
    },
    {
      id: 3,
      name: 'wechat',
      displayName: '微信支付',
      enabled: true,
    },
    {
      id: 4,
      name: 'bank_transfer',
      displayName: '银行转账',
      enabled: true,
    },
  ];

  async getPaymentMethods(): Promise<any[]> {
    return this.paymentMethods.filter(method => method.enabled);
  }

  async findAll(): Promise<any[]> {
    return this.payments;
  }

  async findByOrderId(orderId: number): Promise<any> {
    return this.payments.find(payment => payment.orderId === orderId);
  }

  async findByUserId(userId: number): Promise<any[]> {
    return this.payments.filter(payment => payment.userId === userId);
  }

  async create(paymentData: any): Promise<any> {
    const newPayment = {
      id: this.payments.length + 1,
      orderId: paymentData.orderId,
      userId: paymentData.userId,
      amount: paymentData.amount,
      paymentMethod: paymentData.paymentMethod,
      paymentStatus: 'pending',
      transactionId: `tx_${Math.floor(Math.random() * 10000000000)}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    this.payments.push(newPayment);
    return newPayment;
  }

  async updateStatus(id: number, status: string): Promise<any> {
    const paymentIndex = this.payments.findIndex(payment => payment.id === id);
    if (paymentIndex === -1) return null;
    
    this.payments[paymentIndex] = {
      ...this.payments[paymentIndex],
      paymentStatus: status,
      updatedAt: new Date(),
    };
    
    return this.payments[paymentIndex];
  }

  async refund(id: number, amount: number): Promise<any> {
    const paymentIndex = this.payments.findIndex(payment => payment.id === id);
    if (paymentIndex === -1) return null;
    
    const refundPayment = {
      id: this.payments.length + 1,
      orderId: this.payments[paymentIndex].orderId,
      userId: this.payments[paymentIndex].userId,
      amount: -amount, // 负数表示退款
      paymentMethod: this.payments[paymentIndex].paymentMethod,
      paymentStatus: 'completed',
      transactionId: `refund_${Math.floor(Math.random() * 10000000000)}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    this.payments.push(refundPayment);
    return refundPayment;
  }
}
