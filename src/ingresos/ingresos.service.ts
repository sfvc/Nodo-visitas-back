import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { UpdateIngresoDto } from './dto/update-ingreso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingresos } from './entities/ingreso.entity';
import { PaginationDto } from '../common/pagination.dto';
import { Persona } from 'src/persona/entities/persona.entity';

@Injectable()
export class IngresosService {

  constructor(
    @InjectRepository(Ingresos)
    private readonly ingresosRepository:Repository<Ingresos>,

    @InjectRepository(Persona)
    private readonly personaRepository:Repository<Persona>,
  ){}
  


  async create(createIngresoDto: CreateIngresoDto) {
    try {
      const now = new Date();
      const dia = now.toISOString().split('T')[0]; 
      const hora = now.toTimeString().split(' ')[0];

      createIngresoDto.dia = dia;
      createIngresoDto.hora = hora;

      const persona = await this.personaRepository.findOneBy({id: createIngresoDto.personaId});
      if (!persona) {
        throw new NotFoundException(`Persona con id ${createIngresoDto.personaId} no encontrada`);
      }

      const ingreso = this.ingresosRepository.create({
        ...createIngresoDto,
        persona: persona,
      });
      await this.ingresosRepository.save(ingreso);
      return ingreso;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

  }

  async findAll(PaginationDto:PaginationDto) {
    let {limit=10,offset=0}=PaginationDto;
    const ingreso=await this.ingresosRepository.find({take:limit,skip:offset,relations: ['persona'],order: {hora: 'DESC'}});

    if(!ingreso)
      {
        throw new  NotFoundException("No se encontraron ingreso");
      }
    return ingreso;
  }

  async findOne(id: number) {
    const ingreso=this.ingresosRepository.findBy({id})
    if(!ingreso)throw new NotFoundException("No se encontro el ingreso")
    return ingreso;
  }

  update(id: number, updateIngresoDto: UpdateIngresoDto) {
    return `This action updates a #${id} ingreso`;
  }

  async remove(id: number) {
    const ingreso=await this.ingresosRepository.findBy({id})
    if(!ingreso)throw new NotFoundException("No se encontro el ingreso")
    await this.ingresosRepository.remove(ingreso);
  
    return `El ingreso fue borrado correctamente`;
  }


  async buscarDia(term:string)
  {
    const ingreso=await this.ingresosRepository
    .createQueryBuilder('ingreso')
    .leftJoinAndSelect('ingreso.persona', 'persona')
    .where('ingreso.dia= :term ', { term})
    .orderBy('hora','DESC')
    .getMany();
    if(!ingreso)
      {
        throw new NotFoundException("No se encontro ninguna ingreso")
      }
    return ingreso
  }

  async buscarPersona(term:string)
  {
    const ingreso=await this.ingresosRepository
    .createQueryBuilder('ingreso')
    .leftJoinAndSelect('ingreso.persona', 'persona')
    .where('ingreso.persona= :term ', { term})
    .getMany();
    if(!ingreso)
      {
        throw new NotFoundException("No se encontro ninguna ingreso")
      }
    return ingreso
  }
}
