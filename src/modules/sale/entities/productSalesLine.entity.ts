import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Sale } from './sale.entity';
import { Product } from 'src/modules/product/entities/product.entity';
@Entity()
export class ProductSalesLine {
    @PrimaryGeneratedColumn()
    id: number;

    quantity: number;

    @Column({ name: 'unit_price' })
    unitPrice: number;

    @Column({ name: 'is_delivered', default: true })
    isDelivered: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;


    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    /**__relation__ */

    @ManyToOne(
        type => Sale,
        sale => sale.productLines
    )
    @JoinColumn({
        name: 'sale_id'
    })
    sale: Sale

    @ManyToOne(
        type => Product,
        product => product.productSalesLines
    )
    @JoinColumn({
        name: 'product_id'
    })
    product: Product

}