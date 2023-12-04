<template>
  <div class="seekerProject">
    <input
      class="seekerProject__input"
      type="text"
      placeholder="País"
      v-model="searchTerm"
      @input="onInput"
      @click="emitClick" />
    <div class="seekerProject__search">
      <button class="seekerProject__search-button">
        <img
          class="seekerProject__search-button-loupe"
          src="@/assets/loupe.svg"
          alt="Lupa" />
        Buscar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeekerProject',
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('search', this.searchTerm);
    },
    emitClick() {
      this.$emit('seekerClicked');
    },
  },
};
</script>

<style scoped src="./SeekerProject.css"></style>
