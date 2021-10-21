<template>
  <span class="text-astro-white-3" :class="clazz">{{ name }}</span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SpanLabel',
  props: {
    name: { type: String, required: true },
    clazz: { type: String, default: '', required: false }
  }
})
</script>
