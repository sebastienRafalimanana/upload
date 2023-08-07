import { Entity,Column,PrimaryColumn } from "typeorm"

@Entity()
export class Exam{
    @PrimaryColumn()
    id:number
    @Column()
    centerName:string
    @Column()
    candidateMatricule:string
    @Column()
    labelOption:string
    @Column()
    candidateName:string
    @Column()
    status:boolean
    @Column()
    mention:string
}