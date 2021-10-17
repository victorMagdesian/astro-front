<template>
  <main class="w-full">
    <div class="flex justify-between text-white mx-5 space-x-5">
      <HeaderSearch class="w-1/2 h-32 bg-gray-800 bg-opacity-50" />
      <Notification class="w-1/2 h-32 bg-gray-800 bg-opacity-50" />
    </div>
    <div class="flex justify-between text-white mx-5 space-x-5"></div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderSearch from '~/components/organisms/header-search.vue'
import Notification from '~/components/molecules/notification.vue'

export default Vue.extend({
  name: 'Dashboard',
  components: { HeaderSearch, Notification }
})
</script>
