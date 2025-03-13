<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Informes sobre devoluciones
      
      p.mb-4 Los informes sobre devoluciones varían según las políticas internas de cada organización y los acuerdos comerciales establecidos entre proveedor y cliente, no obstante, es esencial contar con los motivos específicos que justifiquen la devolución, ya que esta información permite tomar las decisiones adecuadas dentro de la empresa.
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-md-7.col-9.mb-3
          img.img-a.img-t(src='@/assets/curso/tema6/2.png', alt='tema1')(data-aos="fade-down")
        .col-lg-7
          img.img-a.img-t.mb-0.mov1.d-none.d-lg-block(src='@/assets/curso/tema6/1.svg', alt='tema1')(data-aos="fade-down")
          p.mb-0 La correcta gestión de las devoluciones no solo afecta los inventarios, sino que también tiene implicaciones financieras significativas, los ajustes necesarios en las cuentas deben ser realizados de acuerdo con el tipo de devolución, para asegurar la correcta conciliación de los movimientos y mantener la precisión en los registros contables y financieros, es fundamental que estos informes sean precisos y oportunos, facilitando así el análisis de las devoluciones y su impacto en los procesos operativos y financieros de la empresa.

      .titulo-sexto.color-secundario.mb-3
        h5 Figura 6. 
        | Informe registro de devoluciones

      .row.fondo4.p-4.p-lg-5.p-md-3.mb-1(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12
          .row.justify-content-center 
          
          .row.justify-content-center.align-items-center
            .col-lg-11
              img(src='@/assets/curso/tema6/3.svg', alt='Diagrama de flujo que detalla el "Informe Registro de Devoluciones", incluyendo definiciones de devoluciones, tipos (proveedores, garantía, tienda, consumidor, clientes, mercancía), y políticas de gestión de devoluciones, con texto legible en cada sección.')
      figcaption.mb-5 Fuente. Mercadotecnia y comunicación corporativa 
      .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
        h4.mb-0.ps-5.pe-5 Tipos de informes
      
      .row.fondo2.align-items-center.p-2.mb-0(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center

          .row.justify-content-center.mb-4
            .col-lg-3.col-md-6.mb-4
              .overflow-hidden.h-100.bg77.p-4(data-aos="fade-left")
                img.img-a.img-t.mb-4(src='@/assets/curso/tema6/4.svg', alt='tema1')
                p.mb-4.text-center #[b a) Informes de devolución por producto:] focalizados en la cantidad de productos devueltos, con detalles sobre cada uno.
            .col-lg-3.col-md-6.mb-4
              .overflow-hidden.h-100.bg77.p-4(data-aos="fade-left")
                img.img-a.img-t.mb-4(src='@/assets/curso/tema6/5.svg', alt='tema1')
                p.mb-4.text-center #[b b) Informes de devolución por cliente:] analizan las devoluciones a nivel de cliente, permitiendo identificar patrones en los hábitos de compra.
            .col-lg-3.col-md-6.mb-4
              .overflow-hidden.h-100.bg77.p-4(data-aos="fade-left")
                img.img-a.img-t.mb-4(src='@/assets/curso/tema6/6.svg', alt='tema1')
                p.mb-4.text-center #[b c) Informes de devolución por motivo:] se centran en las razones detrás de las devoluciones, ayudando a mejorar productos y servicios.
            .col-lg-3.col-md-6.mb-4
              .overflow-hidden.h-100.bg77.p-4(data-aos="fade-left")
                img.img-a.img-t.mb-4(src='@/assets/curso/tema6/7.svg', alt='tema1')
                p.mb-4.text-center #[b d) Informes financieros de devoluciones:] enfocados en el impacto económico de las devoluciones, incluyendo los costos asociados.
    
          .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
            h4.mb-0.ps-5.pe-5 Importancia de los informes sobre devoluciones
    
          p.mb-4 #[b Control de Inventarios:] ayudan a gestionar y ajustar el inventario, especialmente cuando los productos devueltos pueden ser revendidos.

          .row.justify-content-center(data-aos="fade-down")
            .col-md-6.col-lg-4.col-12.mb-4
              .tarjeta-avatar
                img.width(src='@/assets/curso/tema6/8.svg' alt='')
                .tarjeta.bg8
                  .p-4.my-4
                    h4.mb-3.text-center a) Análisis de tendencias:
                    p.mb-0.text-center Permiten detectar patrones en las devoluciones, lo que puede ayudar a mejorar la calidad de los productos o el servicio al cliente.
          
            .col-md-6.col-lg-4.col-12.mb-4
              .tarjeta-avatar
                img.width(src='@/assets/curso/tema6/9.svg' alt='')
                .tarjeta.bg9
                  .p-4.my-4
                    h4.mb-3.text-center b) Mejoras en la experiencia del cliente:
                    p.mb-0.text-center Analizar las razones de las devoluciones puede proporcionar información valiosa para reducir la tasa de devoluciones.
      
            .col-md-6.col-lg-4.col-12.mb-4
              .tarjeta-avatar
                img.width(src='@/assets/curso/tema6/10.svg' alt='')
                .tarjeta.bg10
                  .p-4.my-4
                    h4.mb-3.text-center c) Gestión financiera:
                    p.mb-0.text-center Permiten a las empresas controlar el impacto financiero de las devoluciones en sus balances.

      p.mb-0 Este tipo de informe es crucial para las empresas, ya que no solo facilita la gestión operativa de las devoluciones, sino que también proporciona información estratégica para mejorar la calidad del producto y la satisfacción del cliente.


  </template>

<script>
export default {
  name: 'Tema6',
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
