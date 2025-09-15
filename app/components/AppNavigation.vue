<template>
  <nav class="fixed top-0 w-full bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <h1 class="text-xl font-bold text-stone-900">
            Hostería Lago Cinco
          </h1>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="#inicio" class="text-stone-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Inicio</a>
            <a href="#lodge" class="text-stone-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">El Lodge</a>
            <a href="#ubicacion" class="text-stone-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Ubicación</a>
            <a href="#actividades" class="text-stone-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Actividades</a>
            <a href="#galeria" class="text-stone-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Galería</a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-stone-50 border-b border-stone-200">
        <a href="#inicio" class="text-stone-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" @click="isMenuOpen = false">Inicio</a>
        <a href="#lodge" class="text-stone-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" @click="isMenuOpen = false">El Lodge</a>
        <a href="#ubicacion" class="text-stone-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" @click="isMenuOpen = false">Ubicación</a>
        <a href="#actividades" class="text-stone-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" @click="isMenuOpen = false">Actividades</a>
        <a href="#galeria" class="text-stone-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" @click="isMenuOpen = false">Galería</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

