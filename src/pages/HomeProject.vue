<template>
  <div class="homeProject">
    <SeekerProject />
    <div class="homeProject__cards" @click="closeCard">
      <CardCountry
        v-for="country in countries"
        :key="country.code"
        :countryData="country"
        :openCard="openCard"
        :openedCard="openedCard" />
    </div>
  </div>
</template>

<script>
import CardCountry from '@/components/CardCountry/CardCountry.vue';
import SeekerProject from '@/components/SeekerProject/SeekerProject.vue';
import { getCountries } from '@/services/CountriesApi.js';
import { getCountryImage } from '@/services/ImageCountryApi.js';

export default {
  name: 'HomeProject',
  components: {
    SeekerProject,
    CardCountry,
  },
  data() {
    return {
      countries: [],
      openedCard: null,
    };
  },
  methods: {
    openCard(code) {
      this.openedCard = code;
    },
    closeCard() {
      this.openedCard = null;
    },
  },
  async created() {
    const countries = await getCountries();
    for (let i = 0; i < countries.length; i++) {
      const country = { ...countries[i] };
      country.imageUrl = await getCountryImage(country.capital, country.name);
      this.countries.push(country);
    }
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
}

.homeProject__cards {
  height: 92vh;
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  padding: 50px 0;
  gap: 20px;
  overflow-y: scroll;
}
</style>
