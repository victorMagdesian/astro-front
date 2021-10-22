<template>
  <div class="flex justify-between p-5 space-x-5">
    <div class="flex w-full flex-col space-y-5">
      <CurrentFormation />
      <CurrenteChallenge />
      <CardNewsletters />
    </div>
    <div class="flex w-full flex-col space-y-5">
      <CardCourses />
      <div class="flex space-x-2">
        <CardAchivement />
        <CardMoreFormations />
      </div>
    </div>
    <div class="flex w-full flex-col space-y-5">
      <CardCalendar />
      <CardWeek />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Dashboard',
  layout: 'user-layout'
})
</script>
