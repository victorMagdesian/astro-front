<template>
  <div class="flex items-center bg-astro-dark-1 bg-opacity-80 justify-between px-9">
    <HeaderSearchItem />
    <SearchMin />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderSearchItem from '../molecules/HeaderSearchItem.vue'
import SearchMin from '../molecules/SearchMin.vue'

export default Vue.extend({
  name: 'HeaderSearch',
  components: {
    HeaderSearchItem,
    SearchMin
  }
})
</script>
