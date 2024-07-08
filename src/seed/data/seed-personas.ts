interface SeedPersona
{
    nombre:string;
    apellido:string;
    dni:string;
    telefono:string;
    rolId:number;
    areaId:number;

}


interface SeedData{
    personas:SeedPersona[]
}

export const datosIniciales:SeedData={
    personas: [
        {
            nombre:"martin",apellido:"barrios",dni:"39013644",telefono:"3834681000",rolId:1,areaId:1
        }
    ]
}