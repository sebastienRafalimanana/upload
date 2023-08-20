import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductService } from '../../services/product/product.service';
import { CreateProductDto } from '../../dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { ProductImport } from '../../dto/xlsx-product';
import { log } from 'console';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  
  /**
   * Insertion d'un nouvelle produit
   */
  @Post()
  addProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  getAllProduct() {
    return this.productService.findAll();
  }

  @Get(':id')
  getProductItem(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  //importation via fichier exell
  @Post('import')
  @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
  @ApiBody({
      description: 'import product',
      type: ProductImport,
  })
  @ApiConsumes('multipart/form-data')
  uploadFile(@UploadedFile() file) {    
    return this.productService.addImport(file.path)
  }
  
}
