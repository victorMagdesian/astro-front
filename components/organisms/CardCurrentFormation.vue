<template>
  <div class="border-2 border-astro-dark-5 border-opacity-25 bg-astro-dark-5 bg-opacity-50 w-full h-64 p-5">
    <div class="h-1/2 flex justify-between">
      <SpanLabel :name="name" />
      <SpanLabel :name="`FASE ${currentFase}/${lastFase}`" />
    </div>
    <div class="flex flex-col justify-end h-1/2">
      <div class="flex flex-col items-start mb-2">
        <SpanLabel :name="`CURSO ${currentCourse}/${lastCourse}`" />
        <SpanLabel :name="nameCourse" />
      </div>
      <ProgBar class="" :per-cent="(currentFase/lastFase)*100" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, required: true },
    lastFase: { type: Number, required: true },
    currentFase: { type: Number, required: true },
    lastCourse: { type: Number, required: true },
    currentCourse: { type: Number, required: true },
    nameCourse: { type: String, required: true }
  }
})
</script>
