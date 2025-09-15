<template>
  <section id="galeria" class="py-16 lg:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <Badge class="mb-4">Galería</Badge>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Nuestros paisajes
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Una muestra de los increíbles paisajes que te esperan en la Hostería Lago Cinco.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Gallery placeholders -->
        <GalleryItem
          title="Lago Cinco"
          description="Aguas cristalinas del lago"
          bgColor="bg-gradient-to-br from-blue-200 to-blue-400"
          icon="🏊‍♂️"
        />
        
        <GalleryItem
          title="Cordillera de los Andes"
          description="Vista panorámica de las montañas"
          bgColor="bg-gradient-to-br from-gray-300 to-gray-500"
          icon="⛰️"
        />
        
        <GalleryItem
          title="Hostería"
          description="Nuestras instalaciones"
          bgColor="bg-gradient-to-br from-green-200 to-green-400"
          icon="🏡"
        />
        
        <GalleryItem
          title="Senderismo"
          description="Senderos naturales"
          bgColor="bg-gradient-to-br from-yellow-200 to-orange-300"
          icon="🥾"
        />
        
        <GalleryItem
          title="Pesca"
          description="Actividades acuáticas"
          bgColor="bg-gradient-to-br from-teal-200 to-cyan-400"
          icon="🎣"
        />
        
        <GalleryItem
          title="Flora Local"
          description="Naturaleza autóctona"
          bgColor="bg-gradient-to-br from-emerald-200 to-green-500"
          icon="🌲"
        />
      </div>

      <div class="text-center mt-12">
        <Button variant="outline" size="lg">
          Ver galería completa
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import GalleryItem from './GalleryItem.vue'
</script>