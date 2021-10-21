<template>
  <img
    :src="require(`~/assets/icons/Icon_${name}.svg`)"
    alt
    class="mt-8 mb-6"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Icon',
  props: {
    name: { type: String, required: true }
  }
})
</script>
