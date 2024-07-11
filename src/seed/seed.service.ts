import { Injectable } from '@nestjs/common';
import { PersonaService } from '../persona/persona.service';
import { datosIniciales } from './data/seed-personas';
import { AreaService } from '../area/area.service';
import { datosInicialesArea } from './data/seed-area';


@Injectable()
export class SeedService {
  
  constructor(
    private readonly PersonaService:PersonaService,
    private readonly AreaService:AreaService
  )
  {}
  
  async runSeed()
  {
    await this.insertArea()
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

  private async insertArea()
  {

    await this.AreaService.eliminarArea()
    const areas=datosInicialesArea.area
    const insertarPromesas=[];
    areas.forEach(area=>{insertarPromesas.push(this.AreaService.create(area))})
    await Promise.all(insertarPromesas)
  }

}
