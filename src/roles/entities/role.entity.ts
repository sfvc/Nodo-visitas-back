import { Persona } from "src/persona/entities/persona.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    nombre:string

    @OneToMany(()=>Persona,(persona)=>persona.roles)
    persona?:Persona
}
