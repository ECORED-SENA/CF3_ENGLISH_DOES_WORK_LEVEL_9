<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Expressions to indicate future in the past] (Expresiones para indicar futuro en tiempo pasado) 
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/1.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        //TODO: Añadir traduccion de este texto
        traductor.color-primario
          div(slot="textoIngles")
              p.fst-italic Future in the past is used to express the idea that in the past you thought something would happen in the future. It doesn’t matter if you are correct or not.<br>We often use <span class= r--2><b>was/were going to</b></span> or <span class= r--2><b>was/were supposed to </b></span> to apologize for not doing something. We usually give a reason.
          div(slot="textoEspanol")
            p El futuro en el pasado se usa para expresar la idea que en el pasado usted pensó que algo sucedería en el futuro. No importa si usted está en lo correcto o no.
              br
              |A menudo, usamos #[b #[em was/were going to]] o #[b #[em was/were supposed to]] para disculparse por no hacer algo. Normalmente, damos una razón.
    p.mb-5(data-aos='fade-right')
      span.r--1.fst-italic The expressions that we are going to use to indicate the future in the past tense are "was/were going to" and "was/were supposed to". Let's see some examples:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--morada")
      div(titulo="“was/were going to”")
        .tarjeta.bg-white.p-4
          .row.justify-content-center.mb-5
            .col-lg-5.col-6
              p.mb-5 
                span.r--3.fst-italic The expression 
                  span.r--2 #[b "was/were going to"] 
                  | is used to talk about stated intentions or plans that were made and were not carried out (in the past) or will not be carried out (in the future).
                br
                br
                span.r--gris La expresión #[em #[b "was/were going to"]] se usa para hablar sobre intenciones manifestadas o planes que se hicieron y no se llevaron a cabo (en el pasado) o no se llevarán a cabo (en el futuro).
              h5
                span.r--3 #[em For example:] / Por ejemplo:
              .row.justify-content-center.mb-5
                .col-lg-3: img(src='@/assets/curso/temas/tema2/2.svg', alt='')
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.mb-3(
                      texto="Sofía was going to spend this weekend in Cartagena, but there were no hotel rooms available."
                      :audio="require('@/assets/curso/temas/audios/tema2/01.mp3')"
                    )
                  p.ms-4 Sofía iba a pasar este fin de semana en Cartagena, pero no había habitaciones de hotel disponibles.
            .col-lg-7
              table
                thead
                  tr(style="background-color: #6b8dfc")
                    th(colspan="3").text-center.text-whit.fst-italic Was / Were Going to
                tbody.fst-italic 
                  tr(style="background-color: #f0f4ff").text-center
                    td 
                      span.r--3 past of “to be”
                    td 
                      span.r--3 going to + infinitive
                    td 
                      span.r--3 meaning
                  tr
                    td.text-center 
                      span.r--2.fst-italic was/ were
                    td.text-center  
                      span.r--2 going to 
                      span.r--3 + infinitive
                    td
                      span.r--3 To talk about #[b plans we made] in the past which #[b didn´t happen] or won’t happen in the future.
                  tr
                    td(colspan="2") 
                      span.r--3 We 
                        span.r--2 #[b were going to ] 
                        |#[b visit ] the Sussex family later that year, but we didn’t go for… (some reason)
                    td 
                      span.r--3 They #[b planned to visit]  the Sussex family, but they #[b didn’t visit] them.
      
                  tr
                    td(colspan="2")
                      span.r--3  We 
                        span.r--2 #[b were going to ] 
                        | #[b spend] our anniversary in the cottage in Wales, where we had our honeymoon, but it was already booked.
                    td
                      span.r--3 They #[b planned to spend] their anniversary in the cottage in Wales, but now they #[b aren’t going to go] there.
      div(titulo="“was/were supposed to”")
        .tarjeta.bg-white.p-4
          .row.justify-content-center.mb-5
            .col-lg-5.col-6
              p.mb-5 
                span.r--3.fst-italic The expression 
                  span.r--2 #[b “was/were supposed to” ]
                  | is used to talk about things that were agreed to be done, or that people expect to be done, but in the end they were not done #[b (in the past)] nor will they be done #[b (in the future)].
                br
                br
                span.r--gris La expresión #[em #[b “was/were supposed to” ]] se usa para hablar sobre cosas a las que se accedió a hacer, o que la gente espera que se hagan, pero al final no se hicieron #[b (en el pasado)]  ni se harán #[b (en el futuro)].
              h5 #[em For example:] / Por ejemplo:
              .row.justify-content-center.mb-5
                .col-lg-3: img(src='@/assets/curso/temas/tema2/3.svg', alt='')
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.mb-3(
                      texto="You were supposed to call mom in an hour, but you left your phone at home."
                      :audio="require('@/assets/curso/temas/audios/tema2/02.mp3')"
                    )
                  p.ms-4 Se suponía que ibas a llamar a mamá en una hora, pero dejaste tu teléfono en casa.
            .col-lg-7
              table
                thead
                  tr(style="background-color: #6b8dfc")
                    th(colspan="3").text-center.text-whit.fst-italic Was / Were Supposed to
                tbody
                  tr(style="background-color: #f0f4ff").text-center.fst-italic
                    td past of “to be”
                    td supposed to + infinitive
                    td meaning
                  tr.fst-italic
                    td 
                      span.r--2 was/ were
                    td 
                      span.r--2 supposed to 
                      span.r--3 + infinitive
                    td
                      span.r--3 To talk about things #[b we agreed to do] or other people #[b expected us to do, but we didn’t do.]
                  tr
                    td(colspan="2").fst-italic 
                      span.r--3 Gloria 
                        span.r--2 #[b was supposed to ] 
                        | #[b book] the cottage months ago, but she forgot.
                    td
                      span.r--3 (Gloria #[b agreed to book] the cottage, but #[b she didn’t book it.)]
      
                  tr.fst-italic
                    td(colspan="2")
                      span.r--3 I 
                        span.r--2 was supposed to 
                        | #[b call] you back, wasn’t I? Sorry, Michelle, I was out all day.
                    td 
                      span.r--3 (Michelle #[b expected] his friend #[b to call] her back, but  #[b she didn’t.])
    .bg-tema2.mn.mb-5
      .row.justify-content-center.mb-5
        .col-lg-5.col-6(data-aos="fade-right")
          //TODO: Añadir traduccion de este texto
          traductor.color-primario.mb-5
            div(slot="textoIngles")
              p.fst-italic In sentences with the expressions <span class= r--2><b>“was/were going to”</b> </span>and  <span class= r--2><b>“was/were supposed to”</b></span>, the main verb is always written in base form. Then you can also add sentences (sometimes in the form of an apology) that explain the reasons why what was planned or agreed was not carried out. <br><br> Let’s see in the context of a conversation how these types of expressions can be used: 
            div(slot="textoEspanol")
              p En oraciones con las expresiones #[b #[em "was/were going to"]] y #[b #[em "was/were supposed to"]], siempre se escribe el verbo principal en forma base. Después, también se pueden añadir frases (a veces en forma de disculpa) que expliquen los motivos de por qué lo planeado o acordado no se llevó a cabo.
                br
                br
                |Veamos, en el contexto de una conversación, cómo se pueden usar este tipo de expresiones:

          img.mt-5(src='@/assets/curso/temas/tema2/4.jpg', alt='' style='border-radius: 20px')
        .col-lg-7
          .contenedor-dialogo
            .contenedor-dialogo__titulo: img(src='@/assets/curso/temas/tema2/5.svg', alt='').mb-0
            .contenedor-dialogo__dialogo.pt-0.p-5
              .tarjeta.bg-white.p-4(style='border-radius: 0px 0px 10px 10px')
                  .row.justify-content-center.align-items-center.mb-2
                    .col-2
                      h3(style='color: #8284d2 ')  Martha
                    .col-10 
                      .contenedor-traductor.mb-5(style='background-color: #8284d2')
                        .contenedor-traductor__eng.d-flex.justify-content-between
                          p.fst-italic
                            span.text-white Weren’t you 
                            span.r--3 supposed to 
                            span.text-white travel abroad these days?
                          Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/H12_1.mp3')")
                        .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                          p ¿No se suponía que viajarías al extranjero por estos días?
                        a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fed947') Ver traducción
                  .row.justify-content-center.align-items-center.mb-2
                    .col-10 
                      .contenedor-traductor.mb-5(style='background-color: #e1e8ff')
                        .contenedor-traductor__eng.d-flex.justify-content-between
                          p.fst-italic 
                            span.r--3 Yes, I was 
                              span.r--2 supposed to 
                              | catch the flight to Boston by the end of this month.
                          Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/H12_2.mp3')")
                        .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                          p Sí, se suponía que tomaría un vuelo a Boston a finales de este mes.
                        a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fed947') Ver traducción
                    .col-2
                      h3(style='color: #3c3fa7 ')  Gabriela
                  .row.justify-content-center.align-items-center.mb-2
                    .col-2
                      h3(style='color: #8284d2 ')  Martha
                    .col-10 
                      .contenedor-traductor.mb-5(style='background-color: #8284d2')
                        .contenedor-traductor__eng.d-flex.justify-content-between
                          p.fst-italic.text-white  You told me something like that the last time we spoke, but what exactly happened?
                          Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/H12_3.mp3')")
                        .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                          p Me dijiste algo así la última vez que hablamos, pero ¿qué pasó exactamente?
                        a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fed947') Ver traducción
                  .row.justify-content-center.align-items-center.mb-2
                    .col-10 
                      .contenedor-traductor.mb-5(style='background-color: #e1e8ff')
                        .contenedor-traductor__eng.d-flex.justify-content-between
                          p.fst-italic 
                            span.r--3 The thing is that I 
                              span.r--2 was going to 
                              | study English this upcoming semester in the U.S., but my student visa was delayed.
                          Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/H12_4.mp3')")
                        .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                          p El caso es que iba a estudiar inglés el próximo semestre en los Estados Unidos, pero mi visa de estudiante se retrasó.
                        a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fed947') Ver traducción
                    .col-2
                      h3(style='color: #3c3fa7 ')  Gabriela
      .row.justify-content-center.mb-5
        .col-lg-5(data-aos="fade-right")
          //TODO: Añadir traduccion de este texto
          traductor.color-primario
            div(slot="textoIngles")
                p.fst-italic When we speak with the expressions 
                  span.r--2.fst-italic.fw-bold “was/were going to” 
                  | or 
                  span.r--2.fst-italic.fw-bold “was/were supposed to”
                  | , it implies that someone expects some action to be carried out 
                  span.r--2.fst-italic.fw-bold in the past 
                  | or 
                  span.r--2.fst-italic.fw-bold in the future.
                  | To differentiate between these two tenses, time markers can be used to indicate whether it is something that was planned or expected to be done in the past or in the future.
            div(slot="textoEspanol")
                p Cuando se habla de las expresiones #[em #[b "was/were going to"]] o #[em #[b "was/were supposed to"]], implica que alguien espera que se realizara alguna acción en el pasado o en el futuro. Para hacer la diferencia entre estos dos tiempos, se pueden utilizar marcadores temporales para señalar si es algo que se planeaba hacer o que se tenía la expectativa de que se realizara en el pasado o en el futuro.
                  br
                  |Por ejemplo, no es lo mismo:

        .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/6.jpg', alt='' style='border-radius: 20px')
      h4.text-center.fst-italic For example, it is not the same:
      .row.justify-content-center.mb-5
        .col-lg-5
          .tarjeta.p-4.d-flex.aling-items-center.h-100(style='background-color: #6b8dfc')
            img(src='@/assets/curso/temas/tema2/7.svg', alt='' style="width: 103px ").me-4 
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                texto="We were supposed to go to the beach yesterday, but it rained. (past)"
                :audio="require('@/assets/curso/temas/audios/tema2/03.mp3')"
              )
        .col-lg-5
          .tarjeta.p-4.d-flex.aling-items-center.h-100(style='background-color: #6b8dfc')
            img(src='@/assets/curso/temas/tema2/7.svg', alt='' style="width: 103px ").me-4 
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                texto="We were supposed to go to the beach tomorrow, but the weather forecast says that it is going to rain. (future)"
                :audio="require('@/assets/curso/temas/audios/tema2/04.mp3')"
              )
    p.mb-5(data-aos='fade-right') 
      span.r--3 Now let’s see the sentence structures with “was/were going to” or “was/were supposed to”. 
      span.r--gris / Ahora, veamos las estructuras de las oraciones con “was/were going to” o “was/were supposed to”.
    .bg-tema2-2.mn.mb-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.bg-white.p-5
            SlyderA(tipo='b')
              div.px-3
                p.text-center 
                  span.r--3.fst-italic #[b Affirmative sentences was/were going to]
                p 
                  span.r--3 #[b #[em Affirmative] / Afirmativa]
                img(src='@/assets/curso/temas/tema2/8.svg', alt='').mb-5
                .row.mb-3
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/9.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="He was <span class= r--2>going to</span> visit his girlfriend tomorrow night."
                    :audio="require('@/assets/curso/temas/audios/tema2/05.mp3')"
                    )
                    p.ms-4 (Él) Iba a visitar a su novia mañana por la noche.
                .row
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/10.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="We were <span class= r--2>going to</span> spend time with our grandma abroad next summer."
                    :audio="require('@/assets/curso/temas/audios/tema2/06.mp3')"
                    )
                    p.ms-4 (Nosotros) Íbamos a pasar tiempo con nuestra abuela en el extranjero el próximo verano.
              div.px-3
                p.text-center 
                  span.r--3.fst-italic #[b Negative sentences was/were going to ]
                p 
                  span.r--3 #[b #[em Negative] / Negativa ]
                img(src='@/assets/curso/temas/tema2/11.svg', alt='').mb-5
                .row.mb-3
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/12.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="He was not <span class= r--2>going to </span> visit his girlfriend tomorrow night."
                    :audio="require('@/assets/curso/temas/audios/tema2/07.mp3')"
                    )
                    p.ms-4 (Él) No iba a visitar a su novia mañana por la noche.
                .row
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/13.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="We were not <span class= r--2>going to </span> spend time with our grandma abroad next summer."
                    :audio="require('@/assets/curso/temas/audios/tema2/08.mp3')"
                    )
                    p.ms-4 (Nosotros) No íbamos a pasar tiempo con nuestra abuela en el extranjero el próximo verano.
              div.px-3
                p.text-center 
                  span.r--3.fst-italic #[b “Yes” or “No” questions was/were going to ]
                p 
                  span.r--3 #[b #[em “Yes” or “No” Questions] / Preguntas de “Sí” o “No” ]
                img(src='@/assets/curso/temas/tema2/14.svg', alt='').mb-5
                .row.mb-3
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/9.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="Was he <span class= r--2> going to</span> visit his girlfriend tomorrow night?"
                    :audio="require('@/assets/curso/temas/audios/tema2/09.mp3')"
                    )
                    p.ms-4 ¿(Él) Iba a visitar a su novia mañana por la noche?
                .row
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/10.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="Were we <span class= r--2> going to</span> spend time with our grandma abroad next summer?"
                    :audio="require('@/assets/curso/temas/audios/tema2/10.mp3')"
                    )
                    p.ms-4 ¿(Nosotros) Íbamos a pasar tiempo con nuestra abuela en el extranjero el próximo verano?
              div.px-3
                p.text-center 
                  span.r--3.fst-italic #[b Information questions was/were going to ]
                p 
                  span.r--3 #[b #[em Information questions was/were going to ] / Preguntas de información ]
                img(src='@/assets/curso/temas/tema2/15.svg', alt='').mb-5
                .row.mb-3
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/9.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="Who was he <span class= r--2>going to</span> visit tomorrow night?"
                    :audio="require('@/assets/curso/temas/audios/tema2/11.mp3')"
                    )
                    p.ms-4 ¿(Él) A quién iba a visitar mañana por la noche?
                .row
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/10.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="When were we <span class= r--2>going to</span> spend time with our grandma abroad?"
                    :audio="require('@/assets/curso/temas/audios/tema2/12.mp3')"
                    )
                    p.ms-4 ¿(Nosotros) Cuándo íbamos a pasar tiempo con nuestra abuela en el extranjero?
              div.px-3
                p.text-center 
                  span.r--3.fst-italic #[b Affirmative sentences was/were supposed to ]
                p 
                  span.r--3 #[b #[em Affirmative] / Afirmativa]
                img(src='@/assets/curso/temas/tema2/16.svg', alt='').mb-5
                .row.mb-3
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/18.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="I was <span class= r--2>supposed to</span> work next monday."
                    :audio="require('@/assets/curso/temas/audios/tema2/13.mp3')"
                    )
                    p.ms-4 Se suponía que (yo) iba a trabajar el próximo lunes.
                .row
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/19.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="They were <span class= r--2>supposed to</span> travel to Europe by the end of this year."
                    :audio="require('@/assets/curso/temas/audios/tema2/14.mp3')"
                    )
                    p.ms-4 Se suponía que (ellos) viajarían a Europa a finales de este año.
              div.px-3
                p.text-center 
                  span.r--3.fst-italic #[b Negative sentences was/were supposed to ]
                p 
                  span.r--3 #[b #[em Negative] / Negativa ]
                img(src='@/assets/curso/temas/tema2/17.svg', alt='').mb-5
                .row.mb-3
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/18.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="I was not <span class= r--2>supposed to</span> work next monday."
                    :audio="require('@/assets/curso/temas/audios/tema2/15.mp3')"
                    )
                    p.ms-4 Se suponía que (yo) no trabajaría el próximo lunes.
                .row
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/19.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="They were not <span class= r--2>supposed to</span> travel to Europe by the end of this year."
                    :audio="require('@/assets/curso/temas/audios/tema2/16.mp3')"
                    )
                    p.ms-4 Se suponía que (ellos) no viajarían a Europa a finales de este año.
              div.px-3
                p.text-center 
                  span.r--3.fst-italic #[b “Yes” or “No” questions was/were supposed to ]
                p 
                  span.r--3 #[b #[em “Yes” or “No” Questions] / Preguntas de “Sí” o “No” ]
                img(src='@/assets/curso/temas/tema2/20.svg', alt='').mb-5
                .row.mb-3
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/18.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="Was I <span class= r--2>supposed to</span> work next monday?"
                    :audio="require('@/assets/curso/temas/audios/tema2/17.mp3')"
                    )
                    p.ms-4 ¿Se suponía que (yo) iba a trabajar el próximo lunes?
                .row
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/19.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="Were they <span class= r--2>supposed to</span> travel to Europe by the end of this year?"
                    :audio="require('@/assets/curso/temas/audios/tema2/18.mp3')"
                    )
                    p.ms-4 ¿Se suponía que (ellos) viajarían a Europa a finales de este año?
              div.px-3
                p.text-center 
                  span.r--3.fst-italic #[b Information questions was/were supposed to ]
                p 
                  span.r--3 #[b #[em Information questions] / Preguntas de información ]
                img(src='@/assets/curso/temas/tema2/21.svg', alt='').mb-5
                .row.mb-3
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/18.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="When was I <span class= r--2>supposed to</span> work? "
                    :audio="require('@/assets/curso/temas/audios/tema2/19.mp3')"
                    )
                    p.ms-4 ¿Cuándo se suponía que (yo) iba a trabajar?
                .row
                  .col-lg-2.col-6
                    img.d-inline-block(src='@/assets/curso/temas/tema2/19.svg', alt='' style='width: 103px').me-3
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.d-block(
                    texto="Where were they <span class= r--2>supposed to</span> travel by the end of this year?"
                    :audio="require('@/assets/curso/temas/audios/tema2/20.mp3')"
                    )
                    p.ms-4 ¿Adónde se suponía que (ellos) viajarían a finales de este año?
    p.mb-5(data-aos='fade-right') 
      span.r--3 Let’s practice a little the structure of sentences with expressions to indicate the future in the past tense. Complete the following dialogue. 
      span.r--gris / Practiquemos un poco la estructura de oraciones con expresiones para indicar futuro en tiempo pasado. Complete el siguiente diálogo. 
    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad)  Completa la conversación.
      template(#descripcion-actividad) 


</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema2',
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
          nombre: 'Gabriela',
          img: require('@/assets/curso/temas/tema1/alex.svg'),
        },
        {
          nombre: 'Martha',
          img: require('@/assets/curso/temas/tema1/gina.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Martha',
          textoIng:
            'What a bummer! Wasn’t they supposed to ***  you the visa less than 2 months after it was approved?',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/tema2/a2.mp3'),
          palabra: 'give',
        },

        {
          personaje: 'Gabriela',
          textoIng:
            'That was what they were *** to do, that was what they agreed to.',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/c/H16.mp3'),
          palabra: 'supposed',
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

.acordion__accion__btn--b
  border: 0
  background-color: $color-acento-botones
.bg-tema2
  background-image: url(../assets/curso/temas/tema2/bg-2.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.bg-tema2-2
  background-image: url(../assets/curso/temas/tema2/bg-3.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
</style>
