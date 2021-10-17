<template>
  <NuxtLink :to="link" class="flex flex-col items-center justify-center my-4 text-white icon">
    <img v-if="icon" :src="require(`~/assets/icons/Icon_${icon}.svg`)" alt />
    <span>{{ name }}</span>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuItem',
  props: {
    icon: { type: String, required: false },
    name: { type: String, required: true },
    link: { type: String, required: true },
  }
})
</script>

<style scoped>
.icon:hover {
  color: blue;
  fill: aqua;
  stroke: aqua;
  stroke: blue;
}
</style>
