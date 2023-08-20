import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '../../dto/create-category.dto';
import { Category } from '../../entities/category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ){}
    async create(createCategoryDto:CreateCategoryDto){
       const newCategory = this.categoryRepository.save(createCategoryDto)
       return newCategory
    }
    findOne(id: number) {
        const category = this.categoryRepository.findOneBy({id})
        return category
      }

}
