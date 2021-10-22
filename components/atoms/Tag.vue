<template>
  <div class="bg-astro-gray-4 text-astro-white-3 text-xs px-3 mt-2">
    <NuxtLink to="/">
      {{ name }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, required: true }
  }
})
</script>
