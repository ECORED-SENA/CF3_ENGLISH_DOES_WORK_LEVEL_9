<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg-intro.mn
      .row.justify-content-center.mb-5
        .col-lg-4.col-6(data-aos="fade-right")
          img(src='@/assets/curso/temas/intro/1.png', alt='')
        .col-lg-8(data-aos="fade-left")
          .tarjeta.bg-white.tarjeta-corazon.p-5
            p Este nivel de formación bilingüe se enfoca en aprender a contar historias del pasado y cómo estructurarlas correctamente en su 
              span.r--2.fw-bold inicio, 
              | su 
              span.r--2.fw-bold desarrollo 
              | y su 
              span.r--2.fw-bold desenlace; 
              | para esto, debemos aprender cómo ordenar y conectar nuestras ideas con la ayuda de 
              span.r--2.fw-bold palabras de transición
              | , que en la historia nos dicen qué cosas ocurrieron anteriormente, simultáneamente, posteriormente, o qué evento concluyó la historia. También, para enriquecer nuestra narración, tenemos recursos como las expresiones 
              span.r--2.fst-italic.fw-bold “was/were going to” 
              | y 
              span.r--2.fst-italic.fw-bold “was/were supposed to”
              | , que nos hablan de cosas que se esperaban que se llevarán a cabo o que se planificaron en el pasado, pero al final no se van a realizar en el futuro. Por último se aprenderá sobre diferentes conceptos de pronunciación que mejorarán nuestras habilidades conversacionales. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo, y para comenzar, se invita a explorar el video que se presenta a continuación:
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6: img(src='@/assets/curso/temas/intro/2.svg', alt='')
              .col-lg-4: p 
                span.r--4 Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
              .col-lg-4
                a.anexo(:href="obtenerLink('downloads/guion.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.text-primary #[b.text-primary Anexo.] Guion esp and ingl_Video introductorio

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
