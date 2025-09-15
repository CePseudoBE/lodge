<template>
  <div class="group cursor-pointer">
    <div class="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div :class="`aspect-[4/3] ${bgColor} flex items-center justify-center`">
        <div class="text-center text-white">
          <div class="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
            {{ icon }}
          </div>
          <div class="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
            <h3 class="font-semibold text-lg">{{ title }}</h3>
            <p class="text-sm opacity-90">{{ description }}</p>
          </div>
        </div>
      </div>
      
      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  bgColor: string
  icon: string
}

defineProps<Props>()
</script>