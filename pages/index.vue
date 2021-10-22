<template>
  <div class="flex justify-between p-5 space-x-5">
    <div class="flex w-full flex-col space-y-5">
      <CardCurrentFormation
        name="[backend: C# .NET]"
        :last-fase="5"
        :current-fase="2"
        name-course="Dominando ASP.NET Core"
        :last-course="10"
        :current-course="2"
      />
      <CardCurrenteChallenge
        name="CASA DO CÓDIGO"
        :number="1"
      />
      <CardNewsletters />
    </div>
    <div class="flex w-full flex-col space-y-12">
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
