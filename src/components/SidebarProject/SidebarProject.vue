<template>
  <div class="sidebarProject">
    <h1 class="sidebarProject__logo">Logo</h1>
    <div class="sidebarProject__buttons">
      <router-link
        class="sidebarProject__buttons-button"
        to="/home"
        active-class="active-link"
        >Home</router-link
      >
      <router-link
        class="sidebarProject__buttons-button"
        to="/viewOne"
        active-class="active-link"
        >Vista 1</router-link
      >
      <router-link
        class="sidebarProject__buttons-button"
        to="/viewTwo"
        active-class="active-link"
        >Vista 2</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarProject',
};
</script>

<style scoped src="./SidebarProject.css"></style>
