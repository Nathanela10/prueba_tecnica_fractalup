<template>
  <div class="homeProject">
    <SeekerProject />
    <div>
      <CardCountryVue />
    </div>
  </div>
</template>

<script>
import CardCountryVue from '@/components/CardCountry/CardCountry.vue';
import SeekerProject from '@/components/SeekerProject/SeekerProject.vue';

export default {
  name: 'HomeProject',
  components: {
    SeekerProject,
    CardCountryVue,
  },
};
</script>

<style scoped>
.homeProject {
  width: 83%;
  color: #676767;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
</style>
