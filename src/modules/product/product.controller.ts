import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(@Query('category') category?: string, @Query('brand') brand?: string) {
    if (category) {
      return this.productService.findByCategory(category);
    }
    if (brand) {
      return this.productService.findByBrand(brand);
    }
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productService.findOneById(id);
  }

  @Post()
  async create(@Body() productData: any) {
    return this.productService.create(productData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() productData: any) {
    return this.productService.update(id, productData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
