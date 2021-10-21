<template>
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
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderSearch',
  components: {
  },
  data() {
    return {
      SearchHidden: true
    }
  }
})
</script>
