<template>
  <div style="overflow: hidden">
    <div class="bg"></div>
    <div class="jumbotron text-center rounded shadow-lg">
      <h1>Bouwbedrijf Stoop</h1>
      <p>
        Welkom op de website van bouwbedrijf Stoop. Op het moment wordt er aan onze website gewerkt. Als u vragen
        heeft over een project of opdracht kunt u contact met ons opnemen via de bekende kanalen.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({})
</script>

<style>
  .bg {
    background-repeat: no-repeat;
    background-image: url('/images/bg.jpg');
    filter: blur(8px);
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    z-index: 1;
    transform: scale(1.1);
  }

  .bg::after {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, .3);
    content: '';
  }

  .jumbotron {
    z-index: 3;
    max-width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
