<template>
  <div>
    <div
      class="cardCountry"
      @click.stop="openCard(countryData.code)"
      :class="{ 'cardCountry--active': openedCard === countryData.code }">
      <div class="cardCountry__image">
        <img
          :src="countryData.imageUrl"
          :alt="'Imagen de' + countryData.name" />
      </div>
      <div class="cardCountry__content">
        <div class="cardCountry__content-emoji">
          <p>{{ countryData.emoji }}</p>
        </div>
        <div class="cardCountry__content-text"
        :class="{ 'cardCountry__content-text--active': openedCard === countryData.code }">
          <h3>{{ countryData.name }}</h3>
          <p>{{ countryData.continent.name }}</p>
        </div>
      </div>
    </div>
    <DrawerCard
      v-if="openedCard === countryData.code"
      :countryData="countryData"
      @click.stop="stopPropagation"
      @close="handleClose" />
  </div>
</template>

<script>
import DrawerCard from '@/components/DrawerCard/DrawerCard.vue';

export default {
  name: 'CardCountry',
  components: {
    DrawerCard,
  },
  props: {
    countryData: {
      type: Object,
      required: true,
    },
    openCard: {
      type: Function,
      required: true,
    },
    openedCard: {
      type: String,
      default: null,
    },
  },
  methods: {
    stopPropagation(event) {
      event.stopPropagation();
    },
    handleClose() {
      this.openCard(null);
    },
  },
  data() {
    return {
      showDrawerCard: false,
    };
  },
};
</script>

<style scoped src="./CardCountry.css"></style>
