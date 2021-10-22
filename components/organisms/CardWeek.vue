<template>
  <div class="flex flex-col">
    <div class="flex justify-start bg-astro-dark-1 w-full px-5 mb-5">
      <SpanLabel name="_CRONOGRAMA" />
    </div>
    <div class="flex flex-col bg-astro-dark-1 h-34 space-y-1 p-2">
      <div class="flex justify-center space-x-28 h-full ">
        <Icon name="arrow_l_blue" />
        <SpanLabel name="OUTUBRO.2021" />
        <Icon name="arrow_r_blue" />
      </div>
      <div class="border-t-2 border-astro-gray-3 border-opacity-80" />
      <div class="flex h-full justify-center space-x-16">
        <SpanLabel class="text-astro-gray-3" name="DOM" />
        <SpanLabel class="text-astro-gray-3" name="SEG" />
        <SpanLabel class="text-astro-gray-3" name="TER" />
        <SpanLabel class="text-astro-gray-3" name="QUA" />
        <SpanLabel class="text-astro-gray-3" name="QUI" />
        <SpanLabel class="text-astro-gray-3" name="SEX" />
        <SpanLabel class="text-astro-gray-3" name="SAB" />
      </div>
      <div class="flex h-full justify-center space-x-20">
        <SpanLabel class="text-astro-gray-3" name="30" />
        <SpanLabel class="text-astro-gray-3" name="31" />
        <SpanLabel name="01" />
        <SpanLabel name="02" />
        <SpanLabel name="03" />
        <SpanLabel name="04" />
        <SpanLabel name="05" />
      </div>
    </div>
    <div>
      <CardWeekTopic time="09:00" description="Check-in" />
      <CardWeekTopic time="13:00" description="Tech Talk" :darker="true" />
      <CardWeekTopic time="17:00" description="Check-out" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>
