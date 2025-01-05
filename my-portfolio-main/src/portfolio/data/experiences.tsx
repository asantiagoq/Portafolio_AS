import { Experience } from '../interfaces/interfaces';
import { technologies } from './technologies';

export const experiences: Experience[] = [ 
    {
        title: 'Inicio la carrera de Ingeníera de Sistemas',
        subtitle: 'Universidad Nacional de San Agustín',
        content: 'Siempre me llamó la atención el mundo digital, aprender tecnologías nuevas y los videojuegos y por estas razones decidí esta carrera y descubrí muchas otras cosas más las cuáles he ido aprendiendo en el camino.',
        date: '2020 - Inicio',
        icon: technologies['java'].logo, 
    },
    {
        title: 'Etapa de Formacion y Aprendizaje de las Bases de la Programacion',
        subtitle: 'Algoritmos, Lenguajes de programacion con los que inicié en este mundo del Desarollo Web',
        content: 'Inicié con Python y Java como lenguajes de programacion y con frameworks como Django para la realizacion de proyectos pequeños y finalmente algoritmos de ordenacion ',
        date: '2021-2022',
        link: 'https://drive.google.com/drive/folders/13FXkf7YX78iSlvtLy4FLbY2RZy9hvHvs?usp=sharing',
        icon: technologies['nodeJS'].logo,
    },
    {
        title: 'Primer Proyecto Colaborativo usando la metodología SCRUM',
        subtitle: 'Gestion de Requerimientos para el director de la Escuela',
        content: 'Se realizó una gestion de requerimientos para una futura aplicacion de escritorio usando la metodología Agil SCRUM',
        date: '2023',
        link: '',
        icon: technologies['github'].logo,
    },
    {
        title: 'Certificaciones',
        subtitle: 'Certificados internacionales (Certiprof)',
        content: '5 certificados sobre  metodologías de gestión de proyectos, trabajo remoto, inteligencia empresarial, mejora de procesos y modelos de negocio',
        date: 'Enero 2024',
        link: 'https://drive.google.com/drive/folders/1JI2b9uR2UISyyPzz24NYaPCsLVgDUpcv?usp=sharing',
        icon: technologies['java'].logo,
    },
    {
        title: 'Cursos Realizados',
        subtitle: 'Participación en cursos sobre el Hacking Ethico y Google Cloud Computing',
        content: 'Se culminó el curso de Hacking Etico con un total de 24 horas realizadas, a su vez los 4 cursos de GCC tambien se lograron completar con un total de 40 horas realizadas',
        date: 'Febrero - Junio 2024',
        link: 'https://drive.google.com/drive/folders/1zp1ziehB7LOQZrfe3kIY_EVyDwMi4vzf?usp=sharing',
        icon: technologies['java'].logo,
    },
    
    {
        title: 'Campeón del campeonato de la Facultad de Produccion y Servicios de la UNSA',
        subtitle: '',
        content: 'Tambien me gustan mucho los deportes y tuve la oportunidad de ganar un campeonato dentro de la univerdad',
        date: 'Noviembre 2024',
        link: 'https://drive.google.com/drive/folders/1MvjY1XnXgxFyC1STyrO_aqy85QPGzFVX?usp=sharing',
    },

    // {
    //     title: '',
    //     subtitle: '',
    //     content: '',
    //     date: '',
    // },
];