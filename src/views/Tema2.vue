<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Educación mediada por TIC

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La educación mediada por Tecnologías de la Información y la Comunicación (TIC) corresponde a un modelo formativo en el cual se integran herramientas digitales, plataformas tecnológicas y recursos interactivos para apoyar y fortalecer los procesos de enseñanza y aprendizaje. Este enfoque no se limita únicamente al uso de dispositivos o aplicaciones, sino que implica repensar la manera en que se enseña y se aprende, incorporando nuevas metodologías, estrategias didácticas y formas de interacción entre tutor, estudiante y conocimiento.
        br
        br
        p.mb-0 La tecnología cumple un papel de mediadora del aprendizaje, facilitando el acceso a la información, la comunicación entre los participantes del proceso educativo y la construcción colectiva del conocimiento.
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Aspectos principales de la educación mediada por TIC

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-8
        .tabla-a.tab2
          table
            thead
              tr
                th Aspecto
                th Descripción
            tbody
              tr
                td Ampliación de cobertura
                td Permite que más personas accedan a procesos formativos sin limitaciones geográficas.
              tr
                td Flexibilidad educativa
                td Los estudiantes pueden organizar su tiempo y avanzar en su aprendizaje de acuerdo con su ritmo.
              tr
                td Diversidad de recursos
                td Se integran videos, simulaciones, plataformas virtuales, foros, pódcast y materiales interactivos.
              tr
                td Aprendizaje autónomo
                td Promueve la responsabilidad del estudiante sobre su propio proceso formativo.
              tr
                td Construcción colaborativa del conocimiento
                td Facilita el intercambio de ideas y el trabajo en equipo en entornos digitales.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/2.png', alt='')

    .cajon.color-primario.p-lg-5.p-4.mb-0(data-aos="fade-right")
      p.mb-0 De esta manera, la educación mediada por TIC responde a las exigencias de la sociedad digital, donde el acceso a la información, la comunicación virtual y la innovación tecnológica son elementos fundamentales para el desarrollo académico y profesional.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Concepto de educación en entornos digitales

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-5.pe-lg-0.col-md-7.col-10.mb-lg-0.mb-4
        img.d-none.d-lg-block(src='@/assets/curso/tema2/3.png', alt='')
      .col-lg-7.ps-lg-0.mb-0
        .bg5.p-4.p-lg-5
          p.mb-3 La educación en entornos digitales se refiere al proceso de enseñanza y aprendizaje que se desarrolla mediante plataformas tecnológicas, recursos multimedia y espacios de interacción virtual, que permiten organizar el proceso formativo sin depender exclusivamente del aula física, facilitando así la gestión de contenidos, la realización de actividades, la evaluación del aprendizaje y la comunicación entre tutores y estudiantes.
          p.mb-0 Es así como, la tecnología crea nuevos espacios de aprendizaje dinámicos e interactivos, donde el estudiante puede acceder a materiales, participar en actividades y recibir acompañamiento académico desde diferentes lugares y dispositivos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Principales componentes de los entornos digitales de aprendizaje
        .tabla-a.tab3
          table
            thead
              tr
                th Componente
                th Descripción
                th Ejemplo
            tbody
              tr
                td LMS (Learning Management System)
                td Plataforma que permite organizar cursos, gestionar contenidos, actividades y evaluaciones.
                td Moodle, Canvas, Blackboard.
              tr
                td Videoconferencias
                td Espacios de encuentro sincrónico que permiten clases en tiempo real, asesorías o sustentaciones.
                td Zoom, Teams, Google Meet.
              tr
                td Objetos Virtuales de Aprendizaje (OVA)
                td Recursos digitales diseñados con intención pedagógica que integran texto, imágenes, audio, video o simulaciones.
                td Simuladores, infografías interactivas, módulos multimedia.
        
    .cajon.color-acento-botones.p-lg-5.p-4.mb-0(data-aos="fade-left")
      p.mb-0 Estos entornos no solo trasladan la educación al plano digital, sino que crean nuevas ecologías de aprendizaje más abiertas, interactivas y centradas en la experiencia del estudiante.


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Transformaciones pedagógicas

    p.mb-4(data-aos="fade-right") La incorporación de las TIC en la educación ha generado cambios significativos en la forma de enseñar y aprender, modificando los espacios educativos, los tiempos de estudio y los roles de docentes y estudiantes.
    
    p.mb-4(data-aos="fade-left") Estas transformaciones han impulsado modelos de aprendizaje más participativos, flexibles y orientados al desarrollo de competencias.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Cambios pedagógicos en la educación mediada por TIC
        .tabla-a.tab4
          table
            thead
              tr
                th Modelo tradicional
                th Transformación con TIC
                th Explicación
            tbody
              tr
                td Aula física cerrada.
                td Campus virtual.
                td El aprendizaje se desarrolla en plataformas digitales accesibles desde cualquier lugar.
              tr
                td Horarios rígidos.
                td Aprendizaje flexible.
                td El estudiante organiza su tiempo y avanza según su ritmo de aprendizaje.
              tr
                td Clase magistral centrada en el docente.
                td Aprendizaje activo.
                td El estudiante investiga, participa, debate y aplica conocimientos.
              tr
                td Evaluación memorística.
                td Evaluación por competencias.
                td Se valoran procesos, proyectos, análisis y resolución de problemas.

    p.mb-5(data-aos="fade-left") Estas transformaciones exigen:

    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/4.svg')
          p.mb-0.text-white Nuevas competencias digitales docentes.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg7.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/5.svg')
          p.mb-0 Rediseño de los currículos y estrategias didácticas.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-0
        .bg8.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/6.svg')
          p.mb-0.text-white Integración de metodologías activas de aprendizaje.


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Modelos de aprendizaje emergentes
    
    p.mb-5(data-aos="fade-left") El desarrollo de la educación mediada por TIC ha impulsado la aparición de nuevos modelos pedagógicos, los cuales responden a las dinámicas de la sociedad del conocimiento y la sociedad de red. Con estos modelos se promueve la participación activa del estudiante, el trabajo colaborativo y la aplicación del conocimiento en contextos reales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Principales modelos de aprendizaje en entornos digitales
        .tabla-a.tab3
          table
            thead
              tr
                th Modelo
                th Características principales
                th Aplicación en entornos digitales
            tbody
              tr
                td Conectivismo.
                td El aprendizaje se genera a través de redes de información, personas y recursos digitales.
                td Uso de comunidades virtuales, redes académicas y repositorios de conocimiento.
              tr
                td Aprendizaje colaborativo.
                td El conocimiento se construye mediante la interacción, el diálogo y el trabajo en equipo.
                td Foros, proyectos grupales, wikis colaborativas.
              tr
                td Aprendizaje basado en proyectos (ABP).
                td Los estudiantes desarrollan proyectos que integran teoría, investigación y solución de problemas.
                td Desarrollo de prototipos, estudios de caso o proyectos aplicados.

    .cajon.color-primario.p-lg-5.p-4.mb-0(data-aos="fade-left")
      p.mb-4 Los modelos representan el tránsito de una educación centrada en la transmisión de contenidos hacia una educación orientada a la construcción activa del conocimiento, en la que el estudiante participa, investiga, crea y aplica lo aprendido.
      p.mb-0 La educación mediada por TIC no solo introduce tecnología en el aula, sino que transforma profundamente la pedagogía, promoviendo aprendizaje autónomo, colaboración, innovación y formación pertinente para los retos de la sociedad digital.


</template>

<script>
export default {
  name: 'Tema2',
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
