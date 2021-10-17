<template>
  <div class="bg-gray-900 min-h-screen max-h-full">
    <Menu />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/organisms/menu.vue'

export default Vue.extend({
  name: 'default',
  components: { Menu }
})
</script>

<style scoped>
</style>
