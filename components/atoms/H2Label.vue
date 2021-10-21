<template>
  <h2 class="text-astro-white-3" :class="clazz">
    {{ name }}
  </h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'H2Label',
  props: {
    name: { type: String, required: true },
    clazz: { type: String, default: '', required: false }
  }
})
</script>
