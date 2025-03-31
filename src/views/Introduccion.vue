<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center
      .col-lg-1.col-md-2.col-4.mb-3
        img.img-a.img-t(src='@/assets/curso/tema1/1.svg', alt='tema1')(data-aos="fade-down")
      .col-lg-11.col-md-10.mb-0
        p Las organizaciones que realizan transacciones comerciales, ya sea al por mayor o al detalle, es  esencial contar con políticas claras y definidas para la gestión de devoluciones de mercancías, estas políticas establecen los pasos a seguir en caso de reclamaciones o devoluciones, y deben estar alineadas con los acuerdos comerciales previos.
    
    .row.fondo1.align-items-center.p-2.p-md-0.p-lg-2.mb-0(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center
        
        p.mb-4 Para garantizar una experiencia satisfactoria, es fundamental que el personal esté capacitado para asesorar al cliente de manera adecuada o, si es necesario, redirigirlo al departamento correspondiente, las condiciones de devolución no solo aumentan la confiabilidad de la empresa, sino que también demuestran su compromiso con la calidad y el servicio al cliente. Tener procedimientos de devolución transparentes contribuye a la fidelización de los clientes, ya que asegura que cualquier compra, independientemente de su modalidad, esté respaldada por una política de reclamación efectiva.
        
        .row.justify-content-center.align-items-center           
          .col-lg-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/7AN2i7NrysA?si=rWezaKKD518SRGMC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Gestión y condiciones de devolución de mercancías y objetos
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
