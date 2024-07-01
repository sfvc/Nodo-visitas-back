import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';
import { RolesModule } from './roles/roles.module';
import { IngresosModule } from './ingresos/ingresos.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ConfigModule.forRoot(),
     TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port:+process.env.DB_PORT,
      database:process.env.DB_NAME,
      username:process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      autoLoadEntities:true,
      synchronize:true
     }),
     PersonaModule,
     RolesModule,
     IngresosModule,
     CommonModule
    ],
})
export class AppModule { }
