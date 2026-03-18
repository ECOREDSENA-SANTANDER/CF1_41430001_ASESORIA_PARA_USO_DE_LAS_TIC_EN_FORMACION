<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Impacto de las tecnologías en los procesos formativos: ventajas, desafíos y nuevos roles educativos
    
    
    
    
    
    
    
    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 El tutor en ambientes virtuales
    
    
    
    
    
    
    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Recursividad del tutor docente y protagonismo del estudiante en la educación mediada por tecnologías







    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Ventajas y desventajas de los procesos tecnológicos actuales 








</template>

<script>
export default {
  name: 'Tema3',
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
