<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Aplicaciones en la formación profesional

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-5.pe-lg-0.col-md-7.col-10.mb-lg-0.mb-4
        img.d-none.d-lg-block(src='@/assets/curso/tema5/1.png', alt='')
      .col-lg-7.ps-lg-0.mb-0
        .bg511.p-4.p-lg-5
          p.mb-3 Las Tecnologías de la Información y la Comunicación (TIC) permiten mejorar la formación profesional al incorporar herramientas digitales que facilitan aprender, practicar y evaluar conocimientos de manera más dinámica.
          p.mb-0 Gracias a estas tecnologías, los estudiantes pueden simular situaciones reales de trabajo, acceder a contenidos desde cualquier lugar, interactuar con otros compañeros y recibir retroalimentación inmediata sobre su aprendizaje; esto permite desarrollar habilidades técnicas y digitales necesarias para el mundo laboral actual.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Aplicaciones de las TIC en la formación
        .tabla-a.tab3
          table
            thead
              tr
                th.text-center Herramienta TIC
                th ¿Para qué se utiliza?
                th Ejemplo en formación
            tbody
              tr
                td Simuladores
                td Practicar procesos o uso de equipos en un entorno virtual sin riesgos.
                td Simular el manejo de una máquina o un proceso industrial.
              tr
                td Realidad aumentada
                td Mostrar información digital sobre objetos reales para entender mejor su funcionamiento.
                td Ver las partes de un motor o equipo con información adicional en pantalla.
              tr
                td Ambientes virtuales
                td Desarrollar clases, actividades y trabajos en plataformas digitales.
                td Usar un aula virtual para entregar tareas, participar en foros o revisar materiales.
              tr
                td Evaluación digital
                td Evaluar el aprendizaje mediante herramientas tecnológicas.
                td Presentar cuestionarios en línea o entregar un portafolio digital.

    .cajon.color-acento-contenido.p-lg-5.p-4.mb-0(data-aos="fade-left")
      p.mb-0 Las TIC permiten que la formación sea más práctica, flexible e interactiva, ya que los estudiantes pueden aprender haciendo, colaborar con otros y utilizar herramientas digitales similares a las que encontrarán en su futuro trabajo.


</template>

<script>
export default {
  name: 'Tema5',
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
