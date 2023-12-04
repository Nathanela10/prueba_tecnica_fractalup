<template>
  <div class="homeProject">
    <SeekerProject @search="onSearch" @seekerClicked="openModal" />
    <ModalContinents @continentSelected="onContinentSelected" ref="modal" />
    <div class="homeProject__cards" @click="closeCard">
      <CardCountry
        v-for="country in filteredCountries"
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
import ModalContinents from '@/components/ModalContinents/ModalContinents.vue';

export default {
  name: 'HomeProject',
  components: {
    SeekerProject,
    CardCountry,
    ModalContinents,
  },
  data() {
    return {
      countries: [],
      openedCard: null,
      searchTerm: '',
      selectedContinent: [],
    };
  },
  computed: {
    filteredCountries() {
      const filtered = this.countries.filter(
        country =>
          country.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
          (this.selectedContinent.length === 0 ||
            this.selectedContinent.includes(country.continent.name))
      );
      // console.log(filtered);
      return filtered;
    },
  },
  methods: {
    openCard(code) {
      this.openedCard = code;
    },
    closeCard() {
      this.openedCard = null;
    },
    onSearch(searchTerm) {
      this.searchTerm = searchTerm;
    },
    openModal() {
      this.$refs.modal.openModal();
    },
    onContinentSelected(continent) {
      if (Array.isArray(continent)) {
        if (continent.length === 0) {
          this.selectedContinent = [];
        } else {
          this.selectedContinent = continent;
        }
      }
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
