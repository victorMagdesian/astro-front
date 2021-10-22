<template>
  <div class="flex flex-col w-full">
    <div class="bg-astro-dark-1 flex justify-between w-full mb-5 py-2 px-5">
      <SpanLabel :name="name" />
      <Icon name="arrow_l" />
    </div>
    <ScrollBar>
      <div class="flex flex-col space-y-2 mr-2">
        <CardNewsletterTopic
          date="03/NOV"
          description="Título do tech talk aqui dummy do título porque o título geralmente é grande"
          author="Leandro Cardoso"
          :tags="['AZURE','VUE','NUXT','PYTHON']"
        />
      </div>
    </ScrollBar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, required: true }
  }
})
</script>
