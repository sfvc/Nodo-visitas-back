interface SeedArea
{
    nombre:string
}

interface SeedData{
    area:SeedArea[]
}

export const datosInicialesArea:SeedData=
{
    area:[
        {
            nombre:"Nodo tecnologico"
        },
        {
            nombre:"Sistemas e innovacion Publica"
        },
        {
            nombre:"Infraestructura Tecnologica"
        }
    ]
}