import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { ProductSalesLineDto } from '../../dto/product-sales-line.dto';
import { OrderDto } from '../../dto/order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../../entities/sale.entity';
import { ProductSalesLine } from '../../entities/productSalesLine.entity';
import { InvoiceService } from '../invoice/invoice.service';
import { ProductService } from 'src/modules/product/services/product/product.service';
import { CustomerService } from '../customer/customer.service';
import { PaymentService } from '../payment/payment.service';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
    @InjectRepository(ProductSalesLine)
    private productSalesLineRepository: Repository<ProductSalesLine>,
    @Inject(forwardRef(() => InvoiceService))
    private invoiceService: InvoiceService,
    @Inject(forwardRef(() => ProductService))
    private productService: ProductService,
    @Inject(forwardRef(() => CustomerService))
    private customerService: CustomerService,
    @Inject(forwardRef(() => PaymentService))
    private paymentService: PaymentService,

  ) { }


  async confirmeOrder(orderDto: OrderDto) {
    const invoiceNumber = await this.invoiceService.generateInvoiceNumber()
    const sale = await this.saleRepository.save({ invoiceNumber })
    console.log(orderDto);
    console.log(orderDto.amount);
    
    for (const productLine of orderDto.productLines) {
      let orderLine = this.productSalesLineRepository.create({
        quantity: productLine.quantity,
        unitPrice: productLine.unitPrice,
        isDelivered: productLine.isDelivered
      })
      orderLine.sale = sale
      orderLine.product = await this.productService.findOne(productLine.productId)
      await this.productSalesLineRepository.save(orderLine);
      await this.paymentService.payment(orderDto.modeOfPayment,sale,orderDto.amount)
    }
    return sale

  }

  async confirmeOrderWithCustomer(orderDto:OrderDto, customerId:number){
    const sale =await this.confirmeOrder(orderDto)
    sale.customer =await this.customerService.getCustomerById(customerId)
    return sale
  }
}
