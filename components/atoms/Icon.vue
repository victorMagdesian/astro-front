<template>
  <img
    :src="require(`~/assets/icons/Icon_${name}.svg`)"
    alt
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, required: true }
  }
})
</script>
