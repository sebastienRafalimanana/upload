import { type } from "os"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Payment } from "./payment.entity"

@Entity({name:"mode_of_payment"})
export class ModeOfPayment{
    @PrimaryGeneratedColumn()
    id:number

    @Column({name:"label_mode_of_payment"})
    labelModeOfPayment:string

     /**__relation__ */
     
    @OneToMany(
        type=>Payment,
        payment=>payment.modeOfPayment
    )
    payments:Payment[]
}