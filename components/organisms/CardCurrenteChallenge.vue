<template>
  <div class="flex border-2 border-astro-gray-3 bg-astro-dark-1 w-full h-24 p-5">
    <div class="flex flex-col justify-center w-1/2">
      <SpanLabel
        v-if="`${number}`.length == 1"
        class="text-xs"
        :name="`//DESAFIO 0${number}`"
      />
      <SpanLabel
        v-else
        class="text-xs"
        :name="`//DESAFIO ${number}`"
      />
      <H2Label :name="name" />
    </div>
    <div style="cursor:pointer" class="flex flex-col w-1/2 justify-center space-y-4">
      <div v-if="hoveredSet" class="flex space-x-2" @mouseover="hoveredSet = true" @mouseleave="hoveredSet = false">
        <Icon name="duo_arrow_hover" />
        <SpanLabel class="text-xs text-astro-blue-1" name="SETUP DO DESAFIO" />
      </div>
      <div v-else class="flex space-x-2" @mouseover="hoveredSet = true" @mouseleave="hoveredSet = false">
        <Icon name="duo_arrow" />
        <SpanLabel class="text-xs" name="SETUP DO DESAFIO" />
      </div>
      <div v-if="hoveredSteps" class="flex space-x-2" @mouseover="hoveredSteps = true" @mouseleave="hoveredSteps = false">
        <Icon name="duo_arrow_hover" />
        <SpanLabel class="text-xs text-astro-blue-1" name="ETAPAS DO DESAFIO" />
      </div>
      <div v-else class="flex space-x-2" @mouseover="hoveredSteps = true" @mouseleave="hoveredSteps = false">
        <Icon name="duo_arrow" />
        <SpanLabel class="text-xs" name="ETAPAS DO DESAFIO" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, required: true },
    number: { type: Number, required: true }
  },
  data() {
    return {
      hoveredSet: false,
      hoveredSteps: false
    }
  }
})
</script>
