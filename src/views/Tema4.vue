<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Diferencias entre la sociedad de la información, la sociedad del conocimiento y la sociedad red
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Las expresiones sociedad de la información, sociedad del conocimiento y sociedad red representan diferentes etapas en la evolución de las transformaciones sociales impulsadas por las Tecnologías de la Información y la Comunicación (TIC). Cada una de ellas describe una manera particular de comprender el papel de la información, el conocimiento y la conectividad en la vida social, económica y educativa.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-5.mb-4.my-4
              img(src='@/assets/curso/tema4/2.svg')
          p.mb-0 En primer lugar, la sociedad de la información se caracteriza por el acceso masivo a datos y contenidos digitales, facilitado por el desarrollo de tecnologías que permiten almacenar, procesar y difundir información a gran escala. En este contexto, el principal desafío consiste en localizar y gestionar adecuadamente la información disponible.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-5.mb-4.my-4
              img(src='@/assets/curso/tema4/3.svg')
          p.mb-0 Posteriormente surge la sociedad del conocimiento, en la cual el énfasis ya no se limita al acceso a la información, sino a la capacidad de interpretarla, analizarla y transformarla en conocimiento útil para resolver problemas, generar innovación y apoyar la toma de decisiones.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-5.mb-4.my-4
              img(src='@/assets/curso/tema4/4.svg')
          p.mb-0 Finalmente, la sociedad red destaca la importancia de la interconexión entre personas, organizaciones y sistemas mediante redes digitales que posibilitan la colaboración, el intercambio permanente de información y la construcción colectiva del conocimiento.
    
    p.mb-5(data-aos="fade-right") Esta evolución implica una transformación progresiva de los procesos formativos: se pasa de enseñar a buscar información, a formar para analizarla y aplicarla, y posteriormente a aprender de manera colaborativa en entornos digitales interconectados.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 8.
          | Comparación entre sociedad de la información, sociedad del conocimiento y sociedad red
        .tabla-a.tab6
          table
            thead
              tr
                th Criterio
                th Sociedad de la información
                th Sociedad del conocimiento
                th Sociedad red
            tbody
              tr
                td Enfoque
                td Acceso y circulación de información.
                td Transformación de la información en conocimiento útil.
                td Interconexión y colaboración mediante redes.
              tr
                td Valor principal
                td Disponibilidad de información.
                td Aplicación del conocimiento.
                td Interacción y construcción colectiva.
              tr
                td Rol de la tecnología
                td Almacenar y difundir información.
                td Facilitar aprendizaje e innovación.
                td Conectar personas y sistemas.
              tr
                td Rol del estudiante
                td Gestor de información.
                td Constructor de conocimiento.
                td Colaborador en redes de aprendizaje.
              tr
                td Rol del docente
                td Facilitador de información.
                td Orientador del pensamiento crítico.
                td Dinamizador de comunidades de aprendizaje.
    
    p.mb-5  En la transición hacia la sociedad del conocimiento y en red, la formación se centra en construir conocimiento a partir de la información. En este contexto, la encuesta constituye una técnica de recolección de información que permite identificar necesidades, percepciones y tendencias de una población. Además, las tecnologías digitales facilitan su aplicación, sistematización y análisis, así como la socialización colaborativa de los resultados.

    .titulo.mb-5(data-aos="fade-right")
      .titulo__icono
      .titulo__texto
        img(:src="require('@/assets/curso/tema3/sub.svg')")
        h3.mb-0 La encuesta como técnica de recolección de información

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 La encuesta es una técnica ampliamente utilizada en los procesos de investigación para identificar problemáticas, conocer percepciones y recopilar información de un grupo amplio de personas. Su principal ventaja consiste en la posibilidad de obtener datos de manera sistemática, organizada y en un tiempo relativamente corto, lo que facilita el análisis de diferentes situaciones o fenómenos.
    
    p.mb-5 Para garantizar la confiabilidad de los resultados, la encuesta debe aplicarse mediante un proceso estructurado, que incluya la formulación clara de las preguntas, la adecuada definición de la población o muestra y un análisis riguroso de la información obtenida. Cuando se diseña y se implementa de manera adecuada, esta técnica permite identificar tendencias, interpretar opiniones y comprender necesidades presentes en un contexto específico. 
    
    .titulo.mb-5(data-aos="fade-right")
      .titulo__icono
      .titulo__texto
        img(:src="require('@/assets/curso/tema3/sub.svg')")
        h3.mb-0 Rol del estudiante en la era digital 
    
    p.mb-5(data-aos="fade-right") El estudiante es gestor activo de su aprendizaje en la educación mediada por tecnologías.  
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Rol del estudiante 
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Rol estudiante
                th Características y acciones principales
            tbody
              tr
                td Autónomo
                td
                  ul.lista-ul.mb-0
                    li.d-flex 
                      i.lista-ul__vineta
                      | Administra su tiempo.
                    li 
                      i.lista-ul__vineta
                      | Planifica sus actividades.
                    li 
                      i.lista-ul__vineta
                      | Regula su ritmo de estudio.
              tr
                td Investigador
                td
                  ul.lista-ul.mb-0
                    li.d-flex 
                      i.lista-ul__vineta
                      | Busca y contrasta información.
                    li.d-flex 
                      i.lista-ul__vineta
                      | Valida múltiples fuentes.
              tr
                td Colaborador
                td
                  ul.lista-ul.mb-0
                    li.d-flex 
                      i.lista-ul__vineta
                      | Participa en comunidades virtuales.
                    li.d-flex 
                      i.lista-ul__vineta
                      | Interviene en foros y proyectos colectivos.
              tr
                td Creador de contenidos
                td
                  ul.lista-ul.mb-0
                    li.d-flex 
                      i.lista-ul__vineta
                      | Produce recursos digitales.
                    li.d-flex 
                      i.lista-ul__vineta
                      |  Genera proyectos de aprendizaje.
        
    .titulo.mb-5(data-aos="fade-right")
      .titulo__icono
      .titulo__texto
        img(:src="require('@/assets/curso/tema3/sub.svg')")
        h3.mb-0 Impacto en la formación y proyección del estudiante 
    
    p.mb-5(data-aos="fade-right") Estos roles fortalecen las competencias necesarias para aprender continuamente y desenvolverse en entornos académicos y laborales digitalizados. 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Tabla 10.
          | Impactos generados
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Impacto generado
                th Características y acciones principales
            tbody
              tr
                td Aprendizaje permanente
                td Fortalece competencias para aprender, actualizar sus conocimientos y adaptarse continuamente a nuevos contextos.
              tr
                td Inserción laboral en entornos digitales
                td Desarrolla habilidades tecnológicas, colaborativas y creativas que facilitan su desempeño en escenarios laborales digitalizados.
</template>

<script>
export default {
  name: 'Tema4',
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
