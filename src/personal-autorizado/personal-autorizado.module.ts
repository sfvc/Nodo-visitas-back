import { Module } from '@nestjs/common';
import { PersonalAutorizadoService } from './personal-autorizado.service';
import { PersonalAutorizadoController } from './personal-autorizado.controller';

@Module({
  controllers: [PersonalAutorizadoController],
  providers: [PersonalAutorizadoService],
})
export class PersonalAutorizadoModule {}
