import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleService } from '../services/sale/sale.service';
import { ProductSalesLineDto } from '../dto/product-sales-line.dto';
import { OrderDto } from '../dto/order.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags("#Sale (vente)")
@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  @ApiBody({description:"validation d'achat des produits",  type: OrderDto})
  validateOrder(@Body() orderDto: OrderDto) {
    return this.saleService.confirmeOrder(orderDto);
  }

  @Post(':customer_id')
  validateOrderWithCustomer(@Body() orderDto: OrderDto, @Param('customer_id') customerId: string) {
    return this.saleService.confirmeOrderWithCustomer(orderDto,+customerId);
  }


}
