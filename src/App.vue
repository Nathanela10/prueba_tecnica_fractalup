<template>
  <div id="app">
    <SidebarProject />
    <router-view />
  </div>
</template>

<script>
import SidebarProject from './components/SidebarProject/SidebarProject.vue';

export default {
  name: 'App',
  components: {
    SidebarProject,
  },
};
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  background-color: #e3f4ff;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
}
</style>
