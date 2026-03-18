<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El presente componente formativo tiene como propósito fundamentar pedagógicamente la orientación de procesos educativos mediados por Tecnologías de la Información y la Comunicación (TIC), en coherencia con las transformaciones sociales, culturales y tecnológicas propias de la sociedad contemporánea.
        br
        br
        p.mb-0 La consolidación de la sociedad de la información, la evolución hacia la sociedad del conocimiento y la configuración de estructuras en red han redefinido las dinámicas de enseñanza y aprendizaje, exigiendo nuevas competencias en docentes y estudiantes. En este contexto, la formación ya no se limita a la transmisión de contenidos, sino que implica mediación pedagógica, pensamiento crítico, gestión del conocimiento y uso estratégico de herramientas digitales.
    
    p.mb-4 A lo largo del componente se analizarán los fundamentos sociohistóricos de las TIC, las transformaciones pedagógicas derivadas de su incorporación y la reconfiguración de los roles formativos en entornos digitales. Asimismo, se reflexiona sobre las ventajas, desafíos y aplicaciones prácticas de la educación mediada por tecnologías en la formación académica.
    
    p.mb-5 De esta manera, se contribuye al fortalecimiento de competencias para diseñar, orientar y acompañar procesos formativos pertinentes, innovadores y alineados con las demandas del ecosistema educativo digital actual.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
