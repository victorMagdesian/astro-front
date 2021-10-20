<template>
  <div class="hover:text-astro-blue-1 text-astro-white-3" @mouseover="Hover(true)" @mouseleave="Hover(false)">
    <NuxtLink
      exact-active-class="text-astro-blue-1"
      :to="link"
      class="flex flex-col items-center justify-center my-4"
    >
      <img :src="atualIcon" />
      <span>{{ name }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuItem',
  props: {
    icon: { type: String, required: true },
    name: { type: String, required: true },
    link: { type: String, required: true }
  },
  data() {
    return {
      atualIcon: '',
      Icon: require(`~/assets/icons/Icon_${this.icon}.svg`),
      IconHover: require(`~/assets/icons/Icon_${this.icon}_hover.svg`),
      path: window.location.pathname
    }
  },
  beforeMount() {
    this.GetIcon()
  },
  methods: {
    Hover(val: boolean) {
      if (this.$route.path === this.link) {
        return
      }
      if (val) {
        this.atualIcon = this.IconHover
      }
      if (!val) {
        this.atualIcon = this.Icon
      }
    },
    GetIcon() {
      if (this.path === this.link) {
        this.atualIcon = this.IconHover
      } else {
        this.atualIcon = this.Icon
      }
    }
  }
})
</script>
