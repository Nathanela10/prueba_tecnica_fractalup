<template>
  <div class="seekerProject">
    <input class="seekerProject__input" type="text" placeholder="Country" />
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
};
</script>

<style scoped src="./SeekerProject.css"></style>
