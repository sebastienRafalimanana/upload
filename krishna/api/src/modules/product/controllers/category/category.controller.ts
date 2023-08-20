import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CategoryService } from '../../services/category/category.service';
import { CreateCategoryDto } from '../../dto/create-category.dto';

@Controller('product/category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.categoryService.findOne(+id);
    }
}
