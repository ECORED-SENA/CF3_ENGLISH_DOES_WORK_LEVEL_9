<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[em Expressions in the past] (Expresiones en pasado) 
    .bg-tema1.mn
      .row.justify-content-center.mb-5
        .col-lg-4.col-6: img(src='@/assets/curso/temas/tema1/1.svg', alt='')
        .col-lg-8 
          //TODO: Añadir traduccion de este texto
          traductor.color-primario
            div(slot="textoIngles")
              p #[em There are certain types of connectors that serve as time expressions to narrate and explain things that happened in the past in an orderly manner. These connectors are words (or groups of words) that link the sentences together and establish some relationship between them; in the case of these temporal expressions, it is a sequential relationship that explains, in an orderly manner, what happened before, during, and after in a story.]
            div(slot="textoEspanol")
              p Hay ciertos tipos de conectores que sirven como expresiones temporales para narrar y explicar cosas que pasaron en el pasado de manera ordenada. Estos conectores son palabras (o grupos de palabras) que unen las oraciones y establecen alguna relación entre ellas; en el caso de estas expresiones temporales, es una relación secuencial que explica, de manera ordenada, lo que pasó antes, durante y después en una historia.
      .row.justify-content-center.mb-5
        .col-lg-11
          .tarjeta(style="background-color: #fff0f1").p-4 
            p.mb-0
              span.r--1 We are going to see, in the next dialogue, how some time expressions are used in the past tense. 
              span.r--gris Veamos, en el siguiente diálogo, cómo son usadas algunas expresiones temporales en pasado.
      .row.justify-content-center.mb-5
        .col-lg-8
          .contenedor-dialogo
            .contenedor-dialogo__titulo: img(src='@/assets/curso/temas/tema1/2.svg', alt='').mb-0
            .contenedor-dialogo__dialogo.pt-0.p-5
              .tarjeta.bg-white.p-4(style='border-radius: 0px 0px 10px 10px')
                .row.justify-content-center.align-items-center.mb-2
                  .col-2
                    h3(style='color: #8284d2 ')  Alex
                  .col-10 
                    .contenedor-traductor.mb-5(style='background-color: #8284d2')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.fst-italic.text-white  Hello, Gina. How did your singing class go?
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/tema1/d1.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                        p 
                      a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fed947') Ver traducción
                .row.justify-content-center.align-items-center.mb-2
                  .col-10 
                    .contenedor-traductor.mb-5(style='background-color: #e1e8ff')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.fst-italic
                          span.r--3   Very good, Alex. 
                            span.r--2 Initially, 
                            | we did warm-up exercises with our vocal coach.
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/tema1/d2.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                        p 
                      a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fed947') Ver traducción
                  .col-2
                    h3(style='color: #3c3fa7 ')  Gina
                .row.justify-content-center.align-items-center.mb-2
                  .col-2
                    h3(style='color: #8284d2 ')  Alex
                  .col-10 
                    .contenedor-traductor.mb-5(style='background-color: #8284d2')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.fst-italic.text-white  How interesting! And what else did you do?
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/tema1/d3.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                        p 
                      a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fed947') Ver traducción
                .row.justify-content-center.align-items-center.mb-2
                  .col-10 
                    .contenedor-traductor.mb-5(style='background-color: #e1e8ff')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.fst-italic  
                          span.r--2 As 
                            span.r--3 the class progressed, we sang more and more difficult songs. 
                              span.r--2 Suddenly, 
                              | we were arranged in pairs and we sang duets.
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/tema1/d4.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                        p 
                      a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fed947') Ver traducción
                  .col-2
                    h3(style='color: #3c3fa7 ')  Gina
    p.mb-5(data-aos='fade-right') 
      span.r--1.fst-italic We are going to focus on the following 3 types of temporary connectors: 
      span.r--gris / Vamos a centrarnos en los siguientes 3 tipos de conectores temporales:
    .row.justify-content-center.mb-5
      .col-lg-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/3.svg', alt='')
      .col-lg-9(data-aos="fade-left")
          LineaTiempoD.color-primario
            .row(numero="1" titulo="<em>Anteriority connectors</em> / Conectores de anterioridad").p-3
              .col-lg-9
                traductor.color-primario
                  div(slot="textoIngles")
                    p.fst-italic These connectors tell us that something has happened before the sentence we take as reference. They are usually used at the beginning of a story. <br><br>Example:<br> <b>Once upon a time, there was a queen who ruled a country called Both Worlds.</b>
                  div(slot="textoEspanol")
                      p Estos conectores nos indican que algo ha sucedido antes que la oración que tomamos como referencia. Generalmente, se usan al inicio de una historia.
                        br
                        br
                        |#[b Érase una vez, una reina que regía sobre un país llamado Ambos Mundos.]
              .col-lg-3.col-6: img(src='@/assets/curso/temas/tema1/4.svg', alt='')
            .row(numero="2" titulo="<em>Simultaneity connectors</em> / Conectores de simultaneidad").p-3
              .col-lg-9
                traductor.color-primario.mb-5
                  div(slot="textoIngles")
                    p.fst-italic These types of temporary connectors are the ones that tell us that two things are happening at the same time. They are generally used in the middle or in the development of a story.
                    br
                    br
                    | Example: 
                    br
                    span.fw-bold This air conditioning unit can control humidity and temperature simultaneously
                  div(slot="textoEspanol")
                    p Este tipo de conectores temporales son los que nos indican que dos cosas están sucediendo a la vez. Generalmente, se usan en la mitad o en el desarrollo de una historia. Ejemplo:
                      br
                      |#[b Esta unidad de aire acondicionado puede controlar la humedad y la temperatura simultáneamente.]

              .col-lg-3.col-6: img(src='@/assets/curso/temas/tema1/5.svg', alt='')
            .row(numero="3" titulo="<em>Posteriority connectors</em> / Conectores de posterioridad").p-3
              .col-lg-9
                traductor.color-primario
                  div(slot="textoIngles")
                    p.fst-italic These temporary connectors are the ones that tell us that one thing happens after another. In this category, we must take into account that we can include some sequence connectors (which are usually used in the middle or in the development of a story) and some conclusion connectors (which are usually used at the end of a story). <br> <br> Example: <br> <b>I was listening to the radio while I drove. Suddenly, a deer appeared out of nowhere and I lost control of my car.</b>
                  div(slot="textoEspanol")
                      p Estos conectores temporales son los que nos indican que una cosa sucede después de otra. En esta categoría, debemos tener en cuenta que podemos incluir algunos conectores de secuencia (que generalmente se usan en la mitad o en el desarrollo de una historia) y algunos conectores de conclusión (que generalmente se usan al final de una historia).  Ejemplo:
                        br
                        br
                        |#[b Estaba escuchando la radio mientras conducía. De repente, un venado apareció de la nada y perdí el control de mi auto.]

              .col-lg-3.col-6: img(src='@/assets/curso/temas/tema1/6.svg', alt='')
    .mn.bg-intro.mb-5
      .tarjeta.bg-white.p-5.mb-5
        p.mb-0 
          span.r--1.fst-italic We can make a direct relationship of the type of connector that the expression is and when it is most appropriate to use it in a story, as follows: 
          span.r--gris  / Podemos hacer una relación directa del tipo de conector que la expresión es y cuándo es más apropiado usarla en un relato, de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.bg-white.p-5
            SlyderA(tipo='b')
              div
                h5.text-center
                  span.r--1 Anteriority connectors
                  span.r--gris / Conectores de anterioridad
                table
                  thead(style="background-color: #f0f4ff ")
                    tr.text-center
                      th 
                        span.r--1.fst-italic Time connector type
                        br
                        span.r--gris Tipo de conector temporal
                      th 
                        span.r--1.fst-italic Expression (time transition word)
                        br
                        span.r--gris Expresión (palabra de transición de tiempo)
                      th 
                        span.r--1.fst-italic When to use it in a story
                        br
                        span.r--gris Cuándo usarla en una historia 
                  tbody
                    tr
                      td.text-center 
                        span.r--1.fst-italic Anteriority connectors
                        br
                        span.r--gris Conectores de anterioridad
                      td 
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="Once upon a time / <span class= r--gris fw-normal>  Érase una vez</span> "
                            :audio="require('@/assets/curso/temas/audios/tema1/1.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="Before / <span class= r--gris fw-normal> Antes</span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/2.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="Initially / <span class= r--gris fw-normal> Inicialmente </span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/3.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="Previously / <span class= r--gris fw-normal> Previamente</span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/4.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="At the beginning / <span class= r--gris fw-normal> Al principio</span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/5.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="____ ago (a while ago, X years ago, etc.) <span class= r--gris fw-normal>/ Hace ____ (hace un tiempo, hace X años, etc.)</span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/6.mp3')"
                          )
                      td.text-center
                        span.r--3.fw-bold.fst-italic Beginning
              div
                h5
                  span.r--1 Simultaneity connectors
                  span.r--gris / Conectores de simultaneidad
                table
                  thead(style="background-color: #f0f4ff ")
                    tr
                      th.text-center 
                        span.r--1.fst-italic Time connector type
                        br
                        span.r--gris Tipo de conector temporal
                      th 
                        span.r--1.fst-italic Expression (time transition word)
                        br
                        span.r--gris Expresión (palabra de transición de tiempo)
                      th 
                        span.r--1.fst-italic When to use it in a story
                        br
                        span.r--gris Cuándo usarla en una historia 
                  tbody
                    tr.text-center
                      td 
                        span.r--1.fst-italic Simultaneity connectors
                        br 
                        span.r--gris Conectores de simultaneidad
                      td 
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="While <span class= r--gris fw-normal>/ Mientras que </span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/8.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="When <span class= r--gris fw-normal>/ Cuando </span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/9.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="Simultaneously <span class= r--gris fw-normal>/ Simultáneamente </span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/10.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="At the same time <span class= r--gris fw-normal>/ Al mismo tiempo </span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/11.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="In that moment <span class= r--gris fw-normal>/ En ese momento </span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/12.mp3')"
                          )
                        TarjetaAudio.color-acento-contenido.mb-3(
                            texto="As <span class= r--gris fw-normal>/ Mientras / cuando / a medida que </span>"
                            :audio="require('@/assets/curso/temas/audios/tema1/13.mp3')"
                          )

                      td 
                        span.r--3.fw-bold.fst-italic Middle
              div
                h5
                  span.r--1  Posteriority connectors
                  span.r--gris / Conectores de posterioridad
                table.text-center
                  thead(style="background-color: #f0f4ff ")
                    tr
                      th 
                        span.r--1.fst-italic Time connector type
                        br 
                        span.r--gris Tipo de conector temporal
                      th 
                        span.r--1.fst-italic Expression (time transition word)
                        br 
                        span.r--gris Expresión (palabra de transición de tiempo)
                      th 
                        span.r--1.fst-italic When to use it in a story
                        br
                        span.r--gris Cuándo usarla en una historia
                  tbody
                    tr
                      td 
                        span.r--1.fst-italic Posteriority connectors
                        br
                        span.r--gris Conectores de posterioridad
                      td 
                        TarjetaAudio.color-acento-contenido.mb-3(
                              texto=" Then <span class= r--gris fw-normal>/ Entonces / luego </span>"
                              :audio="require('@/assets/curso/temas/audios/tema1/14.mp3')"
                            )
                        TarjetaAudio.color-acento-contenido.mb-3(
                              texto="Suddenly  <span class= r--gris fw-normal>/ De repente </span>"
                              :audio="require('@/assets/curso/temas/audios/tema1/15.mp3')"
                            )
                        TarjetaAudio.color-acento-contenido.mb-3(
                              texto="Later <span class= r--gris fw-normal>/ Luego </span>"
                              :audio="require('@/assets/curso/temas/audios/tema1/16.mp3')"
                            )
                        TarjetaAudio.color-acento-contenido.mb-3(
                              texto="Afterwards <span class= r--gris fw-normal>/ Después </span>"
                              :audio="require('@/assets/curso/temas/audios/tema1/1.mp3')"
                            )
                        TarjetaAudio.color-acento-contenido.mb-3(
                              texto="Finally  <span class= r--gris fw-normal>/ Finalmente </span>"
                              :audio="require('@/assets/curso/temas/audios/tema1/17.mp3')"
                            )
                        TarjetaAudio.color-acento-contenido.mb-3(
                              texto="At the end <span class= r--gris fw-normal>/ Al final </span>"
                              :audio="require('@/assets/curso/temas/audios/tema1/18.mp3')"
                            )
                        TarjetaAudio.color-acento-contenido.mb-3(
                              texto="To the end of <span class= r--gris fw-normal>/ Hasta el final de </span>"
                              :audio="require('@/assets/curso/temas/audios/tema1/19.mp3')"
                            )
                      td 
                        span.r--3.fw-bold.fst-italic Ending
    p.mb-5(data-aos='fade-right') 
      span.r--1 Now it’s your turn to use the time transition expressions in the past. Complete the following dialogue. 
      span.r--gris / Ahora, es su turno de usar las expresiones de transición de tiempo en el pasado. Complete el siguiente diálogo.
    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Titulo de actividad - Completa la conversación.
      template(#descripcion-actividad) 
      
</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema1',
  components: {
    traductor,
  },
  data: () => ({
    dial1: true,
    dial2: true,
    dial3: true,
    dial4: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Alex',
          img: require('@/assets/curso/temas/tema1/alex.svg'),
        },
        {
          nombre: 'Gina',
          img: require('@/assets/curso/temas/tema1/gina.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Alex',
          textoIng: 'It *** very interesting. How did it end?',
          textoEsp: 'Yo necesito el libro de biologia y las diapositivas.',
          audio: require('@/assets/curso/temas/audios/tema1/a1.mp3'),
          palabra: 'sounds',
        },

        {
          personaje: 'Gina',
          textoIng:
            'At the ***, our coach gave us feedback on our performance. I really enjoyed this class.',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/tema1/a2.mp3'),
          palabra: 'end',
        },
      ],
    },
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

<style lang="sass">
.bg-tema1
  background-image: url(../assets/curso/temas/tema1/bg-tema1.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content__title
  border-radius: 10px 10px 0px 0px
.linea-tiempo-d__item__content__title

  background-color: #c4d1ff
  border-radius: 10px
.linea-tiempo-d__item__content__slot
  background-color: #c4d1ff
  border-radius: 0px 0px 10px 10px
</style>
