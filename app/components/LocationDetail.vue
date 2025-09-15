<template>
  <div class="flex items-start space-x-4">
    <div class="text-2xl flex-shrink-0 mt-1">{{ icon }}</div>
    <div class="flex-1">
      <h3 class="font-semibold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-1">{{ description }}</p>
      <p class="text-sm text-blue-600 font-medium">{{ highlight }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  highlight: string
}

defineProps<Props>()
</script>