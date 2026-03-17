<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sociedad digital y educación mediada por TIC',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con la sociedad digital, la educación mediada por TIC y la transformación de los roles del docente y el estudiante.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza principalmente a la sociedad de la información?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La transformación del conocimiento en innovación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El acceso y circulación masiva de datos mediante medios digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La organización social basada únicamente en instituciones jerárquicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ausencia de tecnología en la educación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que reconoce que la sociedad de la información se centra en la producción y circulación de datos digitales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el apartado sobre sociedad de la información y su relación con el acceso masivo a datos.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento distingue a la sociedad del conocimiento frente a la sociedad de la información?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La acumulación de datos sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El uso exclusivo de redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La capacidad de transformar información en soluciones útiles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La desaparición de la educación formal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la sociedad de conocimiento y de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el concepto de sociedad del conocimiento y su enfoque en la solución de problemas..',
        },
        {
          id: 3,
          texto: '¿Qué implica la educación mediada por TIC?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Rediseñar metodologías, estrategias didácticas e interacción pedagógica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo usar computadores en clase.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el rol del docente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente la presencialidad sin cambios pedagógicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la educación mediada por TIC.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados en cómo la tecnología actúa como mediadora del proceso formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una transformación pedagógica clave en entornos digitales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Del aprendizaje activo a la memorización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Del estudiante protagonista al estudiante pasivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Del aula cerrada al campus virtual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'De la innovación al modelo transmisivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados en cómo el espacio educativo se amplía hacia plataformas virtuales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las transformaciones pedagógicas generadas por la mediación TIC.',
        },
        {
          id: 5,
          texto:
            'Según el conectivismo, el aprendizaje ocurre principalmente a través de:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Redes de información, nodos y comunidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La repetición de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La enseñanza magistral tradicional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La memorización individual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con que el conocimiento está distribuido en redes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el modelo emergente del conectivismo dentro del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué caracteriza al aprendizaje colaborativo en entornos virtuales?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Trabajo individual sin interacción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Construcción conjunta mediante diálogo y corresponsabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluación únicamente memorística.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dependencia total del tutor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el aprendizaje colaborativo se fundamenta en la construcción colectiva del saber.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el de modelos pedagógicos emergentes',
        },
        {
          id: 7,
          texto: '¿Cuál es el rol del tutor en ambientes virtuales?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser únicamente transmisor de información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar actividades colaborativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acompañar, orientar y dinamizar el aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar al estudiante en el proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la función integral del tutor como mediador del aprendizaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con “El tutor en ambientes virtuales” para fortalecer este concepto.',
        },
        {
          id: 8,
          texto: 'El estudiante en la era digital se caracteriza por ser:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Receptor pasivo de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dependiente únicamente del docente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitado al aula presencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestor activo de su aprendizaje.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el papel protagónico del estudiante digital.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la sección sobre el rol del estudiante en la educación mediada por TIC.',
        },
        {
          id: 9,
          texto: 'Una ventaja importante de las TIC en educación es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El aumento del aislamiento obligatorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La democratización del conocimiento y acceso educativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La eliminación de competencias críticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción de recursos abiertos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con que las TIC amplían el acceso y favorecen el aprendizaje permanente.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las ventajas de los procesos tecnológicos actuales.',
        },
        {
          id: 10,
          texto: '¿Cuál es una desventaja asociada al uso intensivo de TIC?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Flexibilidad formativa.', esCorrecta: false },
            { id: 'b', texto: 'Innovación didáctica.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Brecha digital y desigualdad de acceso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Acceso a recursos educativos abiertos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los principales retos de la educación digital.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las desventajas como la brecha digital y dependencia tecnológica.',
        },
        {
          id: 11,
          texto:
            '¿Qué fenómeno social ha reducido las barreras de tiempo y espacio para la circulación del conocimiento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La globalización.', esCorrecta: true },
            { id: 'b', texto: 'La industrialización.', esCorrecta: false },
            { id: 'c', texto: 'La alfabetización digital.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La virtualización educativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que reconoce el papel de la globalización en la expansión de los procesos educativos y la circulación del conocimiento.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el apartado sobre con globalización y cultura contemporánea.',
        },
        {
          id: 12,
          texto:
            '¿Qué finalidad tienen los Recursos Educativos Abiertos (REA) en la educación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar el acceso a contenidos académicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar el acceso libre y reutilizable a materiales educativos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir completamente a los docentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de plataformas virtuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el papel de los REA en la democratización del conocimiento.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con recursos educativos abiertos.',
        },
        {
          id: 13,
          texto:
            '¿Qué efecto tuvo la invención de la imprenta en el desarrollo del conocimiento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permitió la masificación del conocimiento escrito.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Disminuyó el acceso a la información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitó la comunicación entre culturas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminó la educación formal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el impacto histórico de la imprenta en la difusión del conocimiento.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el origen y evolución de las TIC.',
        },
        {
          id: 14,
          texto:
            '¿Qué riesgo se presenta cuando existe exceso de información digital?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Desinformación.', esCorrecta: false },
            { id: 'b', texto: 'Automatización.', esCorrecta: false },
            { id: 'c', texto: 'Infoxicación.', esCorrecta: true },
            { id: 'd', texto: 'Digitalización.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el concepto de infoxicación como saturación informativa que dificulta la comprensión.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con sociedad de la información.',
        },
        {
          id: 15,
          texto: '¿Qué característica define principalmente a la sociedad red?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La interconexión de nodos mediante redes digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La centralización del poder en instituciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación del conocimiento científico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La sustitución de las organizaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la estructura interconectada que caracteriza a la sociedad red.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la sociedad red.',
        },
        {
          id: 16,
          texto:
            '¿Qué plataforma tecnológica permite gestionar contenidos, evaluaciones y seguimiento del aprendizaje?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sistema operativo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Learning Management System (LMS).',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Motor de búsqueda.', esCorrecta: false },
            { id: 'd', texto: 'Red social.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el uso de plataformas LMS en la gestión del proceso formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la educación en entornos digitales.',
        },
        {
          id: 17,
          texto:
            '¿Qué recurso digital integra texto, imagen, audio o animación con un propósito pedagógico?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sistema operativo.', esCorrecta: false },
            { id: 'b', texto: 'Base de datos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Objeto Virtual de Aprendizaje (OVA).',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Servidor web.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la función pedagógica de los objetos virtuales de aprendizaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los recursos digitales educativos.',
        },
        {
          id: 18,
          texto:
            '¿Qué tipo de interacción educativa ocurre en tiempo real mediante herramientas digitales?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Interacción asincrónica.', esCorrecta: false },
            { id: 'b', texto: 'Interacción diferida.', esCorrecta: false },
            { id: 'c', texto: 'Interacción autónoma.', esCorrecta: false },
            { id: 'd', texto: 'Interacción sincrónica.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la comunicación en tiempo real mediante videoconferencias u otras herramientas digitales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los entornos virtuales de aprendizaje.',
        },
        {
          id: 19,
          texto:
            '¿Qué competencia permite al docente adaptar estrategias pedagógicas ante limitaciones tecnológicas?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Memorización.', esCorrecta: false },
            { id: 'b', texto: 'Recursividad.', esCorrecta: true },
            { id: 'c', texto: 'Virtualización.', esCorrecta: false },
            { id: 'd', texto: 'Automatización.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con que las TIC amplían el acceso y favorecen el aprendizaje permanente.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las ventajas de los procesos tecnológicos actuales.',
        },
        {
          id: 20,
          texto:
            '¿Qué herramienta tecnológica permite evaluar el progreso del aprendiz mediante cuestionarios, rúbricas o portafolios digitales?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comunicación sincrónica.', esCorrecta: false },
            { id: 'b', texto: 'Gestión documental.', esCorrecta: false },
            { id: 'c', texto: 'Evaluación digital.', esCorrecta: true },
            { id: 'd', texto: 'Teletrabajo.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el uso de herramientas tecnológicas para evaluar el aprendizaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el uso de TIC en la formación profesional.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la sociedad digital y la educación mediada por TIC.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
