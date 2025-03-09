<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El diagrama de flujo describe la Gestión y condiciones de devolución de mercancías y objetos, abarcando desde la definición de las devoluciones, sus características, causales y tipos, hasta la atención al cliente en el manejo de quejas y reclamos. Se detallan aspectos como la especificación de los productos, las políticas de devolución, los acuerdos comerciales con clientes y proveedores, la documentación necesaria, incluyendo el proceso de devolución y recepción, y la importancia de los informes sobre devoluciones para la toma de decisiones. Todo esto con el fin de ofrecer una visión integral de la gestión de devoluciones, asegurando un proceso eficiente y satisfactorio tanto para la empresa como para el cliente.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", alt="El esquema aborda el diseño y patronaje en marroquinería, destacando cuatro áreas clave: diseño y modelado, desarrollo de productos en cuero, herramientas visuales como el Mood Board e innovación y tendencias.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
