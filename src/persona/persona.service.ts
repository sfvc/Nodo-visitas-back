import { Injectable, InternalServerErrorException, Logger, NotFoundException, Query } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { PaginationDto } from 'src/common/pagination.dto';
import { Roles } from 'src/roles/entities/role.entity';
import { Area } from 'src/area/entities/area.entity';

@Injectable()
export class PersonaService {

  private readonly logger=new Logger

  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository:Repository<Persona>,

    @InjectRepository(Roles)
    private readonly rolesRepository:Repository<Roles>,

    @InjectRepository(Area)
    private readonly areaRepository:Repository<Area>
    
  ){}

   async create(createPersonaDto: CreatePersonaDto) {
   try {

    const roles=await this.rolesRepository.findOneBy({id:createPersonaDto.rolId})
    const area=await this.areaRepository.findOneBy({id:createPersonaDto.areaId})

      const persona=this.personaRepository.create({...createPersonaDto , roles:roles,area:area});
      await this.personaRepository.save(persona);
   } catch (error) {
    this.handleDBExeptions(error)
   }
  }

  async findAll(PaginationDto:PaginationDto) {
    const {limit=10,offset=0}=PaginationDto;

    const personas=await this.personaRepository.find({take:limit,skip:offset,relations:['roles','area']});
    if(!personas)
      {
        throw new NotFoundException("No se encontro ninguna persona")
      }
      return personas
  }

  async findOne(id: number) {
    const persona=this.personaRepository.findOne({where:{id}, relations:['roles','area']})
    if(!persona)throw new NotFoundException('Persona no encontrada')
    return persona;
  
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const { rolId,areaId, ...personaData } = updatePersonaDto;
  
    // Preload persona data
    const persona = await this.personaRepository.preload({ id, ...personaData });
    if (!persona) throw new NotFoundException('No se encontró la persona');
  
    // Handle roles if rolId is present
    if (rolId) {
      const roles = await this.rolesRepository.findOneBy({ id: rolId });
      if (!roles) {
        throw new NotFoundException(`Rol con id ${rolId} no encontrado`);
      }
      persona.roles = roles;
    }

    if (areaId) {
      const area = await this.areaRepository.findOneBy({ id: areaId });
      if (!area) {
        throw new NotFoundException(`Area no encontrada`);
      }
      persona.area = area;
    }
  
    try {
      await this.personaRepository.save(persona);
      return persona;
    } catch (error) {
      this.handleDBExeptions(error);
    }
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


  async buscarPersona(term: string)
  {
    const search = term.toLowerCase();
    const persona=await this.personaRepository
    .createQueryBuilder('persona')
    .leftJoinAndSelect('persona.roles', 'roles')
    .leftJoinAndSelect('persona.area', 'area')
    .where('LOWER(persona.nombre) LIKE :search OR LOWER(persona.apellido) LIKE :search', { search: `%${search}%`})
    .getMany();
    if(!persona)
      {
        throw new NotFoundException("No se encontro ninguna persona")
      }
    return persona
  }

  async eliminarPersonas()
  {
    const query=this.personaRepository.createQueryBuilder('persona');

    try {
      await this.personaRepository.query('TRUNCATE TABLE persona RESTART IDENTITY CASCADE');
      await query.delete().where({}).execute();
      return true
      
    } catch (error) {
      return this.handleDBExeptions(error)
    }
  }

  async buscarDocumento(term: string)
  {

    const persona=await this.personaRepository
    .createQueryBuilder('persona')
    .leftJoinAndSelect('persona.roles', 'roles')
    .leftJoinAndSelect('persona.area', 'area')
    .where('persona.dni=:term', {term})
    .getOne();
    if(!persona)
      {
        throw new NotFoundException("No se encontro ninguna persona")
      }
    return persona
  }

  private handleDBExeptions(error:any)
  {
     this.logger.error(error)
     throw new InternalServerErrorException('error');
  }
}
