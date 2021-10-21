<template>
  <div class="flex">
    <Menu />
    <main class="w-full">
      <div class="flex flex-col lg:flex-row mx-5 lg:mx-5 space-y-5 lg:space-y-0 lg:space-x-5 lg:justify-between text-astro-white-1">
        <CardHeader class="w-full h-32 ">
          <HeaderSearchItem />
          <SearchMin />
        </CardHeader>
        <CardHeader class="w-full h-32 ">
          <Icon name="notificacao" />
          <NotificationItem />
        </CardHeader>
      </div>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserLayout'
})
</script>
