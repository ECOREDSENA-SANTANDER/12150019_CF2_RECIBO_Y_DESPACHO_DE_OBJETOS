<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Atención a clientes
    
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-md-7.col-9.mb-4
          img.img-a.img-t(src='@/assets/curso/tema7/1.png', alt='tema1')(data-aos="fade-down")
        .col-lg-7
          p.mb-3 Los clientes son la columna vertebral de todas las organizaciones, un cliente satisfecho genera confiabilidad y atracción a nuevos clientes que requieran el producto que se ofrece, lo anterior no implica que cuando existan reclamaciones se pierda el cliente, en gran medida, en el momento de una no conformidad, la atención y el trato que se le dé a la misma, puede aumentar su grado de satisfacción y no genera malestares posteriores, de la manera oportuna y rápida como se traten las diferencias, así mismo el cliente se sentirá importante y determinará que la devolución fue simplemente un inconveniente pasajero al cual le restará importancia.
          .bg11.p-3.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-2.col-md-4.col-4.mb-2
                img.img-a.img-t(src='@/assets/curso/tema7/2.svg', alt='tema1')(data-aos="fade-down")
              .col-lg-10.col-md-12
                p.mb-0 La atención al cliente puede realizarse de varias maneras entre las que se pueden tener en cuenta las siguientes:
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-location-dot.t2
                p.mb-0  Personalmente: en oficinas o puntos de información dependiendo el tipo de negocio.
              li.d-flex.mb-0
                i.fas.fa-location-dot.t2
                p.mb-0 Por teléfono.
              li.d-flex.mb-0
                i.fas.fa-location-dot.t2
                p.mb-0 Por medio del correo electrónico.
              li.d-flex.mb-0
                i.fas.fa-location-dot.t2
                p.mb-0 Por chat en línea.
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
            .col-auto.ps-2.pe-0
              img(src='@/assets/curso/tema1/sub.svg', alt='')
            .col.ps-0
              .sub.p-2.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
                h3.mb-0 Manejo de quejas y reclamos
          p.mb-4 El manejo adecuado de quejas y reclamos requiere que las organizaciones cuenten con personal capacitado y especializado en la atención de estos temas, este personal debe recibir formación continua para poder ofrecer respuestas oportunas y satisfactorias a los inconvenientes planteados por los clientes.
          p.mb-4 Algunas empresas disponen de un departamento exclusivo para el servicio al cliente, pero todos los colaboradores deben estar preparados para proporcionar una respuesta inicial o dirigir al cliente hacia la persona correspondiente que pueda resolver su inquietud.
        .col-lg-3.col-md-5.col-7
          img.img-a.img-t(src='@/assets/curso/tema7/3.svg', alt='tema1')(data-aos="fade-down")

      .row.fondo5.align-items-center.p-2.mb-0(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center

          .etiqueta1.p-2.d-flex.mb-4.mt-4(data-aos="fade-left")
            h4.mb-0.ps-5.pe-5 Manejo de quejas
          
          p.mb-4 Una queja se refiere a la manifestación de insatisfacción por factores ajenos al servicio, como el trato recibido, estas quejas pueden ser producto de actitudes como antipatía, indiferencia o el estado de ánimo del vendedor, lo que puede generar que el cliente no se sienta bien atendido.
          
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-2.col-md-5.col-9.mb-3
              img.img-a.img-t(src='@/assets/curso/tema7/4.svg', alt='tema1')(data-aos="fade-down")
            .col-lg-5.mb-3
              p.mb-0 Cuando un cliente expresa una queja, ya sea a un superior o al vendedor responsable, se debe proporcionar una respuesta inmediata, esto es crucial para evitar que, aunque el producto cumpla con los requerimientos del cliente, la mala atención conduzca a la no adquisición del mismo; una solución común es asignar a otro empleado para que atienda al cliente en futuras interacciones, evitando que sea atendido nuevamente por la misma persona.
            .col-lg-5.col-md-7.col-9.mb-3
              img.img-a.img-t(src='@/assets/curso/tema7/5.png', alt='tema1')(data-aos="fade-down")
          
          .etiqueta1.p-2.d-flex.mb-4(data-aos="fade-left")
            h4.mb-0.ps-5.pe-5 Manejo de reclamos
          
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-5.col-md-7.col-9.mb-4
              img.img-a.img-t(src='@/assets/curso/tema7/6.png', alt='tema1')(data-aos="fade-down")
            .col-lg-7.mb-4
              p.mb-4 A diferencia de las quejas, los reclamos están directamente relacionados con las inconformidades respecto al producto adquirido, un reclamo otorga al cliente el derecho de recibir una respuesta inmediata, ya que refleja una insatisfacción con el producto o servicio.
              .bg11.p-4.mb-4  
                p.mb-0 El manejo de reclamos requiere la implementación de una política clara que guíe los pasos a seguir cuando se presente uno, esta política debe centrarse en el cliente y ser conocida por todos los empleados, además, debe haber un equipo de recursos humanos y técnicos dedicado exclusivamente a la gestión de reclamos.

      p.mb-4 Es fundamental que, al adquirir un producto, los clientes reciban información clara sobre el proceso de reclamación, que debe incluir los siguientes aspectos:

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-4.col-md-6.col-7.mb-4
          img(src='@/assets/curso/tema7/7.png', alt='')
        .col-lg-8.mb-4
          SlyderF.custom(columnas="col-lg-6 col-md-6 col-xl-6")
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.mb-3
                .col-8.my-2
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema7/8.svg' alt='AvatarTop')
              .bg12.p-2.mb-4
                h4.text-center.mb-0 Lugar de presentación del reclamo:
              p.mb-4.text-center(data-aos="fade-right") Especificar el lugar donde el cliente puede realizar el reclamo.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.mb-3
                .col-8.my-2
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema7/8.svg' alt='AvatarTop')
              .bg12.p-2.mb-4
                h4.text-center.mb-0 Forma de presentar el reclamo:
              p.mb-4.text-center(data-aos="fade-right") Detallar los canales o procedimientos para hacer el reclamo.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.mb-3
                .col-8.my-2
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema7/8.svg' alt='AvatarTop')
              .bg12.p-2.mb-4
                h4.text-center.mb-0 Información requerida: 
              p.mb-4.text-center(data-aos="fade-right") Indicar qué datos debe proporcionar el cliente al momento de realizar la reclamación.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.mb-3
                .col-8.my-2
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema7/8.svg' alt='AvatarTop')
              .bg12.p-2.mb-4
                h4.text-center.mb-0 Plazo para realizar el reclamo:
              p.mb-4.text-center(data-aos="fade-right") Informar el tiempo disponible para que el cliente presente el reclamo.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.mb-3
                .col-8.my-2
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema7/8.svg' alt='AvatarTop')
              .bg12.p-2.mb-4
                h4.text-center.mb-0 Proceso de retroalimentación: 
              p.mb-4.text-center(data-aos="fade-right") En caso de que se realice una retroalimentación, explicar cómo se llevará a cabo el proceso y qué tipo de información se proporcionará al cliente.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.mb-3
                .col-8.my-2
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema7/8.svg' alt='AvatarTop')
              .bg12.p-2.mb-4
                h4.text-center.mb-0 Proceso de reclamo:
              p.mb-4.text-center(data-aos="fade-right") El proceso de manejo de reclamos se lleva a cabo en varias etapas para asegurar una resolución efectiva y oportuna. 
        
      p.mb-3 Estas son las fases del proceso de reclamo:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.mb-4
          LineaTiempoD.color-acento-botones.activo
            p(numero="1" titulo="Evaluación primaria del reclamo") Esta etapa consiste en conocer las razones del reclamo y determinar la acción a seguir, es esencial comprender de manera clara la naturaleza del reclamo para tomar decisiones adecuadas.
            p(numero="2" titulo="Investigación del reclamo") En esta fase, se investiga a fondo las causas que originaron la devolución o el reclamo, y se analiza por qué ocurrió la situación, esto ayuda a identificar el origen del problema y tomar medidas correctivas si es necesario.
            p(numero="3" titulo="Definición y entrega de la respuesta") La empresa debe proporcionar una respuesta a la reclamación en el menor tiempo posible, esta respuesta debe detallar las soluciones posibles y cómo se planea resolver el inconveniente de manera satisfactoria para el cliente.
            p(numero="4" titulo="Acuerdo con el cliente sobre la respuesta") Si el cliente no está conforme con la solución propuesta, es crucial revisar otras alternativas, en esta etapa, se debe solicitar la opinión del cliente para conocer sus expectativas y trabajar conjuntamente en encontrar la mejor solución. 
        .col-lg-6.col-md-7.col-9.mb-4
          img(src='@/assets/curso/tema7/9.png', alt='')

      .row.justify-content-center(data-aos="fade-down").mb-4
        .col-lg-6.mb-4
          .bg13.p-4
            img.img-a.img-t.move(src='@/assets/curso/tema7/10.svg' alt='')
            p.mb-0.text-center Este proceso busca asegurar que todos los reclamos sean tratados de manera justa, eficiente y con el enfoque centrado en la satisfacción del cliente.
        
      .row.justify-content-center(data-aos="fade-down").mb-0
        .col-lg-9.mb-4
          .bg14.p-3.p-lg-5.p-md-4.pe-4.pe-lg-5(,alt='')
            p.mb-4.ps-4.ps-lg-5.mt-4 Una manera de minimizar la reclamaciones, es que la organización con base en los informes, genere acciones correctivas, preventivas y de mejora, y que estas acciones sean comunicadas al personal que se encuentra directamente relacionado con el proceso. Por lo tanto, en resumen, para atender un reclamo se debe:
            ul.lista-ul.mb-0.ps-4.ps-lg-5.pe-4.pe-lg-5
              li.d-flex.mb-0
                i.fas.fa-location-dot.t2
                p.mb-0 Escuchar al cliente.
              li.d-flex.mb-0
                i.fas.fa-location-dot.t2
                p.mb-0 Preguntar asertivamente para identificar la causa del reclamo.
              li.d-flex.mb-0
                i.fas.fa-location-dot.t2
                p.mb-0 Agradecer que la persona informe y explicar brevemente lo que pudo pasar.
              li.d-flex.mb-0
                i.fas.fa-location-dot.t2
                p.mb-0 Ofrecer una disculpa, esto hace que el cliente sienta que es tenido en cuenta.
              li.d-flex.mb-0
                i.fas.fa-location-dot.t2
                p.mb-0 Aceptar sin discusión la reclamación.
            .row.justify-content-center.ps-4.ps-lg-5.mb-0
              .col-lg-10.mb-4
                ul.lista-ul.mb-0 
                  li.d-flex.mb-0
                    i.fas.fa-location-dot.t2
                    p.mb-0 Solucionar en el menor tiempo posible.
                  li.d-flex.mb-0
                    i.fas.fa-location-dot.t2
                    p.mb-0 Asegurar que la respuesta dada al cliente le genere satisfacción.
              .col-lg-2
                img.img-a.img-t.mb-4(src='@/assets/curso/tema7/12.svg' alt='')


</template>

<script>
export default {
  name: 'Tema7',
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
