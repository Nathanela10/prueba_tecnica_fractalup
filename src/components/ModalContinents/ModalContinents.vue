<template>
  <div class="modalWrapper" v-if="isOpen" @click="closeModal">
    <div class="modalContinent" @click.stop>
      <div class="modalContinent__header">
        <h3>Filtrar por continentes</h3>
        <button @click="clearSelection">Limpiar</button>
      </div>
      <div class="modalContinent__content">
        <div class="modalContinent__content-options">
          <div class="modalContinent__content-options-image">
            <img
              src="@/assets/europe.png"
              @click="selectContinent('Europe')"
              :class="{
                'blue-shadow': isSelected('Europe'),
              }" />
            <p>Europa</p>
          </div>
          <div class="modalContinent__content-options-image">
            <img
              src="@/assets/america.png"
              @click="selectContinent(['North America', 'South America'])"
              :class="{ 'blue-shadow': isSelected('America') }" />
            <p>America</p>
          </div>
          <div class="modalContinent__content-options-image">
            <img
              src="@/assets/asia.png"
              @click="selectContinent('Asia')"
              :class="{ 'blue-shadow': isSelected('Asia') }" />
            <p>Asia</p>
          </div>
          <div class="modalContinent__content-options-image">
            <img
              src="@/assets/oceania.png"
              @click="selectContinent('Oceania')"
              :class="{ 'blue-shadow': isSelected('Oceania') }" />
            <p>Oceania</p>
          </div>
          <div class="modalContinent__content-options-image">
            <img
              src="@/assets/africa.png"
              @click="selectContinent('Africa')"
              :class="{ 'blue-shadow': isSelected('Africa') }" />
            <p>Africa</p>
          </div>
          <div class="modalContinent__content-options-image">
            <img
              src="@/assets/antarctica.png"
              @click="selectContinent('Antarctica')"
              :class="{ 'blue-shadow': isSelected('Antarctica') }" />
            <p>Antarctica</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedContinents: [],
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    selectContinent(continent) {
      if (Array.isArray(continent)) {
        continent.forEach(c => {
          const index = this.selectedContinents.indexOf(c);
          if (index > -1) {
            this.selectedContinents.splice(index, 1);
          } else {
            this.selectedContinents.push(c);
          }
        });
      } else {
        const index = this.selectedContinents.indexOf(continent);
        if (index > -1) {
          this.selectedContinents.splice(index, 1);
        } else {
          this.selectedContinents.push(continent);
        }
      }
      this.$emit('continentSelected', this.selectedContinents);
    },
    isSelected(continent) {
      if (continent === 'America') {
        return (
          this.selectedContinents.includes('North America') &&
          this.selectedContinents.includes('South America')
        );
      }
      return this.selectedContinents.includes(continent);
    },
    clearSelection() {
      this.selectedContinents = [];
      this.$emit('continentSelected', this.selectedContinents);
    },
  },
};
</script>

<style scoped src="./ModalContinents.css"></style>
