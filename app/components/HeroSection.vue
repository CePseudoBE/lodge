<template>
  <section id="inicio" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        src="/lodge.jpg" 
        alt="Hostería Lago Cinco - Vista de las montañas" 
        class="w-full h-full object-cover object-center"
        loading="eager"
      />
    </div>
    
    <!-- Background overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-amber-900/30 to-emerald-900/50"></div>

    <!-- Hero Content -->
    <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-6 animate-fade-in">
        <Badge variant="outline" class="bg-white/10 text-white border-white/30 mb-4">
          Río Pico, Chubut
        </Badge>
        
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-relaxed">
          <span class="text-white">Hostería</span>
          <span class="block text-transparent bg-gradient-to-r from-amber-200 to-emerald-200 bg-clip-text">
            Lago Cinco
          </span>
        </h1>
        
        <p class="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Tu refugio de montaña en Río Pico, a pasos de la Cordillera de los Andes y el hermoso Lago Cinco.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button size="lg" class="bg-amber-700/80 backdrop-blur-sm hover:bg-amber-600 text-white border border-amber-600/30 hover:border-amber-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Descubrir el Lodge
          </Button>
          <Button variant="outline" size="lg" class="border-2 border-emerald-300/60 text-emerald-100 hover:bg-emerald-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
            Ver Ubicación
          </Button>
        </div>
      </div>
      
    </div>

    <!-- Scroll indicator - en dehors du contenu centré -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div class="animate-bounce">
        <div class="flex flex-col items-center space-y-2">
          <span class="text-white/60 text-sm font-medium">Scroll</span>
          <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>