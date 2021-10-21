<template>
    <div class="w-1/2">
      <H2Label name="Olá Leandro" _class="text-2xl"/>
      <SpanLabel name="//BACKEND_DEVELOPER" _class = "text-xs" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import SpanLabel from '../atoms/SpanLabel.vue'
import H2Label from '../atoms/H2Label.vue'

export default Vue.extend({
  name: "HeaderSearchItem",
  components: {
    H2Label,
    SpanLabel
  }
});
</script>