import {Entity, Column, PrimaryGeneratedColumn,ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm'
import { Category } from './category.entity';
import { ProductSalesLine } from 'src/modules/sale/entities/productSalesLine.entity';
import MethodOfSale from './methodOfSale.entity';

@Entity({name:'product'})
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'product_name'})
	productName:string;

    @Column({name:'product_reference'})
    productReference: string;

    @Column({name:'product_code',nullable:true})
    productCode:string;

    @Column({name:'product_url_image',nullable:true})
	productUrlImage: string;

    @Column({name:'product_threashold'})
	productThreshold:number;

    @Column({name:'product_quantity'})
	productQuantity:number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
    
  
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
  

    /**__relation__ */

    @ManyToOne(
        type=> Category,
        category => category.products
    )
    @JoinColumn({
        name:'category_id'
    })
    category:Category

    @OneToMany(
        type=> ProductSalesLine,
        productLine => productLine.product
    )
    productSalesLines:Product[]

    @OneToMany(
        type=> MethodOfSale,
        methodOfSale => methodOfSale.product
    )
    methodOfSales:MethodOfSale[]

}
