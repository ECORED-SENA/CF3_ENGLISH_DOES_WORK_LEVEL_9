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
            p Hay varios conceptos de la pronunciación del idioma inglés (#[b como la reducción de las vocales, las contracciones, las combinaciones de vocales y las reglas de entonación]) que debemos aprender y practicar para mejorar nuestras habilidades conversacionales, porque en un idioma no solo es importante lo que decimos, sino cómo lo decimos. Conozcamoslos en esta unidad temática.
    .bg-tema4.mn 
      .row.justify-content-center.mb-5
        .col-lg-9(data-aos="fade-left")
          traductor.color-primario.mb-5 
            div(slot="textoIngles")
              p.fst-italic If the sound of the word isn’t pronounced correctly, it could cause confusion and misunderstanding since the receiver would understand incorrectly. Many misunderstandings are due to mispronunciation or poor intonation. Knowing that we pronounce correctly gives us power. When we know that we have a good pronunciation we want to talk and interact more since we feel comfortable talking because we know that we pronounce well. 
            div(slot="textoEspanol")
              p Si el sonido de la palabra no es pronunciado correctamente, podría causar confusiones y malentendidos, debido a que el receptor entendería incorrectamente. Muchos malentendidos son por causa de una mala pronunciación o pobre entonación. Saber que pronunciamos correctamente nos da poder. Cuando sabemos que tenemos una buena pronunciación, queremos hablar e interactuar más, ya que nos sentimos cómodos conversando porque sabemos que pronunciamos bien. 
                br
                br
                |El siguiente diálogo nos permitirá entrar en la temática.

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
                span(style="background-color: #FFDFE0 ").p-2 Carla
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #FFF0F1')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic  
                    span.r--2 Hi, Elena! Can you tell me what happened at the last meeting?
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/h22_1.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                  p ¡Hola, Elena! ¿Puedes decirme qué pasó en la última reunión?
                a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fed947') Ver traducción
          .row.justify-content-center.align-items-center.mb-2
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #e1e8ff')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic 
                    span.r--3 I have to say I 
                    span.r--2 couldn’t’ve 
                    | succeeded there if Jenny hadn’t helped me.
                    
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/h22_2.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                  p Debo decir que no podría haber tenido éxito allí si Jenny no me hubiera ayudado.
                a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fed947') Ver traducción
            .col-2
              h3(style='color: #3c3fa7 ')  
                span(style="background-color: #C4D1FF ").p-2 Elena
          .row.justify-content-end.align-items-center.mb-2
            .col-2
              h3(style='color: #FC5F65 ')  
                span(style="background-color: #FFDFE0 ").p-2 Carla
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #FFF0F1')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic  
                    span.r-33 D’y’all 
                    | present the project?
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/h22_3.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                  p ¿En serio? ¿Ustedes presentaron el proyecto?
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
                    
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/h22_4.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                  p No, mi equipo no apareció, no debieron haberse comido esos camarones, ¡se enfermaron!
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
                p Cuando hablamos, las palabras que decimos parecen diferentes a las palabras que escribimos, y una de las razones es que reducimos o hacemos más pequeños ciertos sonidos de las vocales de las palabras que creemos que son menos importantes en la oración (palabras funcionales) para dejar espacio a los que creemos que son más importantes para que la otra persona los escuche (palabras de contenido), y cuando reducimos o achicamos, estos sonidos vocálicos toman el mismo sonido. Así es, las vocales #[b A - E - I - O - U], todas, pueden tener el mismo sonido y ese sonido es el llamado #[em #[b schwa]] (y suena como #[b /uh/]).
      .row.justify-content-center.mb-5
        .col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/4.svg', alt='' style="width: 300px") 
            .bg-tarjeta.p-4.rounded-3
              .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Can → / kuhn /"
                      :audio="require('@/assets/curso/temas/audios/tema4/01.mp3')"
                    )
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Sandra can speak French."
                      :audio="require('@/assets/curso/temas/audios/tema4/02.mp3')"
                    )
                  p.text-center Sandra puede hablar francés.
        .col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/5.svg', alt='' style="width: 300px") 
            .bg-tarjeta.p-4.rounded-3
              .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="To → / tuh /"
                      :audio="require('@/assets/curso/temas/audios/tema4/03.mp3')"
                    )
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Let’s go to Spain!"
                      :audio="require('@/assets/curso/temas/audios/tema4/04.mp3')"
                    )
                  p.text-center ¡Vamos a España!
        .col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/6.svg', alt='' style="width: 300px") 
            .bg-tarjeta.p-4.rounded-3
              .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Or → / er /"
                      :audio="require('@/assets/curso/temas/audios/tema4/05.mp3')"
                    )
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Would you like soup or salad?"
                      :audio="require('@/assets/curso/temas/audios/tema4/06.mp3')"
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
                        :audio="require('@/assets/curso/temas/audios/tema4/07.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                        texto="The apples are ripe."
                        :audio="require('@/assets/curso/temas/audios/tema4/08.mp3')"
                      )
                    p.text-center  Las manzanas están maduras.
        .col-lg-4
          .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/8.svg', alt='' style="width: 300px") 
              .bg-tarjeta.p-4.rounded-3
                .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                    TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                        texto="Her → / er /"
                        :audio="require('@/assets/curso/temas/audios/tema4/09.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                        texto="That’s her brother."
                        :audio="require('@/assets/curso/temas/audios/tema4/10.mp3')"
                      )
                    p.text-center Ese es su hermano.
    p.mb-5(data-aos='fade-right') 
      span.r--3.fst-italic The following videos expand the information. What happens when we reduce the voices? 
      span.r--gris / En los siguientes videos se amplía la información. ¿Qué sucede cuando reducimos las vocales?
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tPbCpBdX1iM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') 
      span.r--3 Next, you are invited to see some examples of unstressed vowels and vowel reduction. 
      span.r--gris / A continuación, se le invita a ver algunos ejemplos de vocales no acentuadas y reducción de vocales.
    figure.mb-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/lsrF6DExuAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
                p Hay que entender que una contracción en inglés es la combinación de dos palabras en una forma acortada, con la omisión de algunas letras y el uso de un apóstrofe.  A continuación, escucharemos la pronunciación en dos columnas, una es la contracción y la otra es la forma completa. Se sugiere escuchar con atención y repetir. Podemos ver algunos ejemplos:
      .row.justify-content-center.mb-5
        .col-lg-10
          .d-flex
            img(src='@/assets/curso/temas/tema4/10.svg', alt='' ).h-100
            .bg-white.p-5.w-100
              SlyderA(tipo='b')
                div
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      Audio.color-acento-botones(:audio="require('@/assets/curso/temas/audios/tema4/25.mp3')")
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
                div.p 
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      Audio.color-acento-botones(:audio="require('@/assets/curso/temas/audios/tema4/26.mp3')")
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
                div.p 
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      Audio.color-acento-botones(:audio="require('@/assets/curso/temas/audios/tema4/27.mp3')")
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
                div.p 
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      Audio.color-acento-botones(:audio="require('@/assets/curso/temas/audios/tema4/28.mp3')")
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
          figcaption.mt-5 Tomado de https://www.inglestotal.com/pronunciacion-de-contracciones-en-ingles-english-contractions/
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p 
          span.r--3.fst-italic As structures and sentences are studied in different verb tenses, we can see various contractions that are formed between some grammatical words. 
          span.r--gris / A medida que se estudian las estructuras y oraciones en diferentes tiempos verbales, podemos ver diversas contracciones que se forman entre algunas palabras gramaticales.   
          br
          br
          span.r--3.fst-italic But in this case, we are going to learn how to pronounce double contractions. 
          span.r--gris / Pero en este caso, vamos a aprender a pronunciar contracciones dobles.
      .col-lg-2.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/11.svg', alt='')
    .mn(style="background-color: #3c3fa7").mb-5
      .row.justify-content-center
        .col-lg-10
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/11.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic I will have
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic I’ll’ve
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/12.mp3')")
                p.mb-2 #[em Phrase] / Frase 
                p.mb-2 
                  span.r--3.fst-italic Could not have
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic Couldn’t’ve  
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/13.mp3')")
                p.mb-2 #[em Phrase] / Frase 
                p.mb-2 
                  span.r--3.fst-italic Can not have
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic Can’t’ve
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/14.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic  Do you all
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic D’y’all
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/15.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic He would have
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic He’d’ve
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/16.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic He is not
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic He’sn’t
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/17.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic I have not 
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic I’ven’t
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/18.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic Might not have
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic Mightn’t’ve
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/19.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic Must not have
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic Mustn’t’ve
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/20.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic Should not have
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic Shouldn’t’ve
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/21.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic Who would have
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic Who’d’ve
            .tarjeta(style="background-color: #a6bbff").p-3.text-center
              .tarjeta.bg-white.p-4.position-relative
                .audio-up.p-4
                  Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/22.mp3')")
                p.mb-2 #[em Phrase] / Frase
                p.mb-2 
                  span.r--3.fst-italic Will not have
                p.mb-2 #[em Contraction] / Contracción
                p.mb-2 
                  span.r--3.fst-italic Won’t’ve
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta(style="background-color: #f0f4ff ")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-4.col-6: img(src='@/assets/curso/temas/tema4/12.png', alt='')
            .col-lg-8
              .p-4
                p 
                  span.r--3.fst-italic Be careful as these are never spelled the way they are pronounced. 
                  spa.r--gris / Ten cuidado ya que estas jamás se escriben como se pronuncian.
                  br
                  br
                  span.r--3.fst-italic For example, the double contraction “couldn’t’ve” is written  
                  span.r--gris / Por ejemplo, la doble contracción “couldn’t’ve” se escribe:
                .row.justify-content-center
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Could not have (formally)"
                      :audio="require('@/assets/curso/temas/audios/tema4/23.mp3')"
                    )
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Couldn’t have (informally)"
                      :audio="require('@/assets/curso/temas/audios/tema4/24.mp3')"
                    )
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3  #[em Mixed sounds] (sonidos combinados)
    .bg-tema4-3.mn
      .row.justify-content-center.mb-5
        .col-lg-4.col-6: img(src='@/assets/curso/temas/tema4/13.svg', alt='')
        .col-lg-8 
          traductor.color-primario.mb-5 
            div(slot="textoIngles")
              p.fst-italic Mixed sounds, vowel combinations, vowel digraphs, vowel mixtures, are some of the names we can give to this theme. And they can be a combination of two vowels, as in #[em ‘oo’, ‘ie’ or ‘au’], or a combination of a vowel plus a consonant, where the consonant has no distinctive sound, as in #[em ‘aw’, ‘wa’ or ‘oh’].
            div(slot="textoEspanol")
              p Sonidos mixtos, combinaciones de vocales, dígrafos de vocales, mezclas de vocales son algunos de los nombres que le podemos dar a este tema. Y pueden ser una combinación de dos vocales, como en #[em 'oo', 'ie' o 'au'], o una combinación de una vocal más una consonante, donde la consonante no tiene un sonido distintivo, como en #[em 'aw', 'wa ' o 'ay'].
                br
                br
                |Vamos a practicar algunas de las combinaciones más comunes, ya que en total hay al menos 28 combinaciones de letras vocales escritas.

      .row.justify-content-center.mb-5
        .col-lg-5(data-aos="fade-right")
          p #[em We are going to practice some of the most common combinations, since in total there are at least 28 written vowel letter combinations.] / Vamos a practicar algunas de las combinaciones más comunes, ya que en total hay al menos 28 combinaciones de letras vocales escritas.
          img(src='@/assets/curso/temas/tema4/14.svg', alt='')
        .col-lg-7(data-aos="fade-left")
          .tarjeta.bg-white.p-4
            SlyderA(tipo='b')
              div.mx-3 
                h5.text-center
                  span.r--3.fst-italic “OO” Vowel combination words 
                  span.r--g / Palabras con combinación de vocales “OO” 
                p
                  span.r--3.fst-italic.fst-italic “OO” with short /u/ sound / 
                  span.r--gris “OO” con sonido /u/ corto
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-4.col-6: img(src='@/assets/curso/temas/tema4/15.svg', alt='')
                  .col-lg-8
                    .row.justify-content-center.mb-5
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Look
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/29.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Cook
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/30.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Book
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/31.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Good
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/32.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Food
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/33.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Understood
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/34.mp3')")
              div.mx-3 
                h5.text-center
                  span.r--3.fst-italic “OO” Vowel combination words 
                  span.r--g  / Palabras con combinación de vocales “OO” 
                p
                  span.r--3.fst-italic.fst-italic “OO” with long /u/ sound / 
                  span.r--gris “OO” con sonido /u/ largo
                .row.justify-content-center.align-items-center
                  .col-lg-4.col-6: img(src='@/assets/curso/temas/tema4/16.svg', alt='')
                  .col-lg-8
                    .row.justify-content-center
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Bamboo
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/35.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Igloo
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/36.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Kangaroo
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/37.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Cool
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/38.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Goose  
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/39.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Balloon
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/40.mp3')")
              div.mx-3 
                h5.text-center
                  span.r--3.fst-italic “OW” Vowel combination words / 
                  span.r--g   Palabras con combinación de vocales “OW” 
                p
                  span.r--3.fst-italic.fst-italic “OW” with long /a/ and /u/ sound / 
                  span.r--gris “OW” con sonido /a/ y /u/ largo
                .row.justify-content-center.align-items-center
                  .col-lg-4.col-6: img(src='@/assets/curso/temas/tema4/17.svg', alt='')
                  .col-lg-8
                    .row.justify-content-center
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Cow
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/41.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 How    
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/42.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Owl
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/43.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Town
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/44.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Allow 
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/45.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Now
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/46.mp3')")
              div.mx-3 
                h5.text-center
                  span.r--3.fst-italic “OW” Vowel combination words 
                  span.r--g / Palabras con combinación de vocales “OW” 
                p
                  span.r--3.fst-italic.fst-italic “OW” with long /o/ sound /  
                  span.r--gris “OW” con sonido /o/ largo  
                .row.justify-content-center.align-items-center
                  .col-lg-4.col-6: img(src='@/assets/curso/temas/tema4/18.svg', alt='')
                  .col-lg-8
                    .row.justify-content-center
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Know
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/47.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Slow
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/48.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Window 
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/49.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Own
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/50.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Throw
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/51.mp3')")
                      .col-lg-6
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Arrow
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/52.mp3')")
              div.mx-3 
                h5.text-center
                  span.r--3.fst-italic “OU” Vowel combination words  
                  span.r--g / Palabras con combinación de vocales “OU” 
                p
                  span.r--3.fst-italic.fst-italic OU” with long /u/ sound / 
                  span.r--gris “OU” con sonido /u/ largo 
                    .row.justify-content-center
                      .col-lg-4
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Soup   
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/53.mp3')")
                      .col-lg-4
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Amount     
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/56.mp3')")
                      .col-lg-4
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 You
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/54.mp3')")
                p
                  span.r--3.fst-italic.fst-italic “OU” with long /a/ and /u/ sound / 
                  span.r--gris “OU” con sonido /a/ y /u/ largo 
                    .row.justify-content-center
                      .col-lg-4
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Cloud
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/57.mp3')")
                      .col-lg-4
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Coup
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/55.mp3')")
                      .col-lg-4
                        .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                          h5.mb-0.me-5 Proud
                          Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/58.mp3')")
              div.mx-3 
                h5.text-center
                  span.r--3.fst-italic “OU” Vowel combination words 
                  span.r--g / Palabras con combinación de vocales “OU” 
                p
                  span.r--3.fst-italic.fst-italic “OU” with short /u/ sound / 
                  span.r--gris “OU” con sonido /u/ corto 
                .row.justify-content-center
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Wouldstyle="width: 80px"
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/59.mp3')")
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Should
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/60.mp3')")
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Could
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/61.mp3')")
                p
                  span.r--3.fst-italic.fst-italic OU” with long /o/ sound /  
                  span.r--gris “OU” con sonido /o/ largo 
                .row.justify-content-center
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Shoulder
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/62.mp3')")
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Soul 
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/63.mp3')")
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Poultry
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/64.mp3')")
              div.mx-3 
                h5.text-center
                  span.r--3.fst-italic “IE” Vowel combination words  
                  span.r--g / Palabras con combinación de vocales “IE” 
                p
                  span.r--3.fst-italic.fst-italic “IE” with long /e/ sound / 
                  span.r--gris “IE” con sonido /e/ largo  
                .row.justify-content-center
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Brief
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/65.mp3')")
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Chief
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/66.mp3')")
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Grieve 
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/67.mp3')")
                p
                  span.r--3.fst-italic.fst-italic “IE” with long /i/ sound / 
                  span.r--gris “IE” con sonido /i/ largo 
                .row.justify-content-center
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Die
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/68.mp3')")
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Pie 
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/69.mp3')")
                  .col-lg-4
                    .tarjeta.color-acento-contenido--borde.border-2.d-flex.align-items-center.px-3.py-2.bg-white.justify-content-between.mb-3 
                      h5.mb-0.me-5 Lie
                      Audio.color-acento-botones.m-auto(:audio="require('@/assets/curso/temas/audios/tema4/70.mp3')")
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.4  #[em Rhythm in the phrase and intonation] (Ritmo en la frase y entonación)
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        traductor.color-primario.mb-5 
              div(slot="textoIngles")
                p.fst-italic Intonation describes how the voice rises and falls rhythmically in speech, and unlike Spanish, which is pronounced based on syllables and has graphic accents (tildes), English is pronounced based on stress but doesn’t have graphic accents, for what correctly intoning the total of the sentence is essential for in order for the oral message to be understood correctly.
                  br
                  br
                  |The three intonation patterns in English are: falling intonation, rising intonation, and falling-rising intonation.
              div(slot="textoEspanol")
                p La entonación describe cómo la voz sube y baja de manera rítmica en el habla, y a diferencia del español, que se pronuncia basándose en las sílabas y tiene acentuaciones gráficas (tildes), el inglés se pronuncia basándose en la acentuación, pero no tiene acentuaciones gráficas, por lo que entonar de manera correcta el total de la oración es indispensable para que el mensaje oral se entienda correctamente.
                  br
                  br
                  |Los tres patrones de entonación en inglés son: entonación descendente, entonación ascendente y entonación descendente-ascendente.
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/19.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/20.png', alt='')
      .col-lg-6(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--morada")
          div(titulo="<em>Falling intonation</em> / Entonación descendente")
            .tarjeta.bg-white.p-4
              p 
                span.r--3.fst-italic The voice falls on the last stressed syllable of a sentence. It is common in questions with -wh words and in affirmative statements or statements when something definite is said.
                br
                br
                span.r--gris La voz cae en la última sílaba acentuada de una frase. Es común en las preguntas con palabras -wh y en las afirmaciones o declaraciones cuando se dice algo definitivo
              h5 
                span.r--3.fst-italic For example: 
                span / Por ejemplo:
              .row.justify-content-center.mb-3
                .col-lg-3.col-6
                  img(src='@/assets/curso/temas/tema4/21.svg', alt='')
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Where are you?↘"
                      :audio="require('@/assets/curso/temas/audios/tema4/71.mp3')"
                    )
                  p.ms-4  ¿Dónde estás? ↘
              .row.justify-content-center.mb-3
                .col-lg-3.col-6
                  img(src='@/assets/curso/temas/tema4/22.svg', alt='')
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="He thinks we are good. ↘"
                      :audio="require('@/assets/curso/temas/audios/tema4/72.mp3')"
                    )
                  p.ms-4  Él piensa que estamos bien. ↘
          div(titulo="<em> Rising intonation </em> / Entonación ascendente")
            .tarjeta.bg-white.p-4
              p 
                span.r--3.fst-italic The voice is raised at the end of a sentence. It is common in yes or no questions.

                br
                br
                span.r--gris La voz se eleva al final de una oración. Es común en las preguntas de sí o no.
              h5 
                span.r--3.fst-italic For example:
                  | / Por ejemplo:
              .row.justify-content-center.mb-3
                .col-lg-3.col-6
                  img(src='@/assets/curso/temas/tema4/23.svg', alt='')
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Am I crazy?↗"
                      :audio="require('@/assets/curso/temas/audios/tema4/73.mp3')"
                    )
                  p.ms-4  ¿Estoy loca? ↗
          div(titulo="<em> Fall-rise intonation</em> / Entonación descendente-ascendente ")
            .tarjeta.bg-white.p-4
              p 
                span.r--3.fst-italic The voice falls and returns and rises on the last stressed syllable of a sentence. It is common in statements or affirmations when we do not completely agree.
                br 
                br 
                span.r--gris La voz cae y vuelve y se eleva en la última sílaba acentuada de una frase. Es común en las declaraciones o afirmaciones cuando no estamos completamente de acuerdo.
              h5 
                span.r--3.fst-italic For example:
                  | / Por ejemplo:
              .row.justify-content-center.mb-3
                .col-lg-3.col-6
                  img(src='@/assets/curso/temas/tema4/24.svg', alt='')
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                      texto="Are they your siblings?↘↗"
                      :audio="require('@/assets/curso/temas/audios/tema4/74.mp3')"
                    )
                  p.ms-4   ¿Ellos son tus hermanos? ↘↗
      p.mb-5(data-aos='fade-right')
        span.r--3 With the knowledge we now have about these pronunciation concepts, let's practice our listening skills a bit. Complete the following dialogue using intonation patterns.  
        span.r--gris / Con el conocimiento que poseemos ahora sobre estos conceptos de pronunciación, practiquemos un poco nuestra habilidad de escucha. Complete el siguiente diálogo usando los patrones de entonación.
    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad).fst-italic Use of rhythm in the phrase and intonation
      template(#descripcion-actividad) 








                    

                        





    
</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'

export default {
  name: 'Tema4',
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
          nombre: 'Carla',
          img: require('@/assets/curso/temas/tema4/bruno.svg'),
        },
        {
          nombre: 'Elena',
          img: require('@/assets/curso/temas/tema4/elena.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Carla',
          textoIng:
            'What a bummer! Wasn’t they supposed to ***  you the visa less than 2 months after it was approved?I’ven’t felt bad or anything like *** .  ↘',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/c/H35.mp3'),
          palabra: 'Greg',
        },

        {
          personaje: 'Elena',
          textoIng:
            'That’s good! Do you know *** ? . ↘↗ <br> He’sn’t here because he was sent to the hospital.',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/tema4/a2.mp3'),
          palabra: 'that',
        },
      ],
    },
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
.bg-tema4-3
  background-image: url(../assets/curso/temas/tema4/bg-1-4.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: 100%
.bg-tarjeta
  background-image: url(../assets/curso/temas/tema3/bg-tarjeta.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.audio-up
  position: absolute
  width: 100%
  top: 0
  left: 0
  transform: translateY(-40%)
</style>
