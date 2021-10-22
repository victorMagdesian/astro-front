<template>
  <div v-if="darker" class="flex space-x-5 bg-astro-dark-1 p-2">
    <SpanLabel :name="time" />
    <SpanLabel :name="description" />
  </div>
  <div v-else class="flex space-x-5 bg-astro-gray-3 py-1 px-2">
    <SpanLabel :name="time" />
    <SpanLabel :name="description" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    time: { type: String, required: true },
    description: { type: String, required: true },
    darker: { type: Boolean, required: true }
  }
})
</script>
