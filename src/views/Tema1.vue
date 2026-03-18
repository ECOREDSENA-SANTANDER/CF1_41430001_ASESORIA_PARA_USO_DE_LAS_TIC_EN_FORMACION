<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Emergencia de un nuevo tipo de sociedad
    
    p.mb-5 La emergencia de un nuevo tipo de sociedad alude a las transformaciones estructurales que ha experimentado la humanidad en las últimas décadas como resultado de la articulación entre globalización, desarrollo tecnológico y circulación masiva de información; con ello, se han redefinido las formas de comunicarse, producir conocimiento, trabajar y aprender, configurando escenarios sociales interconectados donde el acceso al saber y la interacción cultural ocurren en tiempo real. 
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este nuevo orden social se sustenta en dinámicas que posteriormente se profundizan: la influencia de la globalización en la cultura contemporánea, el papel de la tecnología como motor de cambio, la consolidación de la sociedad de la información, la evolución hacia la sociedad del conocimiento, la organización en estructuras de sociedad de red y sus implicaciones para la educación. Comprender esta emergencia permite contextualizar los cambios educativos actuales y orientar procesos formativos pertinentes frente a las demandas del mundo digital.
    
    .cajon.color-primario.p-lg-5.p-4.mb-0
      p.mb-0 Este nuevo orden social se sustenta en dinámicas que posteriormente se profundizan: la influencia de la globalización en la cultura contemporánea, el papel de la tecnología como motor de cambio, la consolidación de la sociedad de la información, la evolución hacia la sociedad del conocimiento, la organización en estructuras de sociedad de red y sus implicaciones para la educación. Comprender esta emergencia permite contextualizar los cambios educativos actuales y orientar procesos formativos pertinentes frente a las demandas del mundo digital.
    

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Globalización y cultura contemporánea

    p.mb-4 La globalización ha transformado profundamente las dinámicas sociales al reducir las barreras de tiempo y espacio, permitiendo que la información, los bienes culturales, las innovaciones tecnológicas y los modelos educativos circulen de manera inmediata entre países y continentes; llevando a la sociedad, no solo a responder a avances tecnológicos, sino también a procesos económicos, políticos y culturales que han impulsado la interdependencia mundial.
    
    p.mb-4 La globalización ha generado oportunidades sin precedentes para el acceso, la cooperación y la diversificación de las experiencias de aprendizaje. Hoy la formación ya no se limita al contexto local, por el contrario, se nutre de perspectivas, metodologías y recursos provenientes de distintos sistemas educativos que se pueden reflejar en:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12 
        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Programas virtuales internacionales
                p.mb-0 Instituciones de diferentes países ofertan cursos, diplomados y certificaciones a los que pueden acceder aprendices desde cualquier lugar del mundo. Esto amplía las oportunidades de cualificación, actualización profesional y movilidad académica sin necesidad de desplazamiento físico. Asimismo, favorece el intercambio intercultural y el reconocimiento de estándares formativos globales.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/2.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Redes académicas globales
                p.mb-0 Docentes, investigadores y aprendices participan en comunidades de conocimiento donde comparten experiencias, proyectos, investigaciones y buenas prácticas educativas. Estas redes permiten el trabajo colaborativo internacional, la construcción colectiva de saberes y la generación de soluciones a problemáticas comunes desde diversas realidades.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/3.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Recursos educativos abiertos (REA)
                p.mb-0 La globalización ha impulsado el acceso libre a contenidos formativos como libros digitales, cursos en línea, repositorios académicos, videos educativos y objetos virtuales de aprendizaje. Estos recursos, generalmente bajo licencias abiertas, facilitan la democratización del conocimiento y permiten que instructores y aprendices adapten materiales a sus propios contextos pedagógicos.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/4.png")

    .cajon.color-acento-contenido.p-lg-5.p-4.mb-5
      p.mb-0 Por tanto, la globalización ha ampliado el horizonte de la educación, haciendo posible que el aprendizaje sea más accesible, colaborativo e intercultural. Sin embargo, también plantea retos, como la necesidad de desarrollar pensamiento crítico para seleccionar información pertinente y la urgencia de reducir las brechas de acceso tecnológico que aún persisten en diversos territorios.

    .tarjeta.color-acento-botones.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-lg-5.col-md-4.col-8.mb-4.mb-md-0
          img.img-t.img-a(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
        .col-lg-7.col-md-8
          h3.mb-2 Globalización y su impacto en la educación y la cultura contemporánea
          .enca.mb-4
          p.mb-4 Se comparte el siguiente anexo como complemento a los conceptos abordados hasta el momento. Allí encontrará una síntesis organizada que le permite ampliar su comprensión y establecer relaciones más claras. 
          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Eu5rJpZSDwg" target="_blank")
            span Descargar
            i.fas.fa-file-download


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Tecnología y transformación Social

    p.mb-5 La tecnología actúa como un motor de cambio social porque influye directamente en la manera como las personas viven, trabajan, se comunican y aprenden. No se limita a la creación de herramientas o dispositivos; implica la generación de nuevas prácticas culturales, económicas y educativas que reconfiguran la vida cotidiana. 

    .row.mb-5(data-aos="fade-right")         
      .col-lg-12
        img(src='@/assets/curso/tema1/6.png' alt='AvatarTop')

    p.mb-5 A lo largo de la historia, cada avance tecnológico ha producido transformaciones significativas en la organización de la sociedad. Por ejemplo, la invención de la imprenta facilitó la masificación del conocimiento escrito; la radio y la televisión ampliaron el acceso a la información; e Internet consolidó la comunicación global en tiempo real.

    .cajon.color-primario.p-lg-5.p-4.mb-5
      p.mb-0 En la actualidad, la tecnología no solo optimiza y agiliza procesos, también reconfigura las formas de interacción, transformando las relaciones personales, laborales y académicas que ahora se desarrollan en entornos digitales mediante plataformas virtuales, redes sociales, aplicaciones de mensajería y espacios colaborativos que facilitan la comunicación en tiempo real y la construcción colectiva de conocimiento.

    p.mb-5 En el campo productivo, la tecnología ha permitido:
    
    .bg1.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-4
          ul.lista-ul.mb-0
            li.d-flex.mb-1
              i.fas.fa-globe
              p.mb-0 Automatizar procesos industriales.
            li.d-flex.mb-1
              i.fas.fa-globe
              p.mb-0 Digitalizar servicios.
            li.d-flex.mb-1
              i.fas.fa-globe
              p.mb-0 Crear nuevas profesiones vinculadas al entorno digital.
            li.d-flex.mb-1
              i.fas.fa-globe
              p.mb-0 Impulsar el teletrabajo y el trabajo en red.
        .col-lg-4
          img(src='@/assets/curso/tema1/7.png' alt='AvatarTop')
    
    p.mb-5 En el ámbito educativo, su impacto ha sido igualmente profundo, pues la tecnología ha transformado:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop')
          h4.text-center.mb-4 Las formas de enseñar
          p.mb-0 El docente ya no depende exclusivamente de la exposición oral. Puede apoyarse en simuladores, videos, plataformas virtuales, laboratorios digitales y recursos interactivos que enriquecen la experiencia formativa.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop')
          h4.text-center.mb-4 Las formas de aprender
          p.mb-0 El aprendizaje dejó de ser exclusivamente presencial. Hoy puede darse de manera autónoma, asincrónica, colaborativa y ubicua, es decir, en cualquier momento y lugar.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop')
          h4.text-center.mb-4 Las formas de producir conocimiento
          p.mb-0 Los estudiantes no solo consumen información; también crean contenidos digitales, participan en comunidades de aprendizaje y construyen saber de manera colectiva.

    .cajon.color-secundario.p-lg-5.p-4.mb-5
      h4.mb-3 Ejemplo de esta transformación
      p.mb-0 Se evidencia en la formación profesional: aprendices que antes requerían talleres físicos para practicar, hoy pueden entrenarse previamente en simuladores virtuales que reducen riesgos y optimizan recursos.
    
    p.mb-5 No obstante, esta transformación también plantea desafíos sociales importantes, como la brecha digital, la dependencia tecnológica y la necesidad de desarrollar competencias críticas para el uso responsable de la información.

    .row.fondo2.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-down")
      .col-lg-12
        .tarjeta--gris.ul.p-4.mb-0(data-aos="fade-right")
          LineaTiempoC.color-acento-botones
            .row.justify-content-center.align-items-center(titulo="Siglo XV")
              .col-lg-5.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema1/11.svg')
              .col-lg-5.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
                h4.mb-4 Invención de la imprenta
                p.mb-4 #[b Hito tecnológico:] reproducción masiva del conocimiento escrito.
                p.mb-0 #[b Impacto educativo:]
                p.mb-0 • Democratización progresiva del acceso a textos.
                p.mb-0 • Estandarización de contenidos académicos.
                p.mb-4 • Consolidación del libro como recurso central del aprendizaje.
                p.mb-0 #[b Transformación pedagógica:]
                p.mb-0 • Paso de tradición oral a cultura escrita.
                p.mb-0 • Nacimiento del currículo estructurado.
            .row.justify-content-center.align-items-center(titulo="Siglo XX")
              .col-lg-5.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema1/12.svg')
              .col-lg-5.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
                h4.mb-4 Radio y televisión educativa 
                p.mb-4 #[b Hito tecnológico:] medios de comunicación masiva.
                p.mb-0 #[b Impacto educativo:]
                p.mb-0 • Expansión de la educación a zonas rurales y poblaciones dispersas.
                p.mb-0 • Integración de recursos audiovisuales (imagen y sonido).
                p.mb-4 • Educación a distancia en formato broadcast.
                p.mb-0 #[b Transformación pedagógica:]
                p.mb-0 • Modelo transmisivo ampliado.
                p.mb-0 • Incorporación de apoyo audiovisual en la enseñanza.
            .row.justify-content-center.align-items-center(titulo="Finales del siglo XX")
              .col-lg-5.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema1/13.svg')
              .col-lg-5.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
                h4.mb-4 Internet y comunicación global 
                p.mb-4 #[b Hito tecnológico:] conectividad digital y red global.
                p.mb-0 #[b Impacto educativo:]
                p.mb-0 • Acceso inmediato a información mundial.
                p.mb-0 • Comunicación síncrona y asíncrona.
                p.mb-4 • Surgimiento de comunidades virtuales de aprendizaje.
                p.mb-0 #[b Transformación pedagógica:]
                p.mb-0 • Inicio del aprendizaje colaborativo en red.
                p.mb-0 • Emergencia del estudiante como buscador activo de información.
            .row.justify-content-center.align-items-center(titulo="Siglo XXI – inicio")
              .col-lg-5.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema1/14.svg')
              .col-lg-5.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
                h4.mb-4 Plataformas virtuales y recursos interactivos 
                p.mb-4 #[b Hito tecnológico:] LMS, entornos virtuales de aprendizaje y contenidos digitales.
                p.mb-0 #[b Impacto educativo:]
                p.mb-0 • Virtualización de cursos completos.
                p.mb-0 • Incorporación de multimedia, simuladores y actividades interactivas.
                p.mb-4 • Flexibilización de tiempos y espacios formativos.
                p.mb-0 #[b Transformación pedagógica:]
                p.mb-0 • Rol del docente como mediador digital.
                p.mb-0 • Mayor autonomía del estudiante.
                p.mb-0 • Aprendizaje ubicuo.
            .row.justify-content-center.align-items-center(titulo="Siglo XXI – consolidación")
              .col-lg-5.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema1/15.svg')
              .col-lg-5.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
                h4.mb-4 Automatización, digitalización y teletrabajo 
                p.mb-4 #[b Hito tecnológico:] inteligencia artificial, analítica de datos y simulación digital.
                p.mb-0 #[b Impacto educativo:]
                p.mb-0 • Nuevas competencias digitales y profesionales.
                p.mb-0 • Formación técnica en entornos simulados.
                p.mb-4 • Integración de educación y mercado laboral digital.
                p.mb-0 #[b Transformación pedagógica:]
                p.mb-0 • Educación basada en competencias.
                p.mb-0 • Aprendizaje experiencial mediado por tecnología.
            .row.justify-content-center.align-items-center(titulo="Desafíos contemporáneos")
              .col-lg-5.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema1/16.svg')
              .col-lg-5.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
                p.mb-4 Brecha digital y desigualdad tecnológica.
                p.mb-4 Desarrollo de competencias críticas y pensamiento ético digital.
                p.mb-0 Educación para el uso responsable de la información.
            

    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Tecnología y transformación Social
    
    p.mb-4 La sociedad de la información se define por la producción, circulación y acceso masivo a datos a través de medios digitales. La información se convierte en un recurso estratégico para el desarrollo social, económico, científico y educativo, así mismo, su disponibilidad inmediata transforma la manera en que las personas aprenden, trabajan y toman decisiones.
    p.mb-4 Este modelo social surge con la expansión de Internet, las tecnologías de la comunicación y los sistemas de almacenamiento digital, que permiten consultar en segundos volúmenes de información que antes requerían largos procesos de búsqueda en fuentes físicas.
    
    .cajon.color-primario.p-lg-5.p-4.mb-5
      p.mb-0 La sociedad de la información plantea el reto de formar sujetos críticos, capaces no solo de consumir datos, sino de analizarlos, validarlos y transformarlos en conocimiento significativo.
    
    p.mb-5 Esto implica enseñar a:

    AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.p-0(titulo="Buscar información confiable")
        .col-lg-11.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Los estudiantes deben desarrollar habilidades para identificar fuentes académicas, científicas e institucionales, diferenciándolas de contenidos sin respaldo. Esto incluye reconocer autoría, fecha de publicación, intencionalidad y evidencia utilizada.
            .col-lg-6.col-md-10.col-10
              img(src='@/assets/curso/tema1/17.png', alt='')
      .row.justify-content-center.align-items-center.p-0(titulo="Filtrar contenidos")
        .col-lg-11.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Ante la sobreoferta informativa, es necesario aprender a seleccionar lo pertinente según objetivos de aprendizaje. Filtrar supone jerarquizar, contrastar y organizar la información relevante, descartando aquella que no aporta valor formativo.
            .col-lg-6.col-md-10.col-10
              img(src='@/assets/curso/tema1/17.png', alt='')
      .row.justify-content-center.align-items-center.p-0(titulo="Evitar la infoxicación")
        .col-lg-11.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 La “infoxicación” hace referencia a la saturación de información que dificulta la comprensión y la toma de decisiones. El exceso de datos, notificaciones y estímulos digitales puede generar dispersión cognitiva, aprendizaje superficial y desinformación.
            .col-lg-6.col-md-10.col-10
              img(src='@/assets/curso/tema1/17.png', alt='')
    
    p.mb-5 Por ello, la formación en la sociedad de la información debe incluir competencias informacionales y digitales, tales como:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .bg3.p-4
          p.mb-0.text-center Lectura crítica de contenidos digitales.
      .col-lg-4
        .bg3.p-4
          p.mb-0.text-center Evaluación de la veracidad de las fuentes.
      .col-lg-4
        .bg3.p-4
          p.mb-0.text-center Uso ético de la información.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .bg3.p-4
          p.mb-0.text-center Gestión organizada de datos.
      .col-lg-6
        .bg3.p-4
          p.mb-0.text-center Producción responsable de contenidos.

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este proceso de transformación educativa, el rol del tutor evoluciona significativamente, pasando de ser el principal transmisor de información a desempeñarse como mediador pedagógico, orientador estratégico y curador crítico de contenidos, acompañando a los aprendices en la construcción autónoma, reflexiva y pertinente del conocimiento.
        br
        br
        p.mb-0 La sociedad de la información no se define solo por el acceso a datos, sino por la capacidad de transformarlos en saber útil. La educación, por tanto, asume el desafío de formar ciudadanos informados, críticos y competentes frente al ecosistema digital contemporáneo.


    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Sociedad del conocimiento
    
    p.mb-4 La sociedad del conocimiento representa una evolución frente a la sociedad de la información. Mientras esta última se centra en el acceso y circulación de datos, la sociedad del conocimiento pone el énfasis en la capacidad de las personas y las organizaciones para interpretar, aplicar y transformar la información en soluciones útiles para la vida social, económica, científica y educativa.
    p.mb-4 Aquí el valor no está en la información sino en su transformación en soluciones, lo cual implica procesos cognitivos superiores como:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3
        .bg4.p-4.h-100.cen
          h4.mb-0.text-center El análisis
      .col-lg-3
        .bg4.p-4.h-100.cen
          h4.mb-0.text-center La reflexión crítica
      .col-lg-3
        .bg4.p-4.h-100.cen
          h4.mb-0.text-center La innovación
      .col-lg-3
        .bg4.p-4.h-100.cen
          h4.mb-0.text-center La toma de decisiones fundamentadas

    p.mb-5 En el ámbito educativo se manifiesta en varios aspectos:

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Transformación de la información en conocimiento aplicado en el ámbito educativo
        .tabla-a.tab1
          table
            thead
              tr
                th.text-center Dimensión
                th Descripción conceptual
                th Manifestación en el campo educativo
            tbody
              tr
                td #[b Enfoque central]
                td El valor no reside únicamente en la información disponible, sino en su transformación en soluciones pertinentes y contextualizadas, mediante procesos cognitivos superiores como análisis, reflexión crítica, innovación y toma de decisiones fundamentadas.
                td Orientación del aprendizaje hacia la aplicación práctica del conocimiento para resolver problemas reales.
              tr
                td #[b Aprendizaje significativo]
                td Proceso mediante el cual el estudiante integra nueva información con saberes previos, otorgándole sentido y funcionalidad.
                td Comprende los contenidos, los relaciona con su contexto y los aplica en situaciones reales, superando la memorización mecánica.
              tr
                td #[b Producción de conocimiento]
                td Desarrollo de capacidades investigativas y creativas para generar nuevos aportes.
                td Elaboración de proyectos, prototipos, investigaciones formativas y propuestas sociales o pedagógicas.
              tr
                td #[b Pensamiento crítico]
                td Capacidad de analizar, cuestionar y argumentar de manera fundamentada frente a la información disponible.
                td Contraste de fuentes, construcción de posturas propias y toma de decisiones informadas.
              tr
                td #[b Innovación y creatividad]
                td Transformación del conocimiento en propuestas originales y soluciones pertinentes.
                td Diseño de soluciones tecnológicas, sociales o educativas con impacto en el entorno.
              tr
                td #[b Trabajo colaborativo]
                td Construcción colectiva del saber mediante la interacción y el intercambio de perspectivas.
                td Participación en comunidades de aprendizaje, redes académicas y entornos virtuales colaborativos.
    
    


    separador
    #t_1_5.titulo-segundo.mb-5
      h2 1.5 Sociedad de red

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-5.pe-lg-0.col-md-7.col-10.mb-lg-0.mb-4
        img.d-none.d-lg-block(src='@/assets/curso/tema1/19.png', alt='')
      .col-lg-7.ps-lg-0.mb-0
        .bg5.p-4.p-lg-5
          p.mb-3 Este concepto explica que la sociedad contemporánea ya no se estructura únicamente en instituciones jerárquicas tradicionales, sino en redes de nodos interconectados. Los nodos pueden ser personas, instituciones, plataformas digitales, comunidades o sistemas de información que se relacionan dinámicamente mediante flujos constantes de datos, conocimiento y comunicación.
          p.mb-0 La interconexión digital ha permitido que las relaciones sociales, laborales y educativas trasciendan las barreras geográficas y temporales, configurando una organización más flexible, descentralizada y colaborativa.

    p.mb-5 En este modelo:

    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/20.svg')
          p.mb-0.text-white La información circula de manera multidireccional.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg7.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/21.svg')
          p.mb-0 El poder y el conocimiento no se concentran, sino que se distribuyen.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-0
        .bg8.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/22.svg')
          p.mb-0.text-white La participación activa de los sujetos es fundamental.


    separador
    #t_1_6.titulo-segundo.mb-5
      h2 1.6 Implicaciones para la educación
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/23.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el marco de la integración entre tecnologías y cultura digital, la educación ha transformado sus prácticas pedagógicas, pasando de un modelo centrado en la transmisión de contenidos a uno orientado al desarrollo de competencias, el aprendizaje activo y la construcción colaborativa del conocimiento. El tutor asume un rol de mediador y diseñador de experiencias formativas, mientras el estudiante se convierte en protagonista de su propio proceso de aprendizaje. 
            br 
            br
            p.mb-0 De igual manera, los entornos educativos se amplían hacia modalidades virtuales e híbridas, favoreciendo la flexibilidad, la interacción en red y el acceso permanente a la información. Por tal razón, la evaluación se orienta a procesos formativos y evidencias de desempeño que demuestren análisis, aplicación e innovación, respondiendo a las demandas de la sociedad del conocimiento.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
