<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Educación mediada por TIC




    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Concepto de educación en entornos digitales












    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Transformaciones pedagógicas













    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Modelos de aprendizaje emergentes










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
