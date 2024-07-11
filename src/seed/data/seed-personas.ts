interface SeedPersona
{
    nombre:string;
    apellido:string;
    dni:string;
    telefono:string;
    funcion:string
    rolId?:number;
    areaId:number;

}


interface SeedData{
    personas:SeedPersona[]
}

export const datosIniciales:SeedData={
    personas: [
        {
          nombre: "Tomas Ramòn",
          apellido: "ACOSTA",
          dni: "31691134",
          telefono: "383 511-9326",
          funcion: "PROFESOR FISICA/LAB/ ayudante facundo",
          areaId: 1
        },
        {
          nombre: "Silvina Soledad",
          apellido: "BUSTAMANTE LAZO",
          dni: "30005131",
          telefono: "383 402-3405",
          funcion: "ADMINISTRATIVA",
          areaId: 1
        },
        {
          nombre: "Eduardo David",
          apellido: "Condori Sir",
          dni: "29259732",
          telefono: "383 420-3815",
          funcion: "ADMINISTRATIVO",
          areaId: 1
        },
        {
          nombre: "Nadia Romina",
          apellido: "JALIL",
          dni: "32688141",
          telefono: "383 491-8900",
          funcion: "REDES/PLATAFORMAS",
          areaId: 1
        },
        {
          nombre: "Gimena Agostina",
          apellido: "VELIZ",
          dni: "37553555",
          telefono: "383 464-0042",
          funcion: "PROFESOR (robotica 1 y creando historias)",
          areaId: 1
        },
        {
          nombre: "Rodrigo Alejandro",
          apellido: "BAYON",
          dni: "28404302",
          telefono: "383 480-1060",
          funcion: "MANTENIMIENTO",
          areaId: 1
        },
        {
          nombre: "Facundo Ernesto",
          apellido: "PONESSA",
          dni: "40724699",
          telefono: "383 420-8776",
          funcion: "PROFESOR (robotica 1)",
          areaId: 1
        },
        {
          nombre: "Dario Gustavo",
          apellido: "LEGUIZAMON",
          dni: "27504980",
          telefono: "383 400-7628",
          funcion: "MANTENIMIENTO",
          areaId: 1
        },
        {
          nombre: "Natalia Araceli",
          apellido: "PEREZ",
          dni: "35934628",
          telefono: "383 404-5129",
          funcion: "ADMINISTRATIVA",
          areaId: 1
        },
        {
          nombre: "Sebastian Alejandro",
          apellido: "PACHECO RUIZ",
          dni: "32282135",
          telefono: "383 497-2607",
          funcion: "MANTENIMIENTO",
          areaId: 1
        },
        {
          nombre: "Sara Violeta",
          apellido: "CARRIZO DE LA FUENTE",
          dni: "26433723",
          telefono: "383 450-9964",
          funcion: "ADMINISTRATIVA",
          areaId: 1
        },
        {
          nombre: "Agustín Fernando",
          apellido: "AGÜERO",
          dni: "42519360",
          telefono: "383 463-1473",
          funcion: "PRENSA",
          areaId: 1
        },
        {
          nombre: "Fatima Agustina",
          apellido: "AGUERO LAGORIA",
          dni: "43878068",
          telefono: "383 400-1796",
          funcion: "ADMINISTRATIVO",
          areaId: 1
        },
        {
          nombre: "Maria Eugenia",
          apellido: "ARAYA",
          dni: "39013153",
          telefono: "383 494-1634",
          funcion: "RECEPCION/ASISTENTE PROFES",
          areaId: 1
        },
        {
          nombre: "Noelia Alejandra",
          apellido: "ARAYA",
          dni: "37089533",
          telefono: "383 492-0563",
          funcion: "RECEPCION/ASISTENTE PROFES",
          areaId: 1
        },
        {
          nombre: "Sol Maria Lourdes",
          apellido: "ARMAS SANCHEZ",
          dni: "45931592",
          telefono: "383 462-5380",
          funcion: "BEDEL/ ASISTENTE PROFES",
          areaId: 1
        },
        {
          nombre: "Belén",
          apellido: "ASSANTE",
          dni: "39998516",
          telefono: "383 434-5873",
          funcion: "BEDEL/ ASISTENTE PROFES",
          areaId: 1
        },
        {
          nombre: "Gianna Milena",
          apellido: "AVILA",
          dni: "41223848",
          telefono: "383 490-8353",
          funcion: "RECEPCION/ASISTENTE PROFES",
          areaId: 1
        },
        {
          nombre: "Lucas Emanuel",
          apellido: "BARRIENTOS",
          dni: "42103968",
          telefono: "383 473-7781",
          funcion: "PRENSA",
          areaId: 1
        },
        {
          nombre: "Ricardo David",
          apellido: "BRANE",
          dni: "79606805",
          telefono: "383 430-4721",
          funcion: "PROFE LABORATORIO",
          areaId: 1
        },
        {
          nombre: "Javier Manuel",
          apellido: "CAJAL",
          dni: "29703331",
          telefono: "383 405-6013",
          funcion: "PROFE LABORATORIO",
          areaId: 1
        },
        {
          nombre: "Maria Agustina",
          apellido: "CALDERON ROJAS",
          dni: "33758503",
          telefono: "383 495-7615",
          funcion: "INSTRUCTORA A PC/ROBOTICA Y PROGRAMACION introduccion a la PC y robotica 1",
          areaId: 1
        },
        {
          nombre: "Luis Eduardo",
          apellido: "CALSAPI",
          dni: "20915053",
          telefono: "383 460-1370",
          funcion: "MANTENIMIENTO",
          areaId: 1
        },
        {
          nombre: "Carlos Augusto",
          apellido: "DEL CAMPO",
          dni: "40599977",
          telefono: "383 498-0241",
          funcion: "PROFE LABORATORIO",
          areaId: 1
        },
        {
          nombre: "Hernan Wilson Rene",
          apellido: "GALVAN",
          dni: "36844449",
          telefono: "383 403-3501",
          funcion: "MANTENIMIENTO",
          areaId: 1
        },
        {
          nombre: "Emanuel Fernando",
          apellido: "GARCIA",
          dni: "38203434",
          telefono: "383 492-9434",
          funcion: "Diseño grafico/ Prensa",
          areaId: 1
        },
        {
          nombre: "Hector Maximiliano",
          apellido: "GOMEZ MARQUEZ",
          dni: "35286334",
          telefono: "383 487-3206",
          funcion: "RECEPCION/ASISTENTE PROFES",
          areaId: 1
        },
        {
          nombre: "Maria Natalia",
          apellido: "LASCANO",
          dni: "39016425",
          telefono: "383 569-5670",
          funcion: "Prensa/Cert. Formularios",
          areaId: 1
        },
        {
          nombre: "Evangelina",
          apellido: "LUDUEÑA RAMIREZ",
          dni: "33360007",
          telefono: "383 403-9448",
          funcion: "VISITAS/COORDINADORA",
          areaId: 1
        },
        {
          nombre: "Celeste Anahì",
          apellido: "MORENO",
          dni: "41187301",
          telefono: "383 477-8816",
          funcion: "BEDEL/ ASISTENTE PROFES",
          areaId: 1
        },
        {
          nombre: "Natalia Gabriela de los A.",
          apellido: "PACHECO",
          dni: "34222488",
          telefono: "383 499-5947",
          funcion: "RECEPCION/ASISTENTE PROFES (PUNTOS DIGITALES)",
          areaId: 1
        },
        {
          nombre: "Blanca Romina",
          apellido: "PONCE",
          dni: "35248733",
          telefono: "383 495-2720",
          funcion: "MANTENIMIENTO",
          areaId: 1
        },
        {
          nombre: "Lucas Emanuel",
          apellido: "QUIROGA",
          dni: "38203155",
          telefono: "383 400-3971",
          funcion: "STAFF",
          areaId: 1
        },
        {
          nombre: "Juan Carlos",
          apellido: "RODRIGUEZ",
          dni: "21325926",
          telefono: "383 406-7553",
          funcion: "MANTENIMIENTO",
          areaId: 1
        },
        {
          nombre: "Tomas Guillermo",
          apellido: "SECO VEKI",
          dni: "42016471",
          telefono: "383 492-1368",
          funcion: "INSTRUCTOR C/ PONESSA Roboca 1",
          areaId: 1
        },
        {
          nombre: "Brisa Belén",
          apellido: "TOLOZA",
          dni: "42616171",
          telefono: "383 478-1667",
          funcion: "RECEPCION/ASISTENTE PROFES",
          areaId: 1
        },
        {
          nombre: "lan Favio",
          apellido: "VILDOZA",
          dni: "39015250",
          telefono: "383 848-6757",
          funcion: "ADMINISTRATIVO",
          areaId: 1
        },
        {
          nombre: "HERNAN JAVIER",
          apellido: "ARUJ",
          dni: "22222222",
          telefono: "11 5757-4864",
          funcion: "Profesor/ Proyectos (EXCEL BASICO)",
          areaId: 1
        },
        {
          nombre: "CARLOS ALBERTO",
          apellido: "BARROSO",
          dni: "29918109",
          telefono: "383 459-8684",
          funcion: "Instructor robótica 2",
          areaId: 1
        },
        {
          nombre: "ANALIA",
          apellido: "CARRIZO",
          dni: "33360976",
          telefono: "383 495-9778",
          funcion: "Recepciòn/(eventos)",
          areaId: 1
        },
        {
          nombre: "Ana Laura",
          apellido: "CARRIZO DE LA FUENTE",
          dni: "29786544",
          telefono: "354 155-5656",
          funcion: "RECEPCIÒN / STAFF",
          areaId: 1
        },
        {
          nombre: "VICTOR HUGO",
          apellido: "COITTI",
          dni: "11111111",
          telefono: "776 847-4335",
          funcion: "Docentes diseño y modelado e impresion 3D",
          areaId: 1
        },
        {
          nombre: "MARCELA ALEJANDRA",
          apellido: "CORTES",
          dni: "31648597",
          telefono: "383 440-1277",
          funcion: "Instructora paquete office (Work basico, excel avanzado y google drive)",
          areaId: 1
        },
        {
          nombre: "CARLA EVANGELINA",
          apellido: "FARDIN",
          dni: "28115595",
          telefono: "351 656-8415",
          funcion: "Prensa/ Coord. espacios",
          areaId: 1
        },
        {
          nombre: "MIGUEL GUSTAVO",
          apellido: "GALVAN",
          dni: "36504903",
          telefono: "383 475-9832",
          funcion: "Instructor robótica 2",
          areaId: 1
        },
        {
          nombre: "MARIA VIRGINIA",
          apellido: "GASO",
          dni: "30676307",
          telefono: "383 458-1415",
          funcion: "Eventos/ Auditorio",
          areaId: 1
        },
        {
          nombre: "SEBASTIAN MELITON",
          apellido: "GOMEZ",
          dni: "39017166",
          telefono: "383 462-6124",
          funcion: "Instructor programación de videos juegos",
          areaId: 1
        },
        {
          nombre: "EMMANUEL",
          apellido: "LUDUEÑA",
          dni: "36504090",
          telefono: "383 460-0007",
          funcion: "Instructor robótica",
          areaId: 1
        },
        {
          nombre: "HECTOR RUBEN",
          apellido: "MARTINEZ",
          dni: "42519416",
          telefono: "383 493-5771",
          funcion: "Instructor FullStak",
          areaId: 1
        },
        {
          nombre: "ERIKA IVANA",
          apellido: "NIEVA",
          dni: "37306888",
          telefono: "383 423-9740",
          funcion: "Instructora programación (chicas programadoras y digi club)",
          areaId: 1
        },
        {
          nombre: "JORGE OMAR",
          apellido: "QUIROGA",
          dni: "34312480",
          telefono: "383 499-0108",
          funcion: "Instructor robótica 3",
          areaId: 1
        },
        {
          nombre: "RUBEN ESTEBAN",
          apellido: "RODRIGUEZ",
          dni: "16785942",
          telefono: "383 432-6226",
          funcion: "Experto FullStack",
          areaId: 1
        },
        {
          nombre: "CELIA DEL CARMEN",
          apellido: "SOTO",
          dni: "37637590",
          telefono: "383 462-5479",
          funcion: "Instructora programación (desarrollo web y chicas programadoras)",
          areaId: 1
        },
        {
          nombre: "SHIRLEY GERALDINE",
          apellido: "PALACIOS",
          dni: "35501250",
          telefono: "383 476-1807",
          funcion: "Recepciòn/(eventos)",
          areaId: 1
        },
        {
          nombre: "VICTOR OCTAVIO",
          apellido: "GUZMAN",
          dni: "17890141",
          telefono: "383 459-0540",
          funcion: "Encargado de mantenimiento",
          areaId: 1
        },
        {
          nombre: "LAURA SOLEDAD",
          apellido: "VISÑOVEZKY",
          dni: "31814008",
          telefono: "351 300-0328",
          funcion: "Administraciòn",
          areaId: 1
        },
        {
          nombre: "Juan Matias",
          apellido: "Reynoso Chocobar",
          dni: "36489561",
          telefono: "3837695201",
          funcion: "Product Manager",
          areaId: 2
        },
        {
          nombre: "Esteban Eduardo ",
          apellido: "Robert",
          dni: "40434082",
          telefono: "3834407708",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Jose Maximiliano",
          apellido: "Alzogaray",
          dni: "41774207",
          telefono: "3834217703",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Diego Gonzalo",
          apellido: "Robert",
          dni: "42519217",
          telefono: "3834357363",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Matias Bautista",
          apellido: "Borquez",
          dni: "42519449",
          telefono: "3834324087",
          funcion: "Analista de Datos",
          areaId: 2
        },
        {
          nombre: "Agustin",
          apellido: "Jalil Leon",
          dni: "39017064",
          telefono: "3835117701",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Gabriel Alejandro",
          apellido: "Leiva",
          dni: "38202391",
          telefono: "3834401246",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Martin Alberto",
          apellido: "barrios",
          dni: "39013644",
          telefono: "3834681000",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Leandro Lautaro ",
          apellido: "Lobo Sosa",
          dni: "39014662",
          telefono: "3834355424",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Luciano Oscar",
          apellido: "Reguera",
          dni: "28508376",
          telefono: "3834959267",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Nahuel",
          apellido: "Soria Parodi",
          dni: "43532773",
          telefono: "3834523702",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Carlos Alejandro",
          apellido: "Isasmendi",
          dni: "33565489",
          telefono: "3834358706",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Lorena Edith",
          apellido: "Carrizo",
          dni: "31412585",
          telefono: "3834406354",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Cristian ",
          apellido: "Moreno",
          dni: "36039548",
          telefono: "3865291583",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Carlos Alberto",
          apellido: "Acosta Parra",
          dni: "30502673",
          telefono: "3834545305",
          funcion: "Product Manager",
          areaId: 2
        },
        {
          nombre: "Gabriel Augusto",
          apellido: "Fernandez",
          dni: "37643103",
          telefono: "3835403745",
          funcion: "Desarrollador",
          areaId: 2
        },
        {
          nombre: "Matias",
          apellido: "Samboni",
          dni: "29786654",
          telefono: "3834001284",
          funcion: "Director",
          areaId: 2
        },
        {
          nombre: "Juan ",
          apellido: "Lorenzo",
          dni: "31336824",
          telefono: "3834312804",
          funcion: "Product Manager",
          areaId: 2
        },
        {
          nombre: "Carlos Alberto",
          apellido: "Maidana",
          dni: "28647195",
          telefono: "3834004765",
          funcion: "Jefe de Departamento Redes",
          areaId: 3
        },
        {
          nombre: "Luis Agustín",
          apellido: "Rojas",
          dni: "33758714",
          telefono: "3834357414",
          funcion: "Jefe de Division WAN- Departamento Redes",
          areaId: 3
        },
        {
          nombre: "Jorge Luis",
          apellido: "Valdiviezo",
          dni: "28310844",
          telefono: "3834312020",
          funcion: "Jefe de Division LAN- Departamento Redes",
          areaId: 3
        },
        {
          nombre: "Juan",
          apellido: "Alvarez Herrera",
          dni: "30805804",
          telefono: "3834009608",
          funcion: "Tecnico",
          areaId: 3
        },
        {
          nombre: "Federico Jose ",
          apellido: "Trossero",
          dni: "34118740",
          telefono: "3834351037",
          funcion: "Tecnico",
          areaId: 3
        },
        {
          nombre: "Luis",
          apellido: "Alvarez Marcial",
          dni: "22515288",
          telefono: "3834717813",
          funcion: "Supervisor Tecnico",
          areaId: 3
        },
        {
          nombre: "Rafael Alejandro",
          apellido: "Trossero",
          dni: "35733798",
          telefono: "3834047382",
          funcion: "Director",
          areaId: 3
        }
      ]
}