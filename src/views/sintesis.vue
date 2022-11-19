<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .tarjeta(style="background-color: #f0f4ff ").p-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-3.col-6: img(src='@/assets/curso/temas/sintesis/1.png', alt='')
        .col-lg-9
          p
            span.r--3.fst-italic Up to this point, we have been able to understand everything that has to do with how to narrate a story from the past in a structured and organized way with the help of time connectors and expressions that indicate the future in the past tense; and also various pronunciation concepts. For this reason, you are invited to notice the following conceptual scheme that summarizes the subject matter:
            br
            br
            span.r--gris Hasta este punto, hemos podido comprender todo lo que tiene que ver con cómo narrar de manera estructurada y organizada una historia del pasado con la ayuda de conectores temporales y expresiones que indican futuro en tiempo pasado; y también varios conceptos de pronunciación. Por ello, se invita a que aprecie el siguiente esquema conceptual que resume la temática tratada:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
