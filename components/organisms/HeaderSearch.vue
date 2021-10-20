<template>
  <div class="flex items-center bg-astro-dark-1 bg-opacity-80 justify-between px-9">
    <div class="w-1/2">
      <h2 class="text-2xl">Olá Leandro</h2>
      <span class="text-xs">//BACKEND_DEVELOPER</span>
    </div>
    <div class="flex justify-end space-x-2 w-1/2">
      <input
        class="px-3 py-3 placeholder-astro-gray-1 text-astro-gray-2 relative bg-astro-white-1 rounded text-sm border border-astro-gray-1 outline-none focus:outline-none focus:ring w-full"
        type="text"
        :hidden="SearchHidden"
      />
      <img
        :src="require(`~/assets/icons/Icon_search.svg`)"
        alt
        @click="SearchHidden = !SearchHidden"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderSearch',
  data() {
    return {
      SearchHidden: true
    }
  }
})
</script>
