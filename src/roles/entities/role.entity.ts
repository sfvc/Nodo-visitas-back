import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    nombre:string
}
