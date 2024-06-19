import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PersonalAutorizado } from 'src/personal-autorizado/entities/personal-autorizado.entity'; // Adjust the import path as per your project structure

@Entity({ name: 'visita' }) // Table name in the database
export class Visita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column({ type: 'text' })
  momento: string;

  @ManyToOne(() => PersonalAutorizado, personalAutorizado => personalAutorizado.visitas)
  personalAutorizado: PersonalAutorizado;
}
