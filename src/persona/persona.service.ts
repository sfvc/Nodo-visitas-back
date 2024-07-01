import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { PaginationDto } from 'src/common/pagination.dto';

@Injectable()
export class PersonaService {

  private readonly logger=new Logger

  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository:Repository<Persona>,
  ){}

   async create(createPersonaDto: CreatePersonaDto) {
   try {
      const persona=this.personaRepository.create(createPersonaDto);
      await this.personaRepository.save(persona);
   } catch (error) {
    this.handleDBExeptions(error)
   }
  }

  async findAll(PaginationDto:PaginationDto) {
    const {limit=10,offset=0}=PaginationDto;

    const personas=await this.personaRepository.find({take:limit,skip:offset});
    if(!personas)
      {
        throw new NotFoundException("No se encontro ninguna persona")
      }
      return personas
  }

  async findOne(term: string) {

    let persona:Persona
    const search = term.toLowerCase();
    const queryBuilder=this.personaRepository.createQueryBuilder();
    persona= await queryBuilder.where('LOWER(nombre)=:nombre or LOWER(apellido)=:apellido',{nombre:search,apellido:search}).getOne()
   
    if(!persona)
      {
        throw new NotFoundException("No se encontro ninguna persona")
      }
    return persona
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {

    const persona=await this.personaRepository.preload({id:id, ...updatePersonaDto});
    if(!persona) throw new  NotFoundException('No se encontro la persona');

    try {
      await this.personaRepository.save(persona);
      return persona;
    } catch (error) {
      this.handleDBExeptions(error);
    }

    return `Se actualizo la persona`;
  }

  async remove(id: number) {
    const persona=await this.personaRepository.findOneBy({id});
    if(!persona)
      {
        throw new NotFoundException("No se encontro ninguna persona")
      }
    await this.personaRepository.remove(persona);

    return "Persona eliminada ";
  }

  private handleDBExeptions(error:any)
  {
     this.logger.error(error)
     throw new InternalServerErrorException('error');
  }
}
