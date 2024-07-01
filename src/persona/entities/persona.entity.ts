import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {

    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    nombre:string

    @Column('text')
    apellido:string

    @Column('text')
    dni:string

    @Column('text')
    telefono:string

    @Column({type:'numeric', nullable:true})
    area_id:number

    @Column({type:'numeric', nullable:true})
    rol_id:number   

}
