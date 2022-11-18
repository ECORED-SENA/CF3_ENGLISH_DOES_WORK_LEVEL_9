<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 #[em Pronunciation] (Pronunciación) 
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/1.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        traductor.color-primario.mb-5 
          div(slot="textoIngles")
            p.fst-italic There are several concepts of the pronunciation of the English language (
              span.r--2.fw-bold such as vowel reduction, contractions, vowel combinations and intonation rules
              | ) that we must learn and practice to improve our conversational skills since in a language it isn’t only important what we say, but how we say it. Let’s see them in this thematic unit.
          div(slot="textoEspanol")
            p
    .bg-tema4.mn 
      .row.justify-content-center.mb-5
        .col-lg-9(data-aos="fade-left")
          traductor.color-primario.mb-5 
            div(slot="textoIngles")
              p.fst-italic If the sound of the word isn’t pronounced correctly, it could cause confusion and misunderstanding since the receiver would understand incorrectly. Many misunderstandings are due to mispronunciation or poor intonation. Knowing that we pronounce correctly gives us power. When we know that we have a good pronunciation we want to talk and interact more since we feel comfortable talking because we know that we pronounce well. 
            div(slot="textoEspanol")
              p
        .col-lg-3.col-6(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/2.png', alt='')
      p.mb-5(data-aos='fade-right').text-center
        span.r--3 The following dialogue will allow us to enter the theme. 
        | / El siguiente diálogo nos permitirá entrar en la temática.
    .contenedor-dialogos.bg-white
      .row.justify-content-center.mb-5
        .col-lg-3.col-6.h-100: img(src='@/assets/curso/temas/tema3/3.svg', alt='')
        .col-lg-7
          .row.justify-content-end.align-items-center.mb-2
            .col-2
              h3(style='color: #FC5F65 ')  
                span(style="background-color: #FFDFE0 ").p-2 Bruno
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #FFF0F1')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic  
                    span.r--2 Hi, Elena! Can you tell me what happened at the last meeting?
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/1.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                  p 
                a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fed947') Ver traducción
          .row.justify-content-center.align-items-center.mb-2
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #e1e8ff')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic 
                    span.r--3 Sure, Bruno. I have to say I 
                    span.r--2 couldn’t’ve 
                    | succeeded there if Jenny hadn’t helped me.
                    
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/1.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                  p 
                a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fed947') Ver traducción
            .col-2
              h3(style='color: #3c3fa7 ')  
                span(style="background-color: #C4D1FF ").p-2 Elena
          .row.justify-content-end.align-items-center.mb-2
            .col-2
              h3(style='color: #FC5F65 ')  
                span(style="background-color: #FFDFE0 ").p-2 Bruno 
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #FFF0F1')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic  
                    span.r--2 Really? 
                    span.r-33 D’y’all 
                    | present the project?
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/1.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                  p 
                a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fed947') Ver traducción
          .row.justify-content-center.align-items-center.mb-2
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #e1e8ff')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic 
                    span.r--3 No, my team 
                      span.r--2 didn’t 
                      | show up, they 
                      span.r--2 shouldn’t’ve 
                      | eaten those shrimps, they got sick!
                    
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/1.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                  p 
                a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fed947') Ver traducción
            .col-2
              h3(style='color: #3c3fa7 ')  
                span(style="background-color: #C4D1FF ").p-2 Elena
    p.mb-5(data-aos='fade-right') 
      span.r--3.fst-italic Let’s see the following pronunciation concepts that will greatly improve our conversational skills. 
      span.r--gris / Vamos a ver los siguientes conceptos de pronunciación, los cuales mejorarán mucho nuestra habilidad conversacional.
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1  #[em Unstressed vowels and vowel reduction] (vocales no acentuadas y reducción de vocales)
    .bg-tema4-1.mn
      .row.justify-content-center.mb-5
        .col-lg-3.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/3.png', alt='')
        .col-lg-9(data-aos="fade-left")
          traductor.color-primario.mb-5 
              div(slot="textoIngles")
                p.fst-italic When we speak, the words we say seem different from the words we write, and one of the reasons is that we reduce or make smaller certain vowel sounds of words that we think are less important in the sentence (functional words) to make room to those that we think are more important for the other person to hear (content words), and when we reduce or shrink these vowel sounds,, they take on the same sound. So it is the vowels 
                  span.r--2.fw-bold A - E - I - O - U, 
                  | they can all have the same sound and that sound is called 
                  span.r--2.fw-bold schwa 
                  | (and it sounds like /uh/).
              div(slot="textoEspanol")
                p
      .row.justify-content-center.mb-5
        .col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/4.svg', alt='' style="width: 300px") 
            .bg-tarjeta.p-4.rounded-3
              .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Can → / kuhn /"
                      :audio="require('@/assets/curso/temas/audios/1.mp3')"
                    )
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Sandra can speak French."
                      :audio="require('@/assets/curso/temas/audios/1.mp3')"
                    )
                  p.text-center Sandra puede hablar francés.
        .col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/5.svg', alt='' style="width: 300px") 
            .bg-tarjeta.p-4.rounded-3
              .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="To → / tuh /"
                      :audio="require('@/assets/curso/temas/audios/1.mp3')"
                    )
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Let’s go to Spain!"
                      :audio="require('@/assets/curso/temas/audios/1.mp3')"
                    )
                  p.text-center ¡Vamos a España!
        .col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/6.svg', alt='' style="width: 300px") 
            .bg-tarjeta.p-4.rounded-3
              .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Or → / er /"
                      :audio="require('@/assets/curso/temas/audios/1.mp3')"
                    )
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Would you like soup or salad?"
                      :audio="require('@/assets/curso/temas/audios/1.mp3')"
                    )
                    p.text-center ¿Quiere sopa o ensalada?
      .row.justify-content-center.mb-5
        .col-lg-4
          .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/7.svg', alt='' style="width: 300px") 
              .bg-tarjeta.p-4.rounded-3
                .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                    TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                        texto="Are → / er /"
                        :audio="require('@/assets/curso/temas/audios/1.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                        texto="The apples are ripe."
                        :audio="require('@/assets/curso/temas/audios/1.mp3')"
                      )
                    p.text-center  Las manzanas están maduras.
        .col-lg-4
          .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/8.svg', alt='' style="width: 300px") 
              .bg-tarjeta.p-4.rounded-3
                .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                    TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                        texto="Her → / er /"
                        :audio="require('@/assets/curso/temas/audios/1.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                        texto="That’s her brother."
                        :audio="require('@/assets/curso/temas/audios/1.mp3')"
                      )
                    p.text-center Ese es su hermano.
    p.mb-5(data-aos='fade-right') 
      span.r--3.fst-italic The following videos expand the information. What happens when we reduce the voices? 
      span.r--gris / En los siguientes videos se amplía la información. ¿Qué sucede cuando reducimos las vocales?
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') 
      span.r--3 Next, you are invited to see some examples of unstressed vowels and vowel reduction. 
      span.r--gris / A continuación, se le invita a ver algunos ejemplos de vocales no acentuadas y reducción de vocales.
    figure.mb-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2  Contractions (contracciones) 
    .bg-tema4-2.mn 
      .row.justify-content-center.mb-5
        .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/9.svg', alt='')
        .col-lg-9(data-aos="fade-left")
          traductor.color-primario.mb-5 
            div(slot="textoIngles")
              p.fst-italic You must understand that a contraction in English is the combination of two words in a shortened form, with the omission of some letters and the use of an apostrophe. Next, we will listen to the pronunciation in two columns, one is the contraction and the other is the full form. Listen carefully and repeat. We can see some examples:
            div(slot="textoEspanol")
              p
      .row.justify-content-center.mb-5
        .col-lg-10
          .d-flex
            img(src='@/assets/curso/temas/tema4/10.svg', alt='' style="width: 420px")
            .bg-white.p-5.w-100
              SlyderE(indicadores="derecha")
                div 
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      Audio.color-acento-botones(:audio="require('@/assets/curso/temas/audios/1.mp3')").m-auto
                  table.color-table.text-center.fst-italic
                    thead
                      tr(style="background-color: #F0F4FF").fw-bold
                        th N°
                        th Contraction
                        th Full Form
                        
                    tbody
                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 1
                        td(style="border-top: 0px; border-bottom: 0px") aren’t
                        td(style="border-top: 0px; border-bottom: 0px") are not, am not 

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 2
                        td(style="border-top: 0px; border-bottom: 0px") can’t
                        td(style="border-top: 0px; border-bottom: 0px") can not
                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 3
                        td(style="border-top: 0px; border-bottom: 0px") ‘cause

                        td(style="border-top: 0px; border-bottom: 0px") because

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 4
                        td(style="border-top: 0px; border-bottom: 0px") could’ve
                        td(style="border-top: 0px; border-bottom: 0px") could have
                      tr
                        td(style="border-top: 0px").fw.bold 5
                        td(style="border-top: 0px") couldn’t
                        td(style="border-top: 0px") could not
                div 
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      Audio.color-acento-botones(:audio="require('@/assets/curso/temas/audios/1.mp3')").m-auto
                  table.color-table.text-center.fst-italic
                    thead
                      tr(style="background-color: #F0F4FF").fw-bold
                        th N°
                        th Contraction
                        th Full Form
                        
                    tbody
                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 6
                        td(style="border-top: 0px; border-bottom: 0px") didn’t
                        td(style="border-top: 0px; border-bottom: 0px") did not

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 7
                        td(style="border-top: 0px; border-bottom: 0px") doesn’t
                        td(style="border-top: 0px; border-bottom: 0px") does not

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 8
                        td(style="border-top: 0px; border-bottom: 0px") don’t

                        td(style="border-top: 0px; border-bottom: 0px") do not

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 9
                        td(style="border-top: 0px; border-bottom: 0px") hadn’t
                        td(style="border-top: 0px; border-bottom: 0px") had not
                      tr
                        td(style="border-top: 0px").fw.bold 10
                        td(style="border-top: 0px") hasn’t
                        td(style="border-top: 0px") has not
                div 
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      Audio.color-acento-botones(:audio="require('@/assets/curso/temas/audios/1.mp3')").m-auto
                  table.color-table.text-center.fst-italic
                    thead
                      tr(style="background-color: #F0F4FF").fw-bold
                        th N°
                        th Contraction
                        th Full Form
                        
                    tbody
                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 11
                        td(style="border-top: 0px; border-bottom: 0px") haven’t
                        td(style="border-top: 0px; border-bottom: 0px") have not 

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 12
                        td(style="border-top: 0px; border-bottom: 0px") he’d
                        td(style="border-top: 0px; border-bottom: 0px") he had / he would

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 13
                        td(style="border-top: 0px; border-bottom: 0px") he’ll


                        td(style="border-top: 0px; border-bottom: 0px") he shall / he will

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 14
                        td(style="border-top: 0px; border-bottom: 0px") he’s
                        td(style="border-top: 0px; border-bottom: 0px") he has / he is

                      tr
                        td(style="border-top: 0px").fw.bold 15
                        td(style="border-top: 0px") how’s
                        td(style="border-top: 0px") how has / how is / how does
                div 
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      Audio.color-acento-botones(:audio="require('@/assets/curso/temas/audios/1.mp3')").m-auto
                  table.color-table.text-center.fst-italic
                    thead
                      tr(style="background-color: #F0F4FF").fw-bold
                        th N°
                        th Contraction
                        th Full Form
                        
                    tbody
                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 16
                        td(style="border-top: 0px; border-bottom: 0px") I’d
                        td(style="border-top: 0px; border-bottom: 0px") I had / I would 

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 17
                        td(style="border-top: 0px; border-bottom: 0px") I’ll

                        td(style="border-top: 0px; border-bottom: 0px") I shall / I will
                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 18
                        td(style="border-top: 0px; border-bottom: 0px") I’m

                        td(style="border-top: 0px; border-bottom: 0px") I am

                      tr
                        td(style="border-top: 0px; border-bottom: 0px").fw.bold 19
                        td(style="border-top: 0px; border-bottom: 0px") I’ve

                        td(style="border-top: 0px; border-bottom: 0px") I have
                      tr
                        td(style="border-top: 0px").fw.bold 20
                        td(style="border-top: 0px") isn’t
                        td(style="border-top: 0px") is not
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p 
          span.r--3.fst-italic As structures and sentences are studied in different verb tenses, we can see various contractions that are formed between some grammatical words. 
          span.r--gris / Pero en este caso, vamos a aprender a pronunciar contracciones dobles.
          br
          br
          span.r--3.fst-italic But in this case, we are going to learn how to pronounce double contractions. 
          span.r--gris / A medida que se estudian las estructuras y oraciones en diferentes tiempos verbales, podemos ver diversas contracciones que se forman entre algunas palabras gramaticales.
      .col-lg-2.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/11.svg', alt='')
                        





    
</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'

export default {
  name: 'Tema4',
  components: {
    traductor,
  },
  data: () => ({
    dial1: false,
    dial2: false,
    dial3: false,
    dial4: false,
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
.bg-tema4
  background-image: url(../assets/curso/temas/tema4/bg-1.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: 100%
.bg-tema4-1
  background-image: url(../assets/curso/temas/tema4/bg-1-2.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: 100%
.bg-tema4-2
  background-image: url(../assets/curso/temas/tema4/bg-1-3.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: 100%
.bg-tarjeta
  background-image: url(../assets/curso/temas/tema3/bg-tarjeta.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
</style>
