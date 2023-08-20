import { Controller, Post } from '@nestjs/common';
import { InvoiceService } from '../../services/invoice/invoice.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("#Invoice (Generateur de numéro de facture)")
@Controller('invoice')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService) { }
    @Post()
    async createInvoice(): Promise<{ invoiceNumber: string }> {
        const invoiceNumber = await this.invoiceService.generateInvoiceNumber();

        return { invoiceNumber };
    }
}
