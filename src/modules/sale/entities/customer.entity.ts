import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm'
import { Sale } from './sale.entity';

@Entity({name:'customer'})
export class Customer {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"customer_name"})
    customerName: string;

    @Column({name:"is_subscribed",default:false})
	isSubscribed:boolean

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
    
  
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
    

    /**__relation__ */

    @OneToMany(
        type=> Sale,
        sale => sale.customer
    )
    sales:Sale[]

}
