<template>
  <div class="drawerCard" @click="handleClick">
    <button class="drawerCard__button" ref="closeButton">
      <img src="@/assets/close.svg" alt="close" />
    </button>
    <div class="drawerCard__image">
      <img :src="countryData.imageUrl" :alt="'Imagen de' + countryData.name" />
    </div>
    <div class="drawerCard__content">
      <div class="drawerCard__content-emoji">
        <p>{{ countryData.emoji }}</p>
      </div>
      <div class="drawerCard__content-title">
        <h3>{{ countryData.name }}</h3>
        <p>
          {{
            countryData.continent.name === 'North America' ||
            countryData.continent.name === 'South America'
              ? 'America'
              : countryData.continent.name
          }}
        </p>
      </div>
    </div>
    <div>
      <div class="drawerCard__text">
        <h3>Capital:</h3>
        <p>{{ countryData.capital }}</p>
      </div>
      <div class="drawerCard__text">
        <h3>Language:</h3>
        <p>
          {{
            countryData.languages
              ? countryData.languages.map(language => language.name).join(', ')
              : ''
          }}
        </p>
      </div>
      <div class="drawerCard__text">
        <h3>Currency:</h3>
        <p>{{ countryData.currency }}</p>
      </div>
      <div class="drawerCard__text-states">
        <h3>States:</h3>
        <ul
          class="drawerCard__text-states-ul"
          v-if="countryData.states && countryData.states.length > 0">
          <li v-for="state in countryData.states" :key="state.name">
            {{ state.name }}
          </li>
        </ul>
        <p v-else>Without results</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerCard',
  props: {
    countryData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeDrawer(event) {
      if (event.target === this.$refs.closeButton) {
        this.$emit('close');
      }
    },
    handleClick(event) {
      if (!this.$refs.closeButton.contains(event.target)) {
        event.stopPropagation();
      }
    },
  },
};
</script>

<style scoped src="./DrawerCard.css"></style>
