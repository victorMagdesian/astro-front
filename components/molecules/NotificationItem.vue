<template>
  <div>
    <SpanLabel _class="block text-xs" name="_10/NOV" />
    <H2Label
      class="text-xl"
      name="O prazo de finalizar o curso esta acabando"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SpanLabel from "../atoms/SpanLabel.vue";
import H2Label from "../atoms/H2Label.vue";

export default Vue.extend({
  name: "NotificationItem",
  components: {
    H2Label,
    SpanLabel
  }
});
</script>
