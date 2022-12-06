<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[em Telling stories about the past] (Contando historias del pasado)
    .bg-tema3.mn
      p.mb-5(data-aos='fade-right') #[b Narrative structure in a story refers to how a story is ordered and shaped. When telling a story, two of the most important variables are:] / La estructura narrativa en una historia hace referencia a cómo se ordena y da forma a una historia. A la hora de contar una historia, dos de las variables más importantes son:
      .row.justify-content-center.mb-5
        .col-lg-5
          .tarjeta-avatar-personalizada.bg-tarjeta.p-4.tarjeta.h-100.mb-5
              .imagen: img(src='@/assets/curso/temas/tema3/2.svg', alt='')
              traductor.color-primario
                div(slot="textoIngles")
                  p.fst-italic 
                    span.r--3 #[b Who's telling the story? Or from what perspective is he doing it?]
                    br
                    br
                    |In other words, is the narrator (ourselves) the main character to whom the events happen? Or is he telling someone else's story?
                div(slot="textoEspanol")
                  p #[b ¿Quién está contando la historia? ¿O desde qué perspectiva lo está haciendo?]
                    br
                    br
                    |En otras palabras, ¿es el narrador (nosotros mismos) el personaje principal al que le ocurren los sucesos? ¿O está contando la historia de alguien más?

        .col-lg-5
          .tarjeta-avatar-personalizada.bg-tarjeta.p-4.tarjeta.h-100.pb-0
            .imagen: img(src='@/assets/curso/temas/tema3/2.svg', alt='')
            traductor.color-primario
              div(slot="textoIngles")
                p.fst-italic 
                  span.r--3 #[b How to order the events in a story?]
                  br
                  br
                  |The events in a story can be ordered in a logical and chronological way (
                  span.r--2.fw-bold linear narration
                  | ); in a non-chronological way, starting in the middle and constantly jumping in time between various moments in the past and present (
                  span.r--2.fw-bold non-linear narration
                  |); or you can start at the end of the story and go back to the origins of the narrative (
                  span.r--2.fw-bold circular narrative - 
                  |this style is used mostly in fiction).
              div(slot="textoEspanol")
                  p #[b ¿Cómo ordenar los eventos en una historia?]
                    br
                    br
                    |Los acontecimientos en una historia pueden ordenarse de una manera lógica y cronológica  (#[b narración lineal]); de una forma no cronológica, que comience en la mitad y  que salte en el tiempo entre varios momentos del pasado y del presente, constantemente  (#[b narración no lineal]); o también se puede comenzar al final de la historia y volver a los orígenes de la narración  (#[b narración circular] - este estilo se usa más que todo en la ficción).
    p(data-aos='fade-right') 
      span.r--3 #[em Here, initially, we are going to learn the most traditional way of telling a story, which is through a linear narrative.] 
      span.r--gris / Aquí, en un principio, vamos a aprender la forma más tradicional de contar una historia, que es por medio de una narración lineal.
    .contenedor-dialogos
      .row.justify-content-center.mb-5
        .col-lg-3.col-6: img(src='@/assets/curso/temas/tema3/3.svg', alt='')
        .col-lg-7
          .row.justify-content-end.align-items-center.mb-2
            .col-2
              h3(style='color: #FC5F65 ')  
                span(style="background-color: #FFDFE0 ").p-2 Julia
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #FFF0F1')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic  
                    span.r--2 Tell me what happened to your car the other night.
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/H18_1.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                  p Cuéntame qué fue lo que le pasó a tu carro la otra noche.
                a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fed947') Ver traducción
          .row.justify-content-center.align-items-center.mb-2
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #e1e8ff')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic 
                    span.r--3 That was a very strange event. A couple of nights ago, I went to a movie with my roommate and a few other people from our dorm.
                    
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/H18_2.mp3')" style="width: 80px")
                .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                  p Ese fue un evento muy extraño. Hace un par de noches, fui a ver una película con mi compañero de cuarto y algunas otras personas de nuestro dormitorio
                a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fed947') Ver traducción
            .col-2
              h3(style='color: #3c3fa7 ')  
                span(style="background-color: #C4D1FF ").p-2 Diana
          .row.justify-content-end.align-items-center.mb-2
            .col-2
              h3(style='color: #FC5F65 ')  
                span(style="background-color: #FFDFE0 ").p-2 Julia
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #FFF0F1')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic  
                    span.r--2 And what happened?
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/temas/audios/c/H18_3.mp3')")
                .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                  p ¿Y qué pasó?
                a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fed947') Ver traducción
          .row.justify-content-center.align-items-center.mb-2
            .col-10 
              .contenedor-traductor.mb-5(style='background-color: #e1e8ff')
                .contenedor-traductor__eng.d-flex.justify-content-between
                  p.fst-italic.pe-5 
                    span.r--3 After watching the movie, we left the theater and imagine our surprise when we got to the car to find the windshield covered with slices of cheese.
                    
                  Audio.color-acento-botones(:audio="require('@/assets/curso/temas/audios/c/H18_4.mp3')" style="width: 80px")
                .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                  p Después de ver la película, salimos del cine e imagínate nuestra sorpresa cuando llegamos al carro y encontramos el parabrisas cubierto de lonchas de queso.
                a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fed947') Ver traducción
            .col-2
              h3(style='color: #3c3fa7 ')  
                span(style="background-color: #C4D1FF ").p-2 Diana
    p.mb-5(data-aos='fade-right') 
      span.r--3 Although there is no exact equation that tells us how to tell a story, there is usually a useful order to do things. This structure is sometimes known as “Story Mountain.” 
      span.r--gris / Si bien no hay una ecuación exacta que nos diga cómo narrar una historia, suele haber un orden útil para hacer las cosas. A esta estructura se le conoce a veces como “montaña de la historia”.
    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta(style="background-color: #E1E8FF ").p-3.position-relative.me-lg-5
          .imagen-tarjeta
            img(src='@/assets/curso/temas/tema3/5.svg', alt='')
          .row.mb-5
            .col-lg-10
              .row
                .col-lg-10
                  img(src='@/assets/curso/temas/tema3/4.svg', alt='').mb-5
              .d-flex.flex-wrap.noinput 
                TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                  texto="1-Introduction"
                  :audio="require('@/assets/curso/temas/audios/tema3/1.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                  texto="2-Inciting incident"
                  :audio="require('@/assets/curso/temas/audios/tema3/2.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                  texto="3- Problem"
                  :audio="require('@/assets/curso/temas/audios/tema3/3.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                  texto="4-The stakes"
                  :audio="require('@/assets/curso/temas/audios/tema3/4.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                  texto="5-Rising action"
                  :audio="require('@/assets/curso/temas/audios/tema3/5.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                  texto="6-Climax"
                  :audio="require('@/assets/curso/temas/audios/tema3/6.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                  texto="7-Falling action"
                  :audio="require('@/assets/curso/temas/audios/tema3/7.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.bg-white.mx-1(
                  texto="8-Resolution"
                  :audio="require('@/assets/curso/temas/audios/tema3/8.mp3')"
                )
    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-5(data-aos='fade-right') 
          span.r--3 After identifying the structure with the “story mountain” to tell stories, we invite you to watch some videos where it is related: the Introduction, 
          span.r--2 Climax 
          | and 
          span.r--2 Denouement. 
          span.r--gris / Después de identificar la estructura con la “story mountain” para narrar historias, le invitamos a observar algunos videos donde se relacionan: el inicio, el desarrollo y la conclusión.
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Introduction (Inicio)
    traductor.color-primario.mb-5 
      div(slot="textoIngles")
        p.fst-italic The 
          span.r--2 introduction 
          | is where the author introduces the setting and characters of their story, with all their goals and motivations. The narrative usually begins in balance, but an action or character breaks the balance (an 
          span.r--2.fw-bold inciting incident
          | ), and early we are presented with both the 
          span.r--2.fw-bold problem 
          | (which is what the story is mostly going to be about) and 
          span.r--2.fw-bold the stakes 
          | for the main character (what he can win or lose). Let’s see an example.
      div(slot="textoEspanol")
        p El #[b inicio] es donde el autor presenta el escenario y a los personajes de su historia, con todas sus metas y motivaciones. La narración suele comenzar en equilibrio, pero una acción o personaje rompe el equilibrio (un #[b incidente de estímulo]), y desde temprano se nos presenta tanto el #[b problema] (que es de lo que la historia va a tratar en su mayoría) como #[b lo que está en juego] para el personaje principal (lo que puede ganar o perder). Veamos un ejemplo.
    figure.mb-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7vhSgoPEqx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Climax (Desarrollo)
    traductor.color-primario.mb-5 
      div(slot="textoIngles")
        p.fst-italic To enter the development of the story, there is the 
          span.r--2.fw-bold rising of the action
          |, which can be the unfolding of certain events that help us understand the problem, and a search to restore the balance lost with the previous incidents begins. Then, the narration continues until the 
          span.r--2.fw-bold climax
          |, which is the most exciting part of the story and it is usually a great event that serves as a turning point for the events. Let’s see an example.
      div(slot="textoEspanol")
        p Para entrar al desarrollo de la historia, tenemos el aumento de la acción, lo cual puede ser el desenvolvimiento de ciertos eventos  que nos ayudan a entender el problema, y comienza una búsqueda para restaurar el equilibrio perdido con los incidentes anteriores. Luego, la narración continúa hasta el punto culminante, que es la parte más emocionante de la historia y suele ser un gran acontecimiento que sirve de punto de inflexión para los eventos. Veamos un ejemplo.
    figure.mb-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rOhgTT_LqVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Denouement (Conclusión)
    traductor.color-primario.mb-5 
      div(slot="textoIngles")
        p.fst-italic To enter the denouement of the story, we have the 
          span.r--2.fw-bold falling action
          | , which are events that occur after the climax that lead to the 
          span.r--2.fw-bold resolution 
          | of the problem, and the balance is restored. Let’s see an example.
      div(slot="textoEspanol")
        p Para entrar a la conclusión de la historia, tenemos el descenso de la acción, que son eventos que ocurren después del punto culminante que conducen a la resolución del problema, y se restablece el equilibrio. Veamos un ejemplo.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5vWQAqKTJsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'

export default {
  name: 'Tema3',
  components: {
    traductor,
  },
  data: () => ({
    dial1: true,
    dial2: true,
    dial3: true,
    dial4: true,
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
.bg-tema3
  background-image: url(../assets/curso/temas/tema3/bg-1.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.bg-tarjeta
  background-image: url(../assets/curso/temas/tema3/bg-tarjeta.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.tarjeta-avatar-personalizada
  margin-top: 50px
  position: relative
  .imagen
    margin-top: 2rem
    margin-bottom: 0
    position: inherit
    top: 0
    left: 0
    width: 100%
    transform: translateY(-40%)
    img
      width: 400px
      margin: 0 auto
  .traductor
    margin-top: -5rem
.noinput
  .tarjeta-audio__input
    display: none
.imagen-tarjeta
  position: absolute
  bottom: 0
  right: 0
  width: 100%
  transform: translateX(40%)
  img
    width: 295px
    margin: 0 auto
</style>
