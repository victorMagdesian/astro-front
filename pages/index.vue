<template>
  <main class="w-full">
    <div
      class="flex flex-col lg:flex-row mx-5 lg:mx-5 space-y-5 lg:space-y-0 lg:space-x-5 lg:justify-between text-astro-white-1"
    >
      <HeaderSearch class="w-full h-32 " />
      <Notification class="w-full h-32 " />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderSearch from '~/components/organisms/HeaderSearch.vue'
import Notification from '~/components/organisms/Notification.vue'

export default Vue.extend({
  name: 'Dashboard',
  components: { HeaderSearch, Notification }
})
</script>

