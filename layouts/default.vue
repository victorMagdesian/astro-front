<template>
  <div class="flex">
    <Menu />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/organisms/Menu.vue'

export default Vue.extend({
  name: 'Default',
  components: { Menu }
})
</script>

<style scoped>
</style>
