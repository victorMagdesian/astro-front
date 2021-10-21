<template>
  <div class="flex border-2 border-astro-gray-3 border-opacity-25 bg-astro-gray-3 w-full h-24 p-5">
    <div class="w-1/2">
      <SpanLabel clazz="text-xs" name="//DESAFIO 01" />
      <H2Label name="Casa do Código" />
    </div>
    <div class="flex flex-col w-1/2 justify-center space-y-4">
      <div class="flex space-x-2">
        <Icon name="duo_arrow" />
        <SpanLabel clazz="text-xs" name="SETUP DO DESAFIO" />
      </div>
      <div class="flex space-x-2">
        <Icon name="duo_arrow" />
        <SpanLabel clazz="text-xs" name="ETAPAS DO DESAFIO" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CurrentChallenge'
})
</script>
