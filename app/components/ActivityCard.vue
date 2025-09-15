<template>
  <Card class="h-full hover:shadow-lg transition-shadow duration-200">
    <CardContent class="p-6">
      <div class="text-center mb-4">
        <div class="text-4xl mb-3">{{ icon }}</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
      </div>
      
      <p class="text-gray-600 mb-4 text-center">{{ description }}</p>
      
      <div class="border-t pt-4">
        <p class="text-sm text-blue-600 font-medium text-center">{{ features }}</p>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent } from '~/components/ui/card'

interface Props {
  icon: string
  title: string
  description: string
  features: string
}

defineProps<Props>()
</script>