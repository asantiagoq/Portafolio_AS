import { Project } from '../interfaces/interfaces';

export const projects: Project[] = [
    {
        title: 'Sistema de Gestion de Inventarios',
        img: './project1.webp',
        about: 'Ecommerce para manejar el inventario de productos de una Librería así como las notas de entrada y notas de salida  ',
        tools: ['angular', 'materialUI', 'typescript', 'HTML','CSS', 'AWS'],
        links: ['https://github.com/asantiagoq/TAIS_EXAM_FRONT', 'https://taisprojectteam9.netlify.app/productos'],
    },
    {
        title: 'Aplicacion Movil sobre el centro Cultural de la UNSA',
        img: './project2.webp',
        about: 'Aplicacion donde se simula el sistema del centro cultural de la UNSA, con las pinturas que hay en cada seccion y una lista de las mismas',
        tools: ['java', 'androidStudio', 'XML'],
        links: ['https://github.com/asantiagoq/ProyectoFinal_NP_as/tree/master', '/app-release-unsigned.apk']
    },
    {
        title: 'Aventura en Arequipa',
        img: './project3.webp',
        about: 'Videojuego sobre la ciudad de Arequipa con puntos estrategicos para fomentar el turismo y el conocimiento de la ciudad',
        tools: ['HTML', 'python','TeX'],
        links: ['https://github.com/julio-1610/FinalProject-Game', '/juego_arequipa.exe'],
    },
    {
        title: 'Sistema del Posgrado de la UNSA',
        img: './project4.webp',
        about: 'Sistema para el posgrado de la UNSA con todas las operaciones que este conlleva (Escuela, Unidades, Docentes, Alumnos, etc)',
        tools: ['angular', 'materialUI', 'typescript', 'NestJS', 'PostgreSQL'],
        links: ['https://gitlab.com/pis2024-2-posgrado-unsa', 'https://posgrado-front-final.pages.dev/home']
    },
    {
        title: 'Videojuego Espacial',
        img: './project5.webp',
        about: 'Videojuego Espacial realizado en Unity con 5 niveles de dificultad y diferentes tecnicas de movimiento de IA',
        tools: ['HTML', 'CSharp', 'Unity'],
        links: ['https://github.com/julio-1610/IDSE-SpaceGame', 'https://github.com/julio-1610/IDSE-SpaceGame']
    },
    
];