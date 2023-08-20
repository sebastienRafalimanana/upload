import {Entity, Column, PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import { Product } from './product.entity';

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    categoryLabel:string
    
    /**__relation__ */

    @OneToMany(
        type=> Product,
        product => product.category
    )
    
    products:Product[]
}