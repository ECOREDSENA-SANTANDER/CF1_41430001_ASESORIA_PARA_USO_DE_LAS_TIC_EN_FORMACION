<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") La transformación social impulsada por la tecnología ha configurado nuevos escenarios educativos donde la información circula en red, el conocimiento se construye colaborativamente y los roles pedagógicos evolucionan. Comprender este contexto permite orientar procesos formativos pertinentes, críticos e innovadores en la formación académica actual.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis organiza el componente en cuatro ideas principales: la evolución social hacia la sociedad de la información, del conocimiento y de red; la educación mediada por TIC, basada en entornos digitales y aprendizaje autónomo y colaborativo; las transformaciones pedagógicas, que impulsan modelos activos como el conectivismo y el aprendizaje basado en proyectos; y los nuevos roles educativos, donde el tutor actúa como mediador y el estudiante como protagonista del aprendizaje.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
