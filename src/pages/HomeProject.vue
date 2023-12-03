<template>
  <div class="homeProject">
    <SeekerProject />
  </div>
</template>

<script>
import SeekerProject from '../components/SeekerProject/SeekerProject.vue';

export default {
  name: 'HomeProject',
  components: {
    SeekerProject,
  },
};
</script>

<style scoped>
.homeProject {
  width: 83%;
  color: #676767;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}
</style>
