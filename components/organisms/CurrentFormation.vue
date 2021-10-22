<template>
  <div class="border-2 border-astro-dark-5 border-opacity-25 bg-astro-dark-5 bg-opacity-50 w-full h-64 p-5">
    <div class="h-1/2 flex justify-between">
      <SpanLabel name="[backend:C# .NET]" />
      <SpanLabel name="FASE 2/5" />
    </div>
    <div class="flex flex-col justify-end h-1/2">
      <div class="flex flex-col items-start mb-2">
        <SpanLabel name="CURSO 2/10" />
        <SpanLabel name="Dominando ASP.NET Core" />
      </div>
      <ProgBar class="" :per-cent="33" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>
