<template>
  <div class="my-3" @mouseover="hovered = true" @mouseleave="hovered = false">
    <NuxtLink
      v-if="hovered || $route.path == link"
      exact-active-class="text-astro-blue-1"
      :to="link"
      class="flex flex-col items-center justify-center my-1"
    >
      <Icon :name="iconHovered" />
      <SpanLabel :name="name" clazz="text-astro-blue-1" />
    </NuxtLink>

    <NuxtLink
      v-else
      exact-active-class="text-astro-blue-1"
      :to="link"
      class="flex flex-col items-center justify-center my-1"
    >
      <Icon :name="icon" />
      <SpanLabel :name="name" />
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
      iconHovered: this.icon + '_hover',
      hovered: false,
      now: false
    }
  }

  // ,
  // data() {
  //   return {
  //     atualIcon: "",
  //     Icon: require(`~/assets/icons/Icon_${this.icon}.svg`),
  //     IconHover: require(`~/assets/icons/Icon_${this.icon}_hover.svg`),
  //     path: window.location.pathname
  //   };
  // },
  // beforeMount() {
  //   this.GetIcon();
  // },
  // methods: {
  //   Hover(val: boolean) {
  //     if (this.$route.path === this.link) {
  //       return;
  //     }
  //     if (val) {
  //       this.atualIcon = this.IconHover;
  //     }
  //     if (!val) {
  //       this.atualIcon = this.Icon;
  //     }
  //   },
  //   GetIcon() {
  //     if (this.path === this.link) {
  //       this.atualIcon = this.IconHover;
  //     } else {
  //       this.atualIcon = this.Icon;
  //     }
  //   }
  // }
})
</script>
