<template>
  <h2 class="text-astro-white-3" :class="_class">{{ name }}</h2>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "H2Label",
  props: {
    name: { type: String, required: true },
    _class: { type: String, required: false }
  }
});
</script>