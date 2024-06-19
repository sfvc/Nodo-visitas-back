import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Visita } from 'src/visita/entities/visita.entity'; // Adjust the import path as per your project structure

@Entity({ name: 'persona_autorizada' }) // Table name in the database
export class PersonaAutorizada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ type: 'enum', enum: ['ADMIN', 'USER'], default: 'USER' })
  rol: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Visita, visita => visita.personaAutorizada)
  visitas: Visita[];
}
