import { Persona } from "src/persona/entities/persona.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingresos {
    @PrimaryGeneratedColumn()
    id:number

    @Column({ type: 'enum', enum: ['mañana', 'tarde', 'noche'] })
    tiempo:string

    @Column('text')
    motivo:string

    @Column('date')
    dia:Date

    @Column({type:'time'})
    hora:string

    @ManyToOne(()=>Persona,(persona)=>persona.ingresos)
    persona:Persona

}
