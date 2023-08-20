import { Module } from '@nestjs/common';
import { SaleService } from './services/sale/sale.service';
import { SaleController } from './controllers/sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { Invoice } from './entities/invoice.entity';
import { ProductSalesLine } from './entities/productSalesLine.entity';
import { InvoiceController } from './controllers/invoice/invoice.controller';
import { InvoiceService } from './services/invoice/invoice.service';
import { ProductService } from '../product/services/product/product.service';
import { ProductModule } from '../product/product.module';
import { Customer } from './entities/customer.entity';
import { CustomerService } from './services/customer/customer.service';
import { CustomerController } from './controllers/customer/customer.controller';
import { Payment } from './entities/payment.entity';
import { PaymentLine } from './entities/paymentLine.entity';
import { ModeOfPayment } from './entities/modeOfPayment.entity';
import { PaymentService } from './services/payment/payment.service';



@Module({
  imports: [TypeOrmModule.forFeature([Sale,ProductSalesLine,Invoice,Customer,Payment,PaymentLine,ModeOfPayment]),ProductModule],
  controllers: [SaleController, InvoiceController, CustomerController],
  providers: [SaleService, InvoiceService,ProductService, CustomerService, PaymentService],
  exports:[TypeOrmModule]
})
export class SaleModule {}
