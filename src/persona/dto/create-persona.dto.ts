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

    @IsString()
    funcion?:string

    @IsNumber()
    areaId?:number   

    @IsNumber()
    rolId?:number   

}
