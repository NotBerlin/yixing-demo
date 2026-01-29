import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseUtil } from '../../common/types/response.util';
import { StatusCode } from '../../common/types/status-code';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('list')
  async findAll(@Body('category') category?: string, @Body('brand') brand?: string) {
    try {
      let products;
      if (category) {
        products = await this.productService.findByCategory(category);
      } else if (brand) {
        products = await this.productService.findByBrand(brand);
      } else {
        products = await this.productService.findAll();
      }
      return ResponseUtil.success(products, '获取商品列表成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '获取商品列表失败');
    }
  }

  @Post('detail')
  async findOne(@Body('id') id: number) {
    try {
      const product = await this.productService.findOneById(id);
      if (!product) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '商品不存在');
      }
      return ResponseUtil.success(product, '获取商品详情成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '获取商品详情失败');
    }
  }

  @Post('create')
  async create(@Body() productData: any) {
    try {
      const product = await this.productService.create(productData);
      return ResponseUtil.success(product, '创建商品成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '创建商品失败');
    }
  }

  @Post('update')
  async update(@Body('id') id: number, @Body('data') productData: any) {
    try {
      const product = await this.productService.update(id, productData);
      if (!product) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '商品不存在');
      }
      return ResponseUtil.success(product, '更新商品成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '更新商品失败');
    }
  }

  @Post('delete')
  async delete(@Body('id') id: number) {
    try {
      const result = await this.productService.delete(id);
      if (!result) {
        return ResponseUtil.error(StatusCode.NOT_FOUND, '商品不存在');
      }
      return ResponseUtil.success(result, '删除商品成功');
    } catch (error) {
      return ResponseUtil.error(StatusCode.INTERNAL_SERVER_ERROR, '删除商品失败');
    }
  }
}
