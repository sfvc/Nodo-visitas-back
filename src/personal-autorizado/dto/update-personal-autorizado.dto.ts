import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalAutorizadoDto } from './create-personal-autorizado.dto';

export class UpdatePersonalAutorizadoDto extends PartialType(CreatePersonalAutorizadoDto) {}
