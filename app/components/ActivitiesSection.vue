<template>
  <section id="actividades" class="py-16 lg:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <Badge class="mb-4">Actividades</Badge>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Aventuras en la naturaleza
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubre las maravillas naturales de Río Pico con actividades para todos los gustos y niveles.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ActivityCard
          icon="🎣"
          title="Pesca Deportiva"
          description="Disfruta de la pesca en las aguas cristalinas del Lago Cinco y otros arroyos de la región."
          features="Truchas, Salmones, Equipos disponibles"
        />
        
        <ActivityCard
          icon="🥾"
          title="Senderismo"
          description="Explora senderos naturales con vistas espectaculares a la Cordillera de los Andes."
          features="Todos los niveles, Flora y fauna, Guías locales"
        />
        
        <ActivityCard
          icon="📸"
          title="Fotografía Natural"
          description="Captura los paisajes únicos de Chubut y la diversa fauna patagónica."
          features="Paisajes únicos, Vida silvestre, Amanecer/Atardecer"
        />
        
        <ActivityCard
          icon="🛶"
          title="Navegación"
          description="Paseos en kayak y navegación tranquila por las aguas del Lago Cinco."
          features="Aguas calmas, Kayaks disponibles, Seguridad garantizada"
        />
        
        <ActivityCard
          icon="🌄"
          title="Observación"
          description="Avistamiento de aves y contemplación de los increíbles paisajes montañosos."
          features="Aves autóctonas, Binoculares, Silencio natural"
        />
        
        <ActivityCard
          icon="🎤"
          title="Entretenimiento"
          description="Noches de karaoke y actividades recreativas en la hostería."
          features="Karaoke, Salón común, Ambiente familiar"
        />
      </div>

      <div class="text-center mt-12">
        <Button size="lg">
          Consultar disponibilidad
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import ActivityCard from './ActivityCard.vue'
</script>