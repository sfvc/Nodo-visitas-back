import { IsDate, IsDateString, IsInt, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateIngresoDto {

    @IsString()
    tiempo:string

    @IsString()
    @IsOptional()
    motivo?:string

    @IsDateString()
    @IsOptional()
    dia?: string; 
  
    @IsString()
    @IsOptional()
    hora?: string; 

    @IsNumber()
    @IsOptional()
    evento_id?:number

    @IsNumber()
    persona_id:number   
}
