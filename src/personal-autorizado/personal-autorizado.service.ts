import { Injectable } from '@nestjs/common';
import { CreatePersonalAutorizadoDto } from './dto/create-personal-autorizado.dto';
import { UpdatePersonalAutorizadoDto } from './dto/update-personal-autorizado.dto';

@Injectable()
export class PersonalAutorizadoService {
  
  create(createPersonalAutorizadoDto: CreatePersonalAutorizadoDto) {
    return 'This action adds a new personalAutorizado';
  }

  findAll() {
    return `This action returns all personalAutorizado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalAutorizado`;
  }

  update(id: number, updatePersonalAutorizadoDto: UpdatePersonalAutorizadoDto) {
    return `This action updates a #${id} personalAutorizado`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalAutorizado`;
  }
}
