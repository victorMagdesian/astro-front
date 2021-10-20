<template>
  <div class="flex items-center px-9 space-x-11">
    <img :src="require(`~/assets/icons/Icon_notificacao.svg`)" alt />
    <div>
      <span class="block">_10/nov</span>
      <h2 class="text-xl">O prazo de finalizar o curso esta acabando</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Notification'
})
</script>

