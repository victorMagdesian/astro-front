<template>
  <nav
    class="w-28 flex flex-col items-center bg-astro-dark-1 bg-opacity-80 ml-10 h-screen"
  >
    <Icon name="logo" />
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
import Icon from '../atoms/Icon.vue'
import MenuItem from '~/components/molecules/MenuItem.vue'

export default Vue.extend({
  name: 'Menu',
  components: {
    Icon,
    MenuItem
  }
})
</script>

<style scoped></style>
