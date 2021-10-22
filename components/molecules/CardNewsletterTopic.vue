<template>
  <div class="flex flex-col p-5 bg-astro-dark-1">
    <div class="flex flex-col space-y-2">
      <SpanLabel :name="date" />
      <SpanLabel :name="description" />
      <SpanLabel :name="`por ${author}`" />
    </div>
    <div class="flex w-48 justify-between flex-wrap">
      <Tag v-for="tag in tags" :name="tag" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    date: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: Array, default: [], required: false }
  }
})
</script>
