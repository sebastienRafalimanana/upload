import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from '../../entities/invoice.entity';

@Injectable()
export class InvoiceService {
    constructor(
        @InjectRepository(Invoice)
        private invoiceRepository: Repository<Invoice>,
      ) {}
    
      async generateInvoiceNumber(): Promise<string> {
        const lastInvoice = await this.invoiceRepository.findOne({
          order: { id: 'DESC' },
           where: { }
        });
        
        const lastInvoiceNumber = lastInvoice ? lastInvoice.invoiceNumber : 0;
        const newInvoiceNumber = lastInvoiceNumber + 1;
    
        const formatedInvoiceNumber = newInvoiceNumber.toString().padStart(5, '0');
    
        const newInvoice = this.invoiceRepository.create({
          invoiceNumber:newInvoiceNumber
        });
        await this.invoiceRepository.save(newInvoice);
    
        return formatedInvoiceNumber;
      }
}
