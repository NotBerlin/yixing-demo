import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  // Mock商品数据
  private products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Apple最新旗舰手机，搭载A17 Pro芯片',
      price: 7999,
      stock: 100,
      category: '手机',
      brand: 'Apple',
      images: ['https://example.com/iphone15-pro-1.jpg', 'https://example.com/iphone15-pro-2.jpg'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'MacBook Pro 14',
      description: 'Apple高端笔记本电脑，搭载M3 Pro芯片',
      price: 15999,
      stock: 50,
      category: '电脑',
      brand: 'Apple',
      images: ['https://example.com/macbook-pro-14-1.jpg', 'https://example.com/macbook-pro-14-2.jpg'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'AirPods Pro 2',
      description: 'Apple降噪无线耳机，支持空间音频',
      price: 1899,
      stock: 200,
      category: '耳机',
      brand: 'Apple',
      images: ['https://example.com/airpods-pro-2-1.jpg', 'https://example.com/airpods-pro-2-2.jpg'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: 'iPad Pro 12.9',
      description: 'Apple专业平板电脑，搭载M2芯片',
      price: 8999,
      stock: 80,
      category: '平板',
      brand: 'Apple',
      images: ['https://example.com/ipad-pro-129-1.jpg', 'https://example.com/ipad-pro-129-2.jpg'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      description: 'Apple智能手表，支持体温检测',
      price: 2999,
      stock: 150,
      category: '手表',
      brand: 'Apple',
      images: ['https://example.com/apple-watch-series-9-1.jpg', 'https://example.com/apple-watch-series-9-2.jpg'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async findAll(): Promise<any[]> {
    return this.products;
  }

  async findOneById(id: number): Promise<any> {
    return this.products.find(product => product.id === id);
  }

  async findByCategory(category: string): Promise<any[]> {
    return this.products.filter(product => product.category === category);
  }

  async findByBrand(brand: string): Promise<any[]> {
    return this.products.filter(product => product.brand === brand);
  }

  async create(productData: any): Promise<any> {
    const newProduct = {
      id: this.products.length + 1,
      name: productData.name,
      description: productData.description,
      price: productData.price,
      stock: productData.stock || 0,
      category: productData.category,
      brand: productData.brand,
      images: productData.images || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id: number, productData: any): Promise<any> {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) return null;
    
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...productData,
      updatedAt: new Date(),
    };
    
    return this.products[productIndex];
  }

  async delete(id: number): Promise<boolean> {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) return false;
    
    this.products.splice(productIndex, 1);
    return true;
  }
}
