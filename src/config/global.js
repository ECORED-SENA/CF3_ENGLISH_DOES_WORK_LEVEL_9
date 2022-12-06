export default {
  global: {
    componenteFormativo:
      '<em>I was going to go on vacation, but the pandemic hit</em> <br> <span class= r--4>Yo iba a ir de vacaciones, pero la pandemia llegó</span>',
    descripcionCurso:
      'Este componente se enfocará en cómo contar historias del pasado, y para esto, se aprenderá no solo sobre la estructura de una historia, sino también sobre el uso de conectores que nos sirven para ordenar temporalmente la historia a la hora de contarla; también aprenderá sobre las expresiones <em><b>“was/were going to”</b></em> y <em><b>“was/were supposed to”</b></em>, que nos indican desde el tiempo pasado algo que se esperaba que se hiciera en el futuro. Por último, aprenderemos conceptos de pronunciación que nos ayudarán con nuestra habilidad del habla.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/l1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/l2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/l3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/l4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em> Expressions in the past</em> (Expresiones en pasado) ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          '<em> Expressions to indicate future in the past</em> (Expresiones para indicar futuro en tiempo pasado)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '<em> Telling stories about the past</em> (Contando historias del pasado)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<em> Introduction</em> (Inicio)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em> Climax</em> (Desarrollo)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<em> Denouement</em> (Conclusión) ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em> Pronunciation</em> (Pronunciación) ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              '<em> Unstressed vowels and vowel reduction</em> (vocales no acentuadas y reducción de vocales)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<em> Contractions</em> (contracciones)  ',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: '<em> Mixed sounds</em> (sonidos combinados)',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo:
              '<em> Rhythm in the phrase and intonation</em> (Ritmo en la frase y entonación)',
            hash: 't_4_4',
          },
        ],
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
      tema:
        '<em> Expressions to indicate future in the Past</em> (Expresiones para indicar futuro en tiempo pasado)',
      referencia:
        'BBC Learning English. (2017). <em> &#39Suppose&#39 and &#39supposed to&#39 - Learners&#39 Questions</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GebRh9T-zE0',
    },
    {
      tema:
        '<em> Telling stories about the past</em> (Contando historias del pasado)',
      referencia:
        'BBC. (s. f.). Unit 20: <em> Telling stories. Narrative tenses.</em> Learning English.',
      tipo: 'Artículo',
      link:
        'https://www.bbc.co.uk/learningenglish/english/course/intermediate/unit-20/session-1 ',
    },
    {
      tema:
        '<em> Telling stories about the past</em> (Contando historias del pasado)',
      referencia:
        'BBC Northern Ireland. (2020). <em> What is a story? – BBC Bitesize Foundation Language and Literacy</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UdB0myfmEic',
    },
    {
      tema:
        '<em> Unstressed vowels and vowel reduction</em> (Vocales no acentuadas y reducción de vocales)',
      referencia:
        'British Council. (2019). <em> Mini English lessons : Stress timed and weak forms</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SR79TZbKRUU',
    },
    {
      tema: '<em> Contractions</em> (Contracciones) ',
      referencia:
        'BBC Learning English. (2022). <em> Double Contractions - BBC Learning English</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/shorts/JX2BRPoKmGc',
    },
    {
      tema: '<em> Contractions</em> (Contracciones) ',
      referencia:
        'BBC Learning English. (2015). <em> Pronunciation - double contractions</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_KzhMB7h4eg',
    },
    {
      tema:
        '<em> Rhythm in the phrase and intonation</em> (Ritmo en la frase y entonación)',
      referencia:
        'BBC Learning English. (2017). <em> The Teachers&#39 Room: Top tips about intonation</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vkgMFZMBfqQ£',
    },
  ],
  glosario: [
    {
      termino: '<em>Connectors</em> / Conectores',
      significado:
        'son palabras que se encargan de enlazar y ordenar ideas, palabras u oraciones, para presentar de una forma organizada y coherente lo que se quiere decir.',
    },
    {
      termino: '<em>Narrative structure</em> / Estructura narrativa',
      significado:
        'es la forma y el orden en los que se presenta una historia a un espectador, un lector o un oyente.',
    },
    {
      termino: '<em>Pronunciation</em>  / Pronunciación',
      significado:
        'forma en la que se reproduce fonéticamente una palabra o todo un idioma.',
    },
    {
      termino: '<em>Time markers</em> / Marcadores temporales',
      significado:
        'palabras que hacen referencia al momento en el tiempo en el que ocurrió la acción o el evento del que se está hablando. Como, por ejemplo: <em> now, today, yesterday, last month, next week, five years ago</em>, etc.',
    },
  ],
  referencias: [
    {
      referencia:
        'BBC. (s. f.-a). <em>How to use structure for effect for KS3 English students</em>. BITESIZE. ',
      link: 'https://www.bbc.co.uk/bitesize/topics/zn8tkmn/articles/zhstrj6',
    },
    {
      referencia: 'BBC. (s. f.-b). <em>Narrative structures.</em> BITESIZE.',
      link: 'https://www.bbc.co.uk/bitesize/guides/zx4x39q/revision/2',
    },
    {
      referencia:
        'BBC. (s. f.-c). <em>Suppose and supposed to.</em> BBC World Service. ',
      link:
        'https://www.bbc.co.uk/worldservice/learningenglish/grammar/learnit/learnitv152.shtml',
    },
    {
      referencia:
        'British Council. (s. f.). <em>Phonics overview.</em> Primary Plus. ',
      link:
        'https://www.britishcouncil.hu/sites/default/files/primary_plus_2_-_phonics_overview.pdf',
    },
    {
      referencia:
        'Cambridge University Press. (s. f.). <em>Intonation.</em> Cambridge Dictionary.',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/intonation',
    },
    {
      referencia:
        'Huang, D. (2015). <em>Linking Words (Conjunctions and Connectors)</em>. Yale Center for Teaching and Learning.',
      link:
        'https://ctl.yale.edu/sites/default/files/files/GWC_LinkingWords-1.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández ',
        cargo: 'Experta Temática ',
        centro:
          'Centro para la industria de la Comunicación Gráfica - Regional Distrito Capital - CENIGRAF ',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez ',
        cargo: 'Diseñadora Instruccional ',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus ',
        cargo: 'Asesora Metodológica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González ',
        cargo: 'Corrector de Estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
