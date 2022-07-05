import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findDrafts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    update(id: string, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}
