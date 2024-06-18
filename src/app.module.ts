import { Module } from '@nestjs/common';
import { PersonalAutorizadoModule } from './personal-autorizado/personal-autorizado.module';
import { VisitaModule } from './visita/visita.module';

@Module({
  imports: [PersonalAutorizadoModule, VisitaModule],
})
export class AppModule {}
