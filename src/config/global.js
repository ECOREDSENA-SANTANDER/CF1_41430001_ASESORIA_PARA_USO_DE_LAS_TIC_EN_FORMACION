export default {
  global: {
    Name: 'Aspectos pedagógicos y planeación formativa',
    Description:
      'Este componente analiza la transformación educativa derivada de la globalización y el desarrollo tecnológico, abordando la evolución hacia la sociedad de la información, del conocimiento y la sociedad de red. Examina los cambios en los roles tutor y estudiante, los modelos de aprendizaje emergentes y las implicaciones pedagógicas de la educación mediada por TIC en la formación académica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo y regulatorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Regulación en Zonas No Interconectadas (ZNI): El papel de la CREG y el IPSE',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Estándares técnicos: RETIE y normativas específicas para FNCER',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Viabilidad y sostenibilidad financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fuentes de financiación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Indicadores de rentabilidad social y económica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión social y apropiación comunitaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Modelos de gestión y sostenibilidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Esquemas de recaudo y fondo de reposición:',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Viabilidad ambiental y gestión de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Monitoreo, control y evaluación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje autónomo',
      significado:
        'Capacidad del estudiante para gestionar su propio proceso de aprendizaje, organizando su tiempo, recursos y estrategias de estudio.',
    },
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'Modelo de aprendizaje en el que los estudiantes construyen conocimiento mediante la interacción, el diálogo y el trabajo en equipo.',
    },
    {
      termino: 'Aprendizaje significativo',
      significado:
        'Proceso mediante el cual el estudiante relaciona nuevos conocimientos con saberes previos para comprenderlos y aplicarlos en contextos reales.',
    },
    {
      termino: 'Conectivismo',
      significado:
        'Enfoque pedagógico que plantea que el aprendizaje se genera a través de redes de información, personas y recursos digitales interconectados.',
    },
    {
      termino: 'Educación digital',
      significado:
        'Modalidad formativa que utiliza tecnologías y plataformas virtuales para desarrollar procesos de enseñanza y aprendizaje.',
    },
    {
      termino: 'Educación mediada por TIC',
      significado:
        'Proceso educativo que integra herramientas tecnológicas y recursos digitales para facilitar la enseñanza, la interacción y la construcción del conocimiento.',
    },
    {
      termino: 'Entornos virtuales de aprendizaje',
      significado:
        'Espacios digitales donde se organizan contenidos, actividades, evaluaciones e interacciones entre docentes y estudiantes.',
    },
    {
      termino: 'Globalización',
      significado:
        'Proceso de interconexión mundial que facilita el intercambio de información, conocimiento, cultura y tecnologías entre diferentes países y sociedades.',
    },
    {
      termino: 'Innovación educativa',
      significado:
        'Implementación de nuevas estrategias, metodologías o tecnologías que buscan mejorar la calidad y pertinencia de los procesos formativos.',
    },
    {
      termino: 'Mediación pedagógica',
      significado:
        'Proceso mediante el cual el tutor orienta, acompaña y facilita la construcción del aprendizaje del estudiante.',
    },
    {
      termino: 'Recursividad docente',
      significado:
        'Capacidad del tutor para utilizar de manera creativa los recursos disponibles y adaptarlos a las necesidades del proceso formativo.',
    },
    {
      termino: 'Sociedad de la información',
      significado:
        'Modelo social caracterizado por la producción, acceso y circulación masiva de datos a través de tecnologías digitales.',
    },
    {
      termino: 'Sociedad del conocimiento',
      significado:
        'Etapa en la que la información se transforma en conocimiento útil mediante análisis, reflexión, innovación y aplicación práctica.',
    },
    {
      termino: 'Sociedad de red',
      significado:
        'Forma de organización social basada en la interconexión de personas, instituciones y sistemas mediante redes digitales.',
    },
    {
      termino: 'Tutor docente',
      significado:
        'Profesional que orienta, acompaña y dinamiza los procesos de aprendizaje en entornos educativos mediados por tecnologías.',
    },
  ],
  referencias: [
    {
      referencia: 'Area, M. (2012). <em>Sociedad digital y educación</em>.',
      link: '',
    },
    {
      referencia: 'Castells, M. (2000). <em>La era de la información</em>.',
      link: '',
    },
    {
      referencia: 'Coll, C. (2008). <em>Aprender y enseñar con TIC</em>.',
      link: '',
    },
    {
      referencia: 'Siemens, G. (2005). <em>Conectivismo</em>.',
      link: '',
    },
    {
      referencia: 'UNESCO (2019). <em>Competencias TIC para docentes</em>.',
      link: '',
    },
    {
      referencia: 'Cabero, J. (2015). <em>Tecnología educativa</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto TIC',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
