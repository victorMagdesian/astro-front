<template>
  <div v-if="darker" class="flex justify-between bg-astro-dark-1 p-2">
    <SpanLabel :name="`0${number}`" />
    <SpanLabel name="HTTP: Entendendo a web por baixo dos panos " />
    <FormsCheck :darker="darker">
    </formscheck>
  </div>
  <div v-else class="flex justify-between bg-astro-gray-3 py-1 px-2">
    <SpanLabel :name="`0${number}`" />
    <SpanLabel name="HTTP: Entendendo a web por baixo dos panos " />
    <FormsCheck :darker="darker" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    number: { type: Number, required: true },
    darker: { type: Boolean, required: true }
  }
})
</script>
