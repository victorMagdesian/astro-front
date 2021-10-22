<template>
  <div class="flex flex-col space-y-5">
    <div class="flex justify-start bg-astro-dark-1 w-full px-5">
      <SpanLabel name="_CRONOGRAMA" />
    </div>
    <div class="flex flex-col bg-astro-dark-1 h-80 space-y-1 p-2">
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
      <div class="flex h-full justify-center space-x-20">
        <SpanLabel name="06" />
        <SpanLabel name="07" />
        <SpanLabel name="08" />
        <SpanLabel name="09" />
        <SpanLabel name="10" />
        <SpanLabel name="11" />
        <SpanLabel name="12" />
      </div>
      <div class="flex h-full justify-center space-x-20">
        <SpanLabel name="13" />
        <div class="flex h-full bg-astro-gray-3 justify-center space-x-20">
          <SpanLabel name="14" />
          <SpanLabel name="15" />
          <SpanLabel name="16" />
          <SpanLabel name="17" />
          <SpanLabel name="18" />
          <SpanLabel name="19" />
        </div>
      </div>
      <div class="flex h-full justify-center space-x-20">
        <div class="flex h-full bg-astro-gray-3 justify-center space-x-20">
          <SpanLabel name="20" />
          <SpanLabel name="21" />
          <SpanLabel name="22" />
          <SpanLabel name="23" />
          <SpanLabel name="24" />
          <SpanLabel name="25" />
        </div>
        <SpanLabel name="26" />
      </div>
      <div class="flex h-full justify-center space-x-20">
        <SpanLabel name="27" />
        <SpanLabel name="28" />
        <SpanLabel name="29" />
        <SpanLabel name="30" />
        <SpanLabel name="31" />
        <SpanLabel class="text-astro-gray-3" name="01" />
        <SpanLabel class="text-astro-gray-3" name="01" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>
