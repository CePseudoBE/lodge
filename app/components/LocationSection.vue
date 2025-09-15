<template>
  <section id="ubicacion" class="py-16 lg:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <Badge class="mb-4">Ubicación Privilegiada</Badge>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          En Río Pico, Chubut
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Estratégicamente ubicados en la Ruta Provincial N°19 para ofrecerte acceso directo a la Cordillera de los Andes 
          y las aguas cristalinas del Lago Cinco.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Map placeholder -->
        <div class="order-2 lg:order-1">
          <div class="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden shadow-lg">
            <div class="w-full h-full flex items-center justify-center text-gray-500">
              <div class="text-center">
                <div class="text-6xl mb-4">🗺️</div>
                <p class="text-lg font-medium">Mapa Interactivo</p>
                <p class="text-sm text-gray-400">Próximamente</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Location details -->
        <div class="order-1 lg:order-2 space-y-8">
          <LocationDetail
            icon="📍"
            title="Dirección"
            description="Ruta Provincial N°19, Km 97, Río Pico, Chubut"
            highlight="Cerca del Lago Cinco"
          />
          
          <LocationDetail
            icon="🚗"
            title="Cómo Llegar"
            description="Por la Ruta Provincial N°19, con fácil acceso desde las principales ciudades de la región"
            highlight="Transfer disponible"
          />
          
          <LocationDetail
            icon="🏔️"
            title="Alrededores"
            description="A pocos kilómetros de la Cordillera de los Andes, rodeado de lagos cristalinos y senderos naturales"
            highlight="Pesca y senderismo"
          />
          
          <LocationDetail
            icon="🌲"
            title="Naturaleza"
            description="Flora y fauna autóctona en un entorno natural preservado, ideal para el turismo ecológico"
            highlight="Ambiente único"
          />

          <div class="pt-4">
            <Button variant="outline" class="w-full sm:w-auto">
              Ver en Google Maps
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import LocationDetail from './LocationDetail.vue'
</script>