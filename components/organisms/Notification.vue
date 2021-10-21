<template>
  <div class="flex items-center bg-astro-dark-1 bg-opacity-80  px-9 space-x-11">
    <Icon name="notificacao" />
    <NotificationItem />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NotificationItem from "../molecules/NotificationItem.vue";
import Icon from "../atoms/Icon.vue";

export default Vue.extend({
  name: "Notification",
  components: {
    Icon,
    NotificationItem
  }
});
</script>
