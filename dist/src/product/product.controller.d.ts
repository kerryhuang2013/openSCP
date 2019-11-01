import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    ShowAllProducts(): Promise<import("./product.entity").ProductEntity[]>;
    createProduct(data: ProductDto): Promise<import("./product.entity").ProductEntity>;
    readProduct(id: string): Promise<import("./product.entity").ProductEntity>;
    updateProduct(id: string, data: Partial<ProductDto>): Promise<import("./product.entity").ProductEntity>;
    deleteProduct(id: string): Promise<{
        deleted: boolean;
    }>;
}
