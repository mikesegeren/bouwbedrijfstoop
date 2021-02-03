<template>
  <div>
    <Navbar></Navbar>
    <AppHeader></AppHeader>
    <div class="container">
      <Nuxt/>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<style>
  body {
    background: #f8f8f8;
  }
</style>

<script>
  import AppHeader from '../components/app-header'
  import NavBar from '../components/navbar'
  import AppFooter from '~/components/app-footer'

  export default {
    components: { AppFooter, NavBar, AppHeader }
  }
</script>
