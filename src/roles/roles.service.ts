import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {

  private readonly logger=new Logger
  
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository:Repository<Roles>
  ){}
  
  async create(createRoleDto: CreateRoleDto) {
    try {
      const rol=this.rolesRepository.create(createRoleDto);
      await this.rolesRepository.save(rol);
      return "Rol creado"
    } catch (error) {
      this.handleDBExeptions(error);
    }
  }

  async findAll() {

    const roles=await this.rolesRepository.find({})
    if(!roles)
      {
        throw new  NotFoundException("No se encontraron roles")
      }
    return roles;
  }

  async findOne(data:string) {
      let roles:Roles
   
      const search=data.toLowerCase();
      const queryBuilder=this.rolesRepository.createQueryBuilder("roles");
      roles=await queryBuilder.where('LOWER(roles.nombre)=:nombre',{nombre:search}).getOne()
      if(!roles)throw new NotFoundException(`No se encontro el rol ${data}`);

    return roles;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const rol=await this.rolesRepository.preload({id:id, ...updateRoleDto});
    if(!rol) throw new NotFoundException("No se encontro el rol")
    try {
        await this.rolesRepository.save(rol);
        return rol;
    } catch (error) {
      this.handleDBExeptions(error)
    }
  }

  async remove(id: number) {
    const rol=await this.rolesRepository.findBy({id});
    if(!rol) throw new NotFoundException("No se encontro el rol")
      await this.rolesRepository.remove(rol);
    return `Rol eliminado correctamente`;
  }

  
  private handleDBExeptions(error:any)
  {
     this.logger.error(error)
     throw new InternalServerErrorException('error');
  }
}
