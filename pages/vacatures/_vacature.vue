<template>
  <div class="container">
    <div v-if="job">
      <h2>{{ job.title }}</h2>
      <div v-html="job.description"></div>
      <nuxt-link to="/contact" class="btn btn-primary my-3">Contact</nuxt-link>
    </div>
    <div class="text-center" v-if="!job">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { config } from '../../exports/config'

export default {
  name: '_vacature',
  data: function() {
    return {
      job: null
    }
  },
  async fetch() {
    this.job = await fetch(`${config.api}/jobs?slug=${this.$route.params.vacature}`)
      .then(res => res.json())
      .then(res => res.map(job => {
        return {
          title: job.api.title,
          description: job.api.description
        }
      }))
      .then(res => res[0])
  }
}
</script>

<style scoped>

</style>
