<template>
  <div class="h-80 scrollbar-thin  overflow-y-scroll scrollbar-thumb-blue-100 scrollbar-track-gray-700">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  props: {
    perCent: { type: Number, required: true }
  }
})
</script>
