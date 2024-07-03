import { Module } from '@nestjs/common';
import { IngresosService } from './ingresos.service';
import { IngresosController } from './ingresos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingresos } from './entities/ingreso.entity';
import { Persona } from 'src/persona/entities/persona.entity';

@Module({
  controllers: [IngresosController],
  providers: [IngresosService],
  imports:[TypeOrmModule.forFeature([Ingresos,Persona])]
})
export class IngresosModule {}
