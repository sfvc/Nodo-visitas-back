import { Injectable } from '@nestjs/common';
import { PersonaService } from '../persona/persona.service';
import { datosIniciales } from './data/seed-personas';


@Injectable()
export class SeedService {
  
  constructor(private readonly PersonaService:PersonaService)
  {}
  
  async runSeed()
  {
    await this.insertPersonas()
    return "Se creo correctamente el seed"
  }

  private async insertPersonas()
  {

    await this.PersonaService.eliminarPersonas();
    const personas=datosIniciales.personas
    const insertarPromesas=[];

    personas.forEach(personas=>
    {
      insertarPromesas.push(this.PersonaService.create(personas));
    })

    await Promise.all(insertarPromesas)

    return true
  }

}
