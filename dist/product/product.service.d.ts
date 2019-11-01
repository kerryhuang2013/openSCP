import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './product.dto';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    showAll(): Promise<ProductEntity[]>;
    create(data: ProductDto): Promise<ProductEntity>;
    read(id: string): Promise<ProductEntity>;
    update(id: string, data: Partial<ProductDto>): Promise<ProductEntity>;
    delete(id: string): Promise<{
        deleted: boolean;
    }>;
}
