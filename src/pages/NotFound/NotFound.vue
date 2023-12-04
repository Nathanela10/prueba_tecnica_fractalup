<template>
  <div class="not-found">
    <h1>Error 404</h1>
    <p>Página no encontrada</p>
    <router-link to="/">Volver al Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<styles scoped src="./NotFound.css"></styles>
