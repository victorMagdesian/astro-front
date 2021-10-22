<template>
  <div class="flex flex-col p-5 bg-astro-dark-1">
    <div class="flex flex-col space-y-2">
      <SpanLabel :name="date" />
      <SpanLabel :name="description" />
      <SpanLabel :name="`por ${author}`" />
    </div>
    <div class="flex w-48 flex-wrap">
      <Tag
        v-for="tag in tags"
        class="border-l-2 border-r-2 border-astro-gray-3"
        :name="tag"
      />
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
