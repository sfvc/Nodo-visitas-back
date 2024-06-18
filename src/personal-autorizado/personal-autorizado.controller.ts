import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalAutorizadoService } from './personal-autorizado.service';
import { CreatePersonalAutorizadoDto } from './dto/create-personal-autorizado.dto';
import { UpdatePersonalAutorizadoDto } from './dto/update-personal-autorizado.dto';

@Controller('personal-autorizado')
export class PersonalAutorizadoController {
  constructor(private readonly personalAutorizadoService: PersonalAutorizadoService) {}

  @Post()
  create(@Body() createPersonalAutorizadoDto: CreatePersonalAutorizadoDto) {
    return this.personalAutorizadoService.create(createPersonalAutorizadoDto);
  }

  @Get()
  findAll() {
    return this.personalAutorizadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalAutorizadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalAutorizadoDto: UpdatePersonalAutorizadoDto) {
    return this.personalAutorizadoService.update(+id, updatePersonalAutorizadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalAutorizadoService.remove(+id);
  }
}
