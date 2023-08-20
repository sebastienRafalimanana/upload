import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ProductSalesLine } from "./productSalesLine.entity";
import { Customer } from "./customer.entity";
import { PaymentLine } from "./paymentLine.entity";

@Entity({name:"sale"})
export class Sale {
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    date:Date ;

    @Column({name:'invoice_number',})
    invoiceNumber:string

     /**__relation__ */

    @OneToMany(
        type=> ProductSalesLine,
        productSalesLine => productSalesLine.sale
    )
    productLines:ProductSalesLine[]

    @OneToMany(
        type=> PaymentLine,
        paymentLine => paymentLine.sale
    )
    paymentLines:PaymentLine[]


    @ManyToOne(
        type=>Customer,
        customer => customer.sales
    )
    @JoinColumn({
        name:'customer_id'
    })
    customer:Customer
}
