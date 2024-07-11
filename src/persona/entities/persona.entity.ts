import { Area } from "src/area/entities/area.entity";
import { Ingresos } from "src/ingresos/entities/ingreso.entity";
import { Roles } from "src/roles/entities/role.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column('text', {nullable:true})
    funcion:string

    @OneToMany(()=>Ingresos,(ingresos)=>ingresos.persona,{cascade:true})
    ingresos?:Ingresos

    @ManyToOne(()=>Roles,(roles)=>roles.persona)
    roles?:Roles

    @ManyToOne(()=>Area,(area)=>area.persona)
    area?:Area


}
