<template>
  <div class="flex flex-col bg-astro-dark-1 border-2 border-astro-gray-3 w-full h-52 justify-between p-2">
    <div class="flex justify-start">
      <Icon name="achive" />
    </div>
    <div class="flex justify-center">
      <SpanLabel name="finalizou a fase 1 da trilha backend" />
    </div>
    <NuxtLink to="/" class="flex justify-end">
      <SpanLabel name="VER TODOS" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>
