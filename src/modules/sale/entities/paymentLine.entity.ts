import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Sale } from "./sale.entity"
import { Payment } from "./payment.entity"

@Entity({name:"payment_line"})
export class PaymentLine{
    @PrimaryGeneratedColumn()
    id:number

    @Column({name:"amount"})
    amount:number

    @CreateDateColumn({name:"date_payement_line"})
    date_payement_line:Date

     /**__relation__ */

    @ManyToOne(
        type=>Sale,
        sale=>sale.paymentLines
    )
    @JoinColumn({
        name:'sale_id'
    })
    sale:Sale

    @OneToOne(
        type=>Payment,
        payment=>payment.paymentLine
    )
    @JoinColumn({
        name:'payment_id'
    })
    payment:Payment
}