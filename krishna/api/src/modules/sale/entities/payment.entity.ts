import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { ModeOfPayment } from "./modeOfPayment.entity"
import { PaymentLine } from "./paymentLine.entity"

@Entity({name:"payment"})
export class Payment{
    @PrimaryGeneratedColumn()
    id:number

    @Column({name:"receipt_number",nullable:true})
    receiptNumber:string

    @CreateDateColumn({name:"date_payement"})
    datePayement:Date

     /**__relation__ */

    @OneToOne(
        type=> PaymentLine,
        paymentLine => paymentLine.sale
    )
    paymentLine:PaymentLine

    @ManyToOne(
        type=>ModeOfPayment,
        modeOfPayment=>modeOfPayment.payments
    )
    @JoinColumn({
        name:'mode_of_payment_id'
    })
    modeOfPayment:ModeOfPayment
}