import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>) {}

  async showAll() {
    return await this.productRepository.find();
  }

  async create(data: ProductDto) {
    const product = await this.productRepository.create(data);
    await this.productRepository.save(product);
    return product;
  }

  async read(id: string) {
    return await this.productRepository.findOne({where: {id}});
  }

  async update(id: string, data: Partial<ProductDto>) {
    await this.productRepository.update({id}, data);
    return await this.productRepository.findOne({id});
  }

  async delete(id: string) {
    await this.productRepository.delete({id});
    return {deleted: true};
  }
}
