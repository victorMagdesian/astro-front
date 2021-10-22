<template>
  <div class="flex flex-col space-y-5">
    <div class="flex justify-start bg-astro-dark-1 w-full px-5">
      <SpanLabel name="_CURSOS" />
    </div>
    <div class="flex justify-between border-2 border-astro-gray-3 pr-3">
      <div class="flex">
        <PageNav class="mr-4" />
        <SpanLabel name="FASE 2" />
      </div>
      <SpanLabel name="FORMULÁRIOS" />
    </div>
    <div>
      <CardCoursesTopic :number="1" :darker="true" />
      <CardCoursesTopic :number="2" :darker="false" />
      <CardCoursesTopic :number="3" :darker="true" />
      <CardCoursesTopic :number="4" :darker="false" />
      <CardCoursesTopic :number="5" :darker="true" />
      <CardCoursesTopic :number="6" :darker="false" />
      <CardCoursesTopic :number="7" :darker="true" />
      <CardCoursesTopic :number="8" :darker="false" />
      <CardCoursesTopic :number="9" :darker="true" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>
