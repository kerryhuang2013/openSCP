import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  ShowAllProducts() {
    return this.productService.showAll();
  }

  @Post()
  createProduct(@Body() data: ProductDto) {
    return this.productService.create(data);
  }

  @Get(':id')
  readProduct(@Param('id') id: string) {
    return this.productService.read(id);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() data: Partial<ProductDto>) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
