<template>
  <div>
    <navbar-component />

    <nuxt />

    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar'
import FooterComponent from '@/components/footer'

export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style>
/*  */
</style>
