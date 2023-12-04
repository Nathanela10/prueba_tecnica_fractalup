<template>
  <div class="sidebarProject">
    <div class="sidebarProjectDesktop">
      <h1 class="sidebarProjectDesktop__logo">Logo</h1>
      <div class="sidebarProjectDesktop__buttons">
        <router-link
          class="sidebarProjectDesktop__buttons-button"
          to="/home"
          active-class="active-link"
          >Home</router-link
        >
        <router-link
          class="sidebarProjectDesktop__buttons-button"
          to="/viewOne"
          active-class="active-link"
          >Vista 1</router-link
        >
        <router-link
          class="sidebarProjectDesktop__buttons-button"
          to="/viewTwo"
          active-class="active-link"
          >Vista 2</router-link
        >
      </div>
    </div>
    <div class="sidebarProjectMobile">
      <button
        class="sidebarProjectMobile__button"
        @click="isMenuOpen = !isMenuOpen">
        <h1>Logo</h1>
      </button>
      <div class="sidebarProjectMobile__menu" v-if="isMenuOpen">
        <router-link
          class="sidebarProjectMobile__menu-link"
          to="/home"
          active-class="active-linkMobile"
          v-on:click.native="closeMenu"
          >Home</router-link
        >
        <router-link
          class="sidebarProjectMobile__menu-link"
          to="/viewOne"
          active-class="active-linkMobile"
          v-on:click.native="closeMenu"
          >Vista 1</router-link
        >
        <router-link
          class="sidebarProjectMobile__menu-link"
          to="/viewTwo"
          active-class="active-linkMobile"
          v-on:click.native="closeMenu"
          >Vista 2</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarProject',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped src="./SidebarProject.css"></style>
