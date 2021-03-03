<template>
  <div class="container">
    <div v-if="!this.loading && this.jobs.length">
      <div class="row">
        <div v-for="job in jobs" class="col-md-6 col-lg-4 col-sm-12 mb-3">
          <div class="card">
            <div class="card-body text-center">
              <h2 class="card-title">{{job.title}}</h2>
              <nuxt-link :to="'/vacatures/'+ job.slug" class="btn btn-primary">Meer informatie</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!this.loading && !this.jobs.length" class="row">
      <h2>Er zijn op het moment helaas geen vacatures beschikbaar</h2>
      <p class="description">Neem contact met ons op voor een open sollicitatie of houdt deze pagina in de gaten.</p>
      <nuxt-link to="/contact" class="btn btn-primary">Contact</nuxt-link>
    </div>
    <div class="text-center" v-if="this.loading">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { config } from '../../exports/config'

  export default {
    name: 'index',
    head: {
      title: 'Bekijk onze vacatures | P.Stoop Bouwbedrijf'
    },
    data() {
      return {
        jobs: [],
        loading: true
      }
    },
    async fetch() {
      this.jobs = await fetch(`${config.api}/jobs`)
        .then(res => res.json())
        .then(res => res.map(job => {
          this.loading = false;
          return {
            slug: job.slug,
            title: job.api.title,
            description: job.api.description
          }
        }))
    }
  }
</script>

<style scoped>

</style>
