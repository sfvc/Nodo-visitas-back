import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { UpdateIngresoDto } from './dto/update-ingreso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingresos } from './entities/ingreso.entity';

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

  async findAll() {
    const ingreso=await this.ingresosRepository.find({})
    if(!ingreso)
      {
        throw new  NotFoundException("No se encontraron ingreso")
      }
    return ingreso;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingreso`;
  }

  update(id: number, updateIngresoDto: UpdateIngresoDto) {
    return `This action updates a #${id} ingreso`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingreso`;
  }
}
