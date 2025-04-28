export default {
  global: {
    Name: 'Gestión y condiciones de devolución de mercancías y objetos',
    Description:
      'Las organizaciones comerciales deben tener políticas claras de devolución de productos, basadas en acuerdos comerciales y procedimientos de reclamaciones, es esencial capacitar al personal para asesorar correctamente a los clientes, lo que fortalece la confianza y demuestra el compromiso con la calidad y el servicio, esto favorece la fidelización y asegura la confiabilidad de la empresa.',
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
        titulo: 'Devoluciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Condiciones de devolución',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Especificaciones de los productos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Políticas de devolución',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acuerdos comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Acuerdos comerciales con clientes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Acuerdos comerciales con proveedores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Procedimiento',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Documentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informes sobre devoluciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Atención a clientes',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_12150019_DU.pdf',
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
      tema: 'Manual de devoluciones y retiro de mercancía.',
      referencia:
        'Comercial mexicana. (2015). Manual de devoluciones y retiro de mercancía.',
      tipo: 'Manual',
      link: 'http://www.provecomer.com.mx/prvd/manual_devol.pdf',
    },
    {
      tema:
        'Estructuración del proceso de devoluciones para la recuperación de su valor económico en la empresa Rta Design Planta Yumbo.',
      referencia:
        'Bastidas Erazo, y. m. (2012). Estructuración del proceso de devoluciones para la recuperación de su valor económico en la empresa rta design-planta yumbo (by universidad autónoma de occidente).',
      tipo: 'PDF',
      link: 'https://red.uao.edu.co/bitstream/10614/3040/1/TID00964.pdf',
    },
    {
      tema:
        'Gestión de la calidad. Satisfacción del cliente. Directrices para el tratamiento de las quejas en las organizaciones.',
      referencia:
        'Gestión de la calidad. Satisfacción del cliente. Directrices para el tratamiento de las quejas en las organizaciones. (2004).',
      tipo: 'PDF',
      link:
        'https://ioc.xtec.cat/materials/FP/Recursos/fp_adi_m08_/web/fp_adi_m08_htmlindex/WebContent/u3/media/iso_10002_2004.pdf',
    },
    {
      tema:
        'Manual para el manejo de los acuerdos comerciales en procesos de contratación.',
      referencia:
        'Colombia Compra Eficiente. (n.d.). Manual para el manejo de los Acuerdos Comerciales en Procesos de Contratación.',
      tipo: 'PDF',
      link:
        'https://operaciones.colombiacompra.gov.co/sites/default/files/manuales/cce_manual_acuerdos_comerciales_web.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aclaración',
      significado:
        'Proceso de resolver dudas e inquietudes durante la negociación para evitar malentendidos futuros.',
    },
    {
      termino: 'Acuerdos comerciales',
      significado:
        'Contratos entre dos o más partes que establecen los términos y condiciones para realizar intercambios de bienes o servicios, buscando beneficios mutuos.',
    },
    {
      termino: 'Atención a clientes',
      significado:
        'Servicio proporcionado por una empresa para asistir, resolver dudas o problemas de los clientes, garantizando una experiencia de compra satisfactoria y construyendo relaciones positivas.',
    },
    {
      termino: 'Atención',
      significado:
        'Proceso de interactuar con los clientes para resolver sus dudas, problemas o necesidades, garantizando una experiencia positiva.',
    },
    {
      termino: 'Capacitación',
      significado:
        'Proceso continuo de formación del personal para asegurar que esté preparado para brindar una atención adecuada y resolver eficazmente quejas y reclamos.',
    },
    {
      termino: 'Condiciones',
      significado:
        'Términos establecidos entre las partes, como precio, plazo de entrega, y forma de pago, que deben quedar claros en el acuerdo.',
    },
    {
      termino: 'Devoluciones',
      significado:
        'Proceso mediante el cual un cliente regresa un producto adquirido, generalmente debido a insatisfacción o error en la compra.',
    },
    {
      termino: 'Documentación',
      significado:
        'Conjunto de papeles o archivos que contienen información relevante sobre transacciones comerciales, devoluciones, acuerdos o productos, y que respaldan procesos legales o administrativos.',
    },
    {
      termino: 'Entrega',
      significado:
        'Proceso de entrega de productos, que puede ser en una única ocasión o en varias entregas parciales, según lo acordado previamente.',
    },
    {
      termino: 'Lugar',
      significado:
        'Ubicación donde los productos deben ser entregados, especificada en el acuerdo comercial.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'Pasos definidos que se deben seguir en la negociación y recepción de productos, incluyendo devoluciones si es necesario.',
    },
    {
      termino: 'Quejas',
      significado:
        'Manifestación de insatisfacción del cliente debido a factores ajenos al producto, como el trato recibido o la actitud del personal.',
    },
    {
      termino: 'Reclamos',
      significado:
        'Inconformidades del cliente respecto al producto o servicio adquirido, que requieren una respuesta inmediata y solución por parte de la empresa.',
    },
    {
      termino: 'Revisión',
      significado:
        'Evaluación detallada de las cotizaciones recibidas de los proveedores para garantizar que se cumplan los requisitos.',
    },
    {
      termino: 'Satisfacción',
      significado:
        'Estado en el que el cliente se siente conforme con los productos, servicios y atención recibidos por la empresa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Balli Morales, B. (s.f.). La logística Reversa o Inversa, Aporte al control de devoluciones y residuos en la gestión de la cadena de abastecimiento. (Legiscomex, Ed.) Bogotá.',
      link:
        'http://www.legiscomex.com/BancoMedios/Archivos/la%20logistica%20reversa%20o%20inversa%20basilio%20balli.pdf',
    },
    {
      referencia: 'Forero, C. (2010). Las devoluciones: La logística inversa.',
      link: 'http://devolucioneslogisticainversa.blogspot.com.co/',
    },
    {
      referencia: 'González, H. (2010). Manejo devoluciones.',
      link:
        'http://hildamarinagonzalez2010.blogspot.com.co/2010/09/causas-de-devoluciones.html',
    },
    {
      referencia: 'CreceNegocios. (2013). La política de devoluciones.',
      link: 'http://www.crecenegocios.com/la-politica-de-devoluciones/',
    },
    {
      referencia:
        'Trejos, A. (2009). Instrumentos para la evaluación del impacto de acuerdos comerciales internacionales: aplicación para países pequeños en América latina. (Cepal, Ed.) México.',
      link:
        'http://repositorio.cepal.org/bitstream/handle/11362/4895/S2009441_es.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'K_Admin. (2021, 25 enero). Clasificación de proveedores ¿De qué tipo existen? Klötx.',
      link:
        'https://www.klotx.com/clasificacion-de-proveedores-de-que-tipo-existen/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ingrid Criollo García',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
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
