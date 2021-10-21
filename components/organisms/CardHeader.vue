<template>
  <div class="flex items-center border-2 border-astro-dark-1 border-opacity-25 bg-astro-dark-1 bg-opacity-80  px-9 space-x-11">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardHeader'
})
</script>
