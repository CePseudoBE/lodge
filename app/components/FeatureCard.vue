<template>
  <Card class="p-6 hover:shadow-md transition-shadow duration-200">
    <CardContent class="p-0">
      <div class="flex items-start space-x-4">
        <div class="text-2xl flex-shrink-0">{{ icon }}</div>
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">{{ title }}</h3>
          <p class="text-sm text-gray-600">{{ description }}</p>
        </div>
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
}

defineProps<Props>()
</script>