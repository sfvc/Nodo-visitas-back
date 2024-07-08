import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Roles } from 'src/roles/entities/role.entity';
import { Area } from 'src/area/entities/area.entity';

@Module({
  controllers: [PersonaController],
  providers: [PersonaService],
  imports:[TypeOrmModule.forFeature([Persona,Roles,Area])],
  exports:[TypeOrmModule,PersonaService]
})
export class PersonaModule {}
