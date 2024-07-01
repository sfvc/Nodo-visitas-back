import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({type:'numeric', nullable:true})
    evento_id:number

    @Column({type:'numeric'})
    persona_id:number   
}
