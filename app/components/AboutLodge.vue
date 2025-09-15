<template>
  <section id="lodge" class="py-16 lg:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="space-y-6">
          <div>
            <Badge class="mb-4">Nuestro Lodge</Badge>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Un refugio auténtico en Río Pico
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Nuestra hostería combina la calidez de la hospitalidad argentina con el confort moderno, 
              ubicada estratégicamente cerca de la Cordillera de los Andes y las aguas cristalinas del Lago Cinco.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard
              icon="🏔️"
              title="Vista a la Cordillera"
              description="Vistas espectaculares de la Cordillera de los Andes desde la hostería"
            />
            <FeatureCard
              icon="🎣"
              title="Pesca y Senderismo"
              description="Actividades al aire libre en los alrededores del Lago Cinco"
            />
            <FeatureCard
              icon="🏡"
              title="Ambiente Familiar"
              description="Hostería acogedora con salón común y todas las comodidades"
            />
            <FeatureCard
              icon="🍽️"
              title="Desayuno Completo"
              description="Desayuno completo incluido y servicio de karaoke disponible"
            />
          </div>

          <Button class="mt-8">
            Conocer más detalles
          </Button>
        </div>

        <!-- Image placeholder -->
        <div class="relative">
          <div class="aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 rounded-xl overflow-hidden shadow-2xl">
            <div class="w-full h-full flex items-center justify-center text-gray-500">
              <div class="text-center">
                <div class="text-6xl mb-4">🏠</div>
                <p class="text-lg font-medium">Vista del Lodge</p>
                <p class="text-sm text-gray-400">Imagen próximamente</p>
              </div>
            </div>
          </div>
          
          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import FeatureCard from './FeatureCard.vue'
</script>