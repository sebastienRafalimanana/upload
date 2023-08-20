import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from '../../entities/payment.entity';
import { ModeOfPayment } from '../../entities/modeOfPayment.entity';
import { Sale } from '../../entities/sale.entity';
import { PaymentLine } from '../../entities/paymentLine.entity';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private paymentRepository:Repository<Payment>,
        @InjectRepository(PaymentLine)
        private paymentLineRepository:Repository<PaymentLine>,
        @InjectRepository(ModeOfPayment)
        private modeOfPaymentRepository:Repository<ModeOfPayment>
    ){}

    //payment si on opte pour une payment unique
    async payment(modeOfPaymentId:number,sale:Sale,amount:number){
        const modeOfPayment = await this.modeOfPaymentRepository.findOneBy({id:modeOfPaymentId});
        const payment = await this.paymentRepository.save({modeOfPayment});
        /*_creation line de payment_*/
        return await this.creationLinePayment(sale,payment,amount);

    }
    
    async creationLinePayment(sale:Sale,payment:Payment,amount:number){
        return await this.paymentLineRepository.save({sale,payment,amount});
    }
}
