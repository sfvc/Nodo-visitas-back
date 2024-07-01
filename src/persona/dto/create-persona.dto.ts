import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePersonaDto {

    @IsString()
    nombre:string

    @IsString()
    apellido:string

    @IsString()
    dni:string

    @IsString()
    telefono:string

    @IsNumber()
    @IsOptional()
    area_id?:number   

    @IsNumber()
    rol_id:number   

}
