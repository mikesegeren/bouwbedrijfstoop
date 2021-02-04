<template>
  <div>
    <h1 class="text-primary mb-3 font-weight-bold">Welkom op de website van P.Stoop Bouwbedrijf!</h1>

    <div class="row mt-5">
      <div class="col-md-4 mb-3 d-flex flex-column flex-grow-1">
        <div class="card d-flex flex-column flex-grow-1">
          <div class="card-body text-center">
            <div class="rounded-circle bg-primary text-light mx-auto mb-3">
              <i class="icon bi-house-fill"></i>
            </div>
            <h2 class="mb-3">Nieuwbouw & Aanbouw</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequatur delectus
              dolores
              dolorum, eius expedita illum ipsam iusto laudantium, necessitatibus quae quos sapiente, voluptatum.</p>
            <nuxt-link to="/over-ons#nieuwbouw" class="btn btn-primary w-100">Meer info</nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3 d-flex flex-column flex-grow-1">
        <div class="card d-flex flex-column flex-grow-1">
          <div class="card-body text-center">
            <div class="rounded-circle bg-primary text-light mx-auto mb-3">
              <i class="icon bi-tools"></i>
            </div>
            <h2 class="mb-3">Verbouw & Renovatie</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab accusantium ad amet delectus dolor eos
              et,
              ipsum magni nobis nulla saepe similique tempore, voluptatibus.</p>
            <nuxt-link to="/over-ons#verbouw" class="btn btn-primary w-100">Meer info</nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3 d-flex flex-column flex-grow-1">
        <div class="card d-flex flex-column flex-grow-1">
          <div class="card-body text-center">
            <div class="rounded-circle bg-primary text-light mx-auto mb-3">
              <i class="icon bi-people-fill"></i>
            </div>
            <h2 class="mb-3">Partners & Leveranciers</h2>
            <p>P.Stoop Bouwbedrijf werkt alleen samen met vaste, betrouwbare en eerlijke partners en leveranciers, zodat
              u altijd er van op aan kan dat wij onze beloftes nakomen... Met nét dat beetje extra!</p>
            <nuxt-link to="/over-ons#partners" class="btn btn-primary w-100">Meer info</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "styles/variables";
  @import "node_modules/bootstrap/scss/mixins";

  .card {
    p {
      @include media-breakpoint-up(sm) {
        min-height: 150px;
      }
    }
  }

  .rounded-circle {
    width: 100px;
    height: 100px;
    position: relative;

    .icon {
      position: absolute;
      font-size: 40px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      line-height: 1;
    }
  }
</style>
