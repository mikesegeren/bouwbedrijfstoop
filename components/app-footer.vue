<template>
  <div>
    <section class="page-footer bg-primary py-5 mt-4">
      <div class="container d-flex justify-content-lg-between justify-content-center">
        <div>
          <img style="max-width: 250px;" src="images/logo-small.jpg" alt="">
        </div>
        <div style="max-width: 33%" class="mx-4 d-none d-lg-block">
          <p class="text-light">
            Wij zijn sinds 2010 actief als bouwbedrijf
          </p>
        </div>
        <div class="d-none d-lg-block">
          <nuxt-link class="d-block text-light" v-for="item in navItems" :key="item.name" :to="item.route">
            {{item.name}}
          </nuxt-link>
        </div>
      </div>
    </section>
    <div style="height: 30px" class="bottom-footer bg-secondary"></div>
  </div>
</template>

<script>
  import { navItems } from '~/exports/menu-items'

  export default {
    name: 'app-footer',
    data: function() {
      return {
        navItems: navItems
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 250px;
  }
</style>
