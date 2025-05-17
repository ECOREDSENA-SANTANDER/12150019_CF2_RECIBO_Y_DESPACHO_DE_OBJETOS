<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Documentación
    
    p.mb-5 Los procedimientos de devolución varían según las políticas de cada organización y, como se ha mencionado a lo largo del material, dependen de los acuerdos comerciales establecidos. A continuación, se detallan los pasos generales para la devolución de productos desde el cliente final al proveedor, como en el caso de un almacén de cadena o tienda por departamentos:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-2.pe-0
        img(src='@/assets/curso/tema1/sub.svg', alt='')
      .col.ps-0
        .sub.p-2.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Proceso de devolución por parte del cliente

    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg6.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema5/1.svg', alt='tema1')
          .bg7.p-1.mb-4
            h5.text-center.mb-0 Diligenciamiento de formato de solicitud
          p.mb-p.text-center Si el almacén lo requiere, el cliente debe completar un formato de solicitud de devolución, en algunos casos, el cliente puede simplemente informar al administrador del almacén sobre su necesidad de devolver el producto.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg6.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema5/2.svg', alt='tema1')
          .bg7.p-1.mb-4
            h5.text-center.mb-0 Adjuntar la factura de compra
          p.mb-p.text-center El cliente debe presentar la factura original de compra junto con el producto que desea devolver.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg6.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema5/3.svg', alt='tema1')
          .bg7.p-1.mb-4
            h5.text-center.mb-0 Esperar respuesta o cambio del producto
          p.mb-p.text-center El cliente debe esperar la respuesta del establecimiento, ya sea para obtener un cambio de producto o recibir la devolución.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-2.pe-0
        img(src='@/assets/curso/tema1/sub.svg', alt='')
      .col.ps-0
        .sub.p-2.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Proceso de recepción y manejo de la devolución

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-3.col-md-6.col-7.mb-4
        img(src='@/assets/curso/tema5/4.png', alt='')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5(data-aos="fade-right")
          .row.col-xl-11.m-auto(titulo="Revisión del producto")
            p.mb-0 El personal encargado de recibir la devolución debe inspeccionar el producto para confirmar su estado y validez para el cambio o devolución.
          .row.col-xl-11.m-auto(titulo="Verificación de la factura")
            p.mb-0 Es crucial verificar la factura para asegurarse de que cumpla con los requisitos de tiempo para devolución, generalmente, las facturas especifican un plazo dentro del cual el producto puede ser devuelto.
          .row.col-xl-11.m-auto(titulo="Cambio de producto (por ejemplo, talla o color)")
            p.mb-0 Si el producto se cambia por otro de diferente talla o color, el nuevo artículo debe ser ingresado al sistema de inventarios, esto asegura que la unidad original se retire y el nuevo producto se registre como disponible para la venta.
          .row.col-xl-11.m-auto(titulo="Producto defectuoso o averiado")
            p.mb-0 Si el producto presenta un defecto o avería, se debe investigar la causa del problema; si se determina que el daño es responsabilidad del almacén, el producto debe ser cambiado por uno nuevo, en este caso, se debe registrar la salida del producto defectuoso en el sistema y colocarlo en un área separada para su posterior revisión, este producto no puede ser devuelto al inventario a menos que cuente con un código específico para productos defectuosos.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-2.pe-0
        img(src='@/assets/curso/tema1/sub.svg', alt='')
      .col.ps-0
        .sub.p-2.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0.mx-1 Devoluciones de clientes a proveedores (lotes o grandes cantidades)

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-md-2.col-4.mb-3
        img.img-a.img-t(src='@/assets/curso/tema1/1.svg', alt='tema1')(data-aos="fade-down")
      .col-lg-11.col-md-10.mb-0
        p El proceso de devolución de productos en lotes o grandes cantidades requiere una coordinación detallada entre el cliente y el proveedor, a continuación se describen los pasos involucrados tanto para el cliente como para el proveedor:
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-2.pe-0
        img(src='@/assets/curso/tema1/sub.svg', alt='')
      .col.ps-0
        .sub.p-2.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Proceso del cliente (despacho de la devolución)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-7.col-9.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema1/21.png', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-botones.mod
          .tarjeta.color-acento-botones.bg5.p-4(titulo="Informar al proveedor")
            p.mb-0 El cliente debe comunicar al proveedor la intención de devolver los productos, indicando las razones de la devolución.
          .tarjeta.color-acento-botones.bg5.p-4(titulo="Coordinar la devolución")
            p.mb-0 El cliente y el proveedor deben coordinar los detalles logísticos para la devolución de los artículos.
          .tarjeta.color-acento-botones.bg5.p-4(titulo="Preparación de la mercancía")
            p.mb-0 El cliente debe rotular adecuadamente los productos, incluyendo la referencia, la cantidad y el nombre del proveedor. Además, es importante alistar toda la documentación necesaria, asegurándose de que los productos ya hayan sido descargados del inventario para evitar que se utilicen en algún proceso interno.
          .tarjeta.color-acento-botones.bg5.p-4(titulo="Coordinación de la entrega")
            p.mb-0 El cliente debe organizar la entrega de los productos al proveedor de acuerdo con las condiciones previamente acordadas.
          .tarjeta.color-acento-botones.bg5.p-4(titulo="Entrega de artículos y documentos")
            p.mb-0 El cliente entrega los artículos de devolución junto con los documentos pertinentes que respalden la transacción.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-2.pe-0
        img(src='@/assets/curso/tema1/sub.svg', alt='')
      .col.ps-0
        .sub.p-2.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Proceso del proveedor (recepción de la devolución)

    .row.fondo6.align-items-center.p-2.mb-0(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center
    
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.col-md-7.col-9.mb-4
            img(src='@/assets/curso/tema5/5.png', alt='')
          .col-lg-8
            SlyderF.custom(columnas="col-lg-6 col-md-6 col-xl-6")
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema5/6.svg' alt='AvatarTop')
                .bg12.p-2.mb-4
                  h4.text-center.mb-0 Revisión de la documentación
                p.mb-0.text-center(data-aos="fade-right") Al recibir la devolución, el proveedor debe revisar cuidadosamente la documentación, verificando la referencia, la cantidad y el motivo de la devolución.
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema5/7.svg' alt='AvatarTop')
                .bg12.p-2.mb-4
                  h4.text-center.mb-0 Autorización del descargue
                p.mb-0.text-center(data-aos="fade-right") El proveedor autoriza el descargue de la mercancía devuelta.
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema5/8.svg' alt='AvatarTop')
                .bg12.p-2.mb-4
                  h4.text-center.mb-0 Revisión del producto
                p.mb-0.text-center(data-aos="fade-right") Los productos devueltos deben ser colocados en un área específica para ser revisados por el departamento de calidad, en caso de defectos o averías, el departamento de calidad determinará el procedimiento a seguir y, una vez que se tenga un informe, se procederá a registrar la información correspondiente en el sistema.
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema5/9.svg' alt='AvatarTop')
                .bg12.p-2.mb-4
                  h4.text-center.mb-0 Productos en buen estado
                p.mb-0.text-center(data-aos="fade-right") Si los productos están en buen estado y las causas de la devolución incluyen errores como referencia no solicitada, cantidad mayor a la pedida, o falta de espacio para almacenamiento por parte del cliente, el proveedor debe verificar las cantidades y referencias, ingresarlas al inventario y registrarlas como disponibles para un nuevo despacho.
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema5/10.svg' alt='AvatarTop')
                .bg12.p-2.mb-4
                  h4.text-center.mb-0 Ajustes contables
                p.mb-0.text-center(data-aos="fade-right") En cualquiera de los casos anteriores, los documentos correspondientes deben ser remitidos al departamento financiero para realizar los ajustes contables necesarios y garantizar la correcta gestión de los inventarios y las cuentas.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 4. 
              | Formato de devolución de productos
          
            .bg11.p-4 
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-11
                  img(data-aos="zoom-in-left")(src='@/assets/curso/tema5/11.png' alt='Formulario para notificar la devolución de productos con detalles de la orden de compra y motivos de la devolución.')
              
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-2.pe-0
        img(src='@/assets/curso/tema1/sub.svg', alt='')
      .col.ps-0
        .sub.p-2.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Alistamiento de productos a devolver
    
    p.mb-4 El alistamiento de los productos a devolver es un proceso tan crucial como el de los pedidos normales que serán despachados, es fundamental tener en cuenta los siguientes aspectos:

    .row.fondo7.align-items-center.p-3.mb-0(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7.col-12
                p.mb-4 #[b Notificación al proveedor:] es esencial informar al proveedor sobre la devolución, esta notificación debe realizarse por correo electrónico o llamada telefónica, este paso debe ser coordinado con el departamento de compras para definir quién será responsable de la comunicación.
              .col-lg-4.col-md-7
                img(alt="" src="@/assets/curso/tema5/12.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7.col-12
                p.mb-4 #[b Verificación de la mercancía:] la persona encargada de despachar la mercancía debe verificar el estado de los productos a devolver, en algunos casos, es necesario asegurarse de que el departamento de calidad haya realizado el informe y la revisión correspondientes antes de proceder.
              .col-lg-4.col-md-7
                img(alt="" src="@/assets/curso/tema5/13.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7.col-12
                p.mb-4 #[b Alistamiento de documentación:] es importante que toda la documentación esté debidamente alistada y acompañada del informe de devolución, este paso debe cumplirse incluso cuando las causas de la devolución son: recepción de un mayor número de unidades de las solicitadas, referencia no solicitada, falta de espacio para almacenar, entre otras.
              .col-lg-4.col-md-7
                img(alt="" src="@/assets/curso/tema5/14.png")


</template>

<script>
export default {
  name: 'Tema5',
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
