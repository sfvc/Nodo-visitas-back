import { Injectable, InternalServerErrorException, Logger, NotFoundException, Query } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AreaService {

  private readonly logger=new Logger
  constructor(
    @InjectRepository(Area)
    private readonly areaRepository:Repository<Area>
  ){}
  

  async create(createAreaDto: CreateAreaDto) {
    try {
      const area=this.areaRepository.create(createAreaDto)
      await this.areaRepository.save(area)
      return "Area creada"
    } catch (error) {
      this.handleDBExeptions(error);
    }
  }

  async findAll() {
    const areas=await this.areaRepository.find({})
    if(!areas)throw new NotFoundException("No se encontraron areas")
    return areas;
  }

  async findOne(data:string) {
    let area:Area
   
    const search=data.toLowerCase();
    const queryBuilder=this.areaRepository.createQueryBuilder("area");
    area=await queryBuilder.where('LOWER(area.nombre)=:nombre',{nombre:search}).getOne()
    if(!area)throw new NotFoundException(`No se encontro el area ${data}`);

  return area;
  }

  async update(id: number, updateAreaDto: UpdateAreaDto) {
    const area=await this.areaRepository.preload({id:id, ...updateAreaDto});
    if(!area) throw new NotFoundException("No se el area")
    try {
        await this.areaRepository.save(area);
        return area;
    } catch (error) {
      this.handleDBExeptions(error)
    }
  }

  async remove(id: number) {
    const area=await this.areaRepository.findBy({id});
    if(!area) throw new NotFoundException("No se encontro el area")
      await this.areaRepository.remove(area);
    return `Area eliminado correctamente`;
  }

  async eliminarArea()
  {
    const query=this.areaRepository.createQueryBuilder('area')
    try {
      await this.areaRepository.query('TRUNCATE TABLE area RESTART IDENTITY CASCADE');
      await query.delete().where({}).execute();
      return true;
    } catch (error) {
      return this.handleDBExeptions(error)
    }
  }

  private handleDBExeptions(error:any)
  {
     this.logger.error(error)
     throw new InternalServerErrorException('error');
  }
}
