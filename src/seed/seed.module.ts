import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PersonaModule } from 'src/persona/persona.module';
import { AreaModule } from 'src/area/area.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[PersonaModule,AreaModule]
})
export class SeedModule {}
