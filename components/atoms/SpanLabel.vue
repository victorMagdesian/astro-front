<template>
  <span class="text-astro-white-3" :class="_class">{{ name }}</span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SpanLabel",
  props: {
    name: { type: String, required: true },
    _class: { type: String, required: false }
  }
});
</script>