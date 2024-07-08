import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PaginationDto } from 'src/common/pagination.dto';


@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  async create(@Body() createPersonaDto: CreatePersonaDto) {
    this.personaService.create(createPersonaDto);
    return "persona creada exitosamente"
  }

  @Get()
  async findAll(@Query() PaginationDto:PaginationDto) {
    return this.personaService.findAll(PaginationDto);
  }

  @Get(':id')
  async findOne(@Param('id')  id: string) {
    return this.personaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(+id, updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(+id);
  }

  @Get('buscar/:term')
  async buscarPersona(@Param('term') term:string)
  {
    return this.personaService.buscarPersona(term);
  }

  @Get('buscar/dni/:term')
  async buscarDni(@Param('term') term:string)
  {
    return this.personaService.buscarDocumento(term)
  }
}
