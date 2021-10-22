<template>
  <span class="text-astro-white-3">{{ name }}</span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  props: {
    name: { type: String, required: true }
  }
})
</script>
