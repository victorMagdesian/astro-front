<template>
  <nav
    class="w-28 flex flex-col items-center border-2 border-astro-dark-1 border-opacity-25 bg-astro-dark-1 bg-opacity-80 ml-10 min-h-screen max-h-full"
  >
    <Icon class="mt-8 mb-16" name="logo" />
    <MenuItem icon="home" name="Dashboard" link="/" />
    <MenuItem icon="formacao" name="Formação" link="/formacao" />
    <MenuItem icon="recursos" name="Recursos" link="/recursos" />
    <MenuItem icon="techtalks" name="TechTalks" link="/techtalks" />
    <MenuItem icon="cronograma" name="Cronograma" link="/cronograma" />
    <MenuItem icon="configuracao" name="Configuração" link="/configuracao" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Menu'
})
</script>

<style scoped></style>
