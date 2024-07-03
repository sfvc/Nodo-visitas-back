import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { IngresosService } from './ingresos.service';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { UpdateIngresoDto } from './dto/update-ingreso.dto';
import { PaginationDto } from 'src/common/pagination.dto';

@Controller('ingresos')
export class IngresosController {
  constructor(private readonly ingresosService: IngresosService) {}

  @Post()
  create(@Body() createIngresoDto: CreateIngresoDto) {
    return this.ingresosService.create(createIngresoDto);
  }

  @Get()
  findAll(@Query() PaginationDto:PaginationDto) {
    return this.ingresosService.findAll(PaginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingresosService.findOne(+id);
  }
/*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngresoDto: UpdateIngresoDto) {
    return this.ingresosService.update(+id, updateIngresoDto);
  }
*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingresosService.remove(+id);
  }

  @Get('buscar/:term')
  buscarDia(@Param('term') term:string){
    return this.ingresosService.buscarDia(term)
  }
}
