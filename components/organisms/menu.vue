<template>
  <nav class="w-28 flex flex-col items-center ml-10 bg-white bg-opacity-5 h-screen">
    <img :src="require(`~/assets/icons/A.svg`)" alt class="mt-8 mb-6" />
    <MenuItem icon="home" name="Dashboard" link="/" />
    <MenuItem icon="formacao" name="Formação" link="/formacao" />
    <!--
    <MenuItem icon="recursos" name="Recursos" link="/recursos" />
    <MenuItem icon="techtalks" name="TechTalks" link="/techtalks" />
    <MenuItem icon="cronograma" name="Cronograma" link="/cronograma" />
    <MenuItem icon="configuracao" name="Configuração" link="/configuracao" />
    -->
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuItem from '~/components/molecules/MenuItem.vue'

export default Vue.extend({
  name: 'Menu',
  components: {
    MenuItem
  }
})
</script>

<style scoped>
</style>
