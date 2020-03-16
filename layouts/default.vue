<template>
  <div>
    <client-only>
      <portal-rules-alert-component />
    </client-only>

    <navigation-drawer-component
      :drawer="drawer"
      @switchNavigationDrawer="switchNavigationDrawer"
      @updateNavigationDrawerValue="updateNavigationDrawerValue"
    />

    <navbar-component @switchNavigationDrawer="switchNavigationDrawer" />

    <nuxt />

    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar'
import NavigationDrawerComponent from '@/components/navigation-drawer'
import FooterComponent from '@/components/footer'
import PortalRulesAlertComponent from '@/components/portal-rules-alert'

export default {
  components: {
    NavbarComponent,
    NavigationDrawerComponent,
    FooterComponent,
    PortalRulesAlertComponent
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    switchNavigationDrawer() {
      this.drawer = !this.drawer
    },
    updateNavigationDrawerValue(value) {
      this.drawer = value
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
