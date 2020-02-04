<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#" class="navbar-title">
        Okna - System - Serwis
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav class="ml-auto">
        <a href="" class="anchor-link">O firmie</a>
        <a href="" class="anchor-link">Usługi</a>
        <a href="" class="anchor-link">Informacje dodatkowe</a>
        <a href="" class="anchor-link">Kontakt</a>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.navbar-title {
  font-weight: 800;
}
.anchor-link {
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
  color: black;
  letter-spacing: 0.4px;
  text-decoration: none;

  &:hover {
    color: #0066ff;
    transition: color 0.2s ease;
  }
}
</style>
