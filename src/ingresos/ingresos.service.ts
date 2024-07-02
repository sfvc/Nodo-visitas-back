import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { UpdateIngresoDto } from './dto/update-ingreso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingresos } from './entities/ingreso.entity';
import { PaginationDto } from '../common/pagination.dto';

@Injectable()
export class IngresosService {

  constructor(
    @InjectRepository(Ingresos)
    private readonly ingresosRepository:Repository<Ingresos>
  ){}
  


  async create(createIngresoDto: CreateIngresoDto) {
    try {
      const now = new Date();
      const dia = now.toISOString().split('T')[0]; 
      const hora = now.toTimeString().split(' ')[0];

      createIngresoDto.dia = dia;
      createIngresoDto.hora = hora;



      const ingreso=this.ingresosRepository.create(createIngresoDto)
      await this.ingresosRepository.save(ingreso);
      return ingreso;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

  }

  async findAll(PaginationDto:PaginationDto) {
    let {limit=10,offset=0}=PaginationDto;
    const ingreso=await this.ingresosRepository.find({take:limit,skip:offset});
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
}
