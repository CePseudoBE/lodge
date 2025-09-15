<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <AppNavigation />

    <!-- Hero Section -->
    <HeroSection />

    <!-- About Lodge Section -->
    <AboutLodge />

    <!-- Location Section -->
    <LocationSection />

    <!-- Activities Section -->
    <ActivitiesSection />

    <!-- Gallery Preview -->
    <GalleryPreview />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Hostería Lago Cinco - Lodge en Río Pico, Chubut',
  meta: [
    {
      name: 'description',
      content: 'Hostería Lago Cinco en Río Pico, Chubut. Lodge de montaña cerca de la Cordillera de los Andes y el hermoso Lago Cinco. Pesca, senderismo y naturaleza pura.'
    },
    {
      property: 'og:title',
      content: 'Hostería Lago Cinco - Lodge en Río Pico, Chubut'
    },
    {
      property: 'og:description',
      content: 'Lodge de montaña en Río Pico, Chubut, cerca de la Cordillera de los Andes y el Lago Cinco. Experiencia única en la naturaleza argentina.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'keywords',
      content: 'hostería lago cinco, río pico, chubut, argentina, lodge, cordillera andes, pesca, senderismo, turismo naturaleza'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  htmlAttrs: {
    lang: 'es-AR'
  }
})
</script>