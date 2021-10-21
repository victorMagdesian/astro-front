<template>
  <div class="w-full border-2 border-astro-white-4 p-0.5">
    <div class="bg-astro-white-4 bg-opacity-25 ">
      <div class="bg-astro-white-4 py-2" :style="`width: ${perCent}%`" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProgBar',
  props: {
    perCent: { type: Number, required: true }
  }
})
</script>
