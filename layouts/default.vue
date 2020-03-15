<template>
  <div>
    <client-only>
      <portal-rules-alert-component />
    </client-only>

    <navbar-component />

    <nuxt />

    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar'
import FooterComponent from '@/components/footer'
import PortalRulesAlertComponent from '@/components/portal-rules-alert'

export default {
  components: {
    NavbarComponent,
    FooterComponent,
    PortalRulesAlertComponent
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
