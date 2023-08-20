import { Module } from '@nestjs/common';
import { ProductService } from './services/product/product.service';
import { ProductController } from './controllers/product/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CategoryService } from './services/category/category.service';
import { Category } from './entities/category.entity';
import { CategoryController } from './controllers/category/category.controller';
import MethodOfSale from './entities/methodOfSale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product,Category,MethodOfSale])],
  controllers: [ProductController, CategoryController],
  providers: [ProductService, CategoryService],
  exports:[TypeOrmModule]
})
export class ProductModule {}
