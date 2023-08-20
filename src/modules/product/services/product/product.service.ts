import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import * as xlsx from 'xlsx';
import * as fs from 'fs';
import { ProductType } from '../../dto/xlsx-product';
import { Repository, Transaction } from 'typeorm';
import { CreateProductDto } from '../../dto/create-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { Product } from '../../entities/product.entity';
import { log } from 'console';


@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}


  create(createProductDto: CreateProductDto) {
    this.productRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productRepository.find({
      relations:{
        methodOfSales:true
      }
    });
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({id});
  }

  //extract product from excel
  extractProductFromExcel(filePath: string): Promise<ProductType[]> {
    const file = readFileSync(filePath);
    const workbook = xlsx.read(file, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    const data: ProductType[] = jsonData.map((row) =>{
      if (row!=undefined && row[0] && row[1] && row[3]) {
        return {
          productName: row[0],
          productReference: row[1],
          productCode: row[2],
          productUrlImage: row[3],
          productThreshold: 0,
          productQuantity: 0,
        }
      }
    });
      console.log(data);
      try {
        fs.unlinkSync(filePath)
      } catch (error) {
        
      }
      
    return Promise.resolve(data);
  }
  async addImport(filePath:string){
    
    const productImport =await this.extractProductFromExcel(filePath)
    const productList = this.productRepository.create(productImport)
    return this.productRepository.save(productList)
  }

}
