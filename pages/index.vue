<template>
  <div class="flex p-5 space-x-5">
    <div class="flex w-full flex-col space-y-5">
      <CurrentFormation />
      <CurrenteChallenge />
      <Newsletter />
    </div>
    <div class="flex w-full flex-col space-y-5">
      <CurrentFormation />
      <CurrenteChallenge />
    </div>
    <div class="flex w-full flex-col space-y-5">
      <CurrentFormation />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Dashboard',
  layout: 'user-layout'
})
</script>
