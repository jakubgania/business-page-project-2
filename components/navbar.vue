<template>
  <div style="position: relative;z-index: 1000;">
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#" class="navbar-title">
        Okna - System - Serwis
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto d-none d-sm-none d-md-block">
        <a href="#o-firmie" class="anchor-link">O firmie</a>
        <a href="#uslugi" class="anchor-link">Usługi</a>
        <a href="#informacje-dodatkowe" class="anchor-link">
          Informacje dodatkowe
        </a>
        <a href="#kontakt" class="anchor-link">Kontakt</a>
        <a
          href="https://pl-pl.facebook.com/pg/NaprawaOkienRolet/posts/"
          target="_blank"
          rel="noopener noreferrer"
          class="facebook-nav"
        >
          FACEBOOK
        </a>
      </b-navbar-nav>

      <b-navbar-nav
        @click="$emit('switchNavigationDrawer')"
        class="d-block d-sm-block d-md-none"
        style="cursor: default;"
      >
        <i class="material-icons navbar-menu-icon">
          drag_handle
        </i>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.navbar-title {
  font-weight: 700;
  font-size: 17px;
}
.anchor-link {
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
  color: #000;
  letter-spacing: 0.4px;
  text-decoration: none;

  &:hover {
    color: #0066ff;
    transition: color 0.2s ease;
  }
}
.facebook-nav {
  font-size: 14px;
  letter-spacing: 0.4px;
  font-weight: 700;
}
@media only screen and (max-width: 576px) {
  .navbar-title {
    font-size: 15px;
  }
  .navbar-menu-icon {
    font-size: 40px;
    position: relative;
    top: 4px;
  }
}
</style>
