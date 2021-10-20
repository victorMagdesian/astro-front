<template>
  <main class="w-full">
    <div
      class="flex flex-col lg:flex-row mx-5 lg:mx-5 space-y-5 lg:space-y-0 lg:space-x-5 lg:justify-between text-white"
    >
      <HeaderSearch class="w-full h-32 bg-gray-800 bg-opacity-50" />
      <Notification class="w-full h-32 bg-gray-800 bg-opacity-50" />
    </div>
    <div class="flex justify-between text-white mx-5 space-x-5"></div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderSearch from '~/components/organisms/HeaderSearch.vue'
import Notification from '~/components/molecules/Notification.vue'

export default Vue.extend({
  name: 'Dashboard',
  components: { HeaderSearch, Notification }
})
</script>

