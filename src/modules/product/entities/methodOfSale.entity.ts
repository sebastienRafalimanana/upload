import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./product.entity"

@Entity({ name: "method_of_sale" })
export default class MethodOfSale {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    mode: String

    @Column({ name: "unit_price" })
    unitPrice: number

    /**__relation__ */

    @ManyToOne(
        type => Product,
        product => product.methodOfSales
    )
    @JoinColumn({
        name: 'product_id'
    })
    product: Product
}