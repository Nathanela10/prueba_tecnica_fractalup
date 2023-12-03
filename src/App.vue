<template>
  <div id="app">
    <SidebarProject />
  </div>
</template>

<script>
import SidebarProject from './components/SidebarProject/SidebarProject.vue';

export default {
  name: 'App',
  components: {
    SidebarProject,
  }
}
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  background-color: #e3f4ff;
  margin: -1vh 0 0 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
