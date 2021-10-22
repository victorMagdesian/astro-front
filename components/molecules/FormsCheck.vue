<template>
  <div v-if="darker" class="flex">
    <NuxtLink to="/" class="bg-astro-dark-1 p-2">
      <Icon name="form_start_done" />
    </NuxtLink>
    <NuxtLink to="/" class="bg-astro-dark-1 p-2">
      <Icon name="form_end" />
    </NuxtLink>
  </div>
  <div v-else class="flex">
    <NuxtLink to="/" class="bg-astro-gray-3 p-2">
      <Icon name="form_start_done" />
    </NuxtLink>
    <NuxtLink to="/" class="bg-astro-gray-3 p-2">
      <Icon name="form_end" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    darker: { type: Boolean, required: true }
  }
})
</script>
