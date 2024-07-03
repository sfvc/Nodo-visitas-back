import { Persona } from "src/persona/entities/persona.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Area {

    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    nombre:string

    @OneToMany(()=>Persona,(persona)=>persona.area)
    persona?:Persona 
}
