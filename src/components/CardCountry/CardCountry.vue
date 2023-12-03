<template>
  <div class="cardCountry">
    <div class="cardCountry__image">
      <img src="" alt="" />
    </div>
    <div class="cardCountry__content">
      <div class="cardCountry__content-emoji">
        <p>{{ countryData.emoji }}</p>
      </div>
      <div class="cardCountry__content-text">
        <h3>{{ countryData.name }}</h3>
        <p>{{ countryData.continent.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCountry',
  props: {
    countryData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped src="./CardCountry.css"></style>
