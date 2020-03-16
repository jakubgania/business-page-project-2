<template>
  <div v-if="showDrawerFlag" class="navigation-drawer">
    <ul class="list-menu">
      <li class="menu-item">
        <a
          @click="$emit('updateNavigationDrawerValue', false)"
          href="#o-firmie"
          class="anchor-link"
        >
          O firmie
        </a>
      </li>
      <li class="menu-item">
        <a
          @click="$emit('updateNavigationDrawerValue', false)"
          href="#uslugi"
          class="anchor-link"
        >
          Usługi
        </a>
      </li>
      <li class="menu-item">
        <a
          @click="$emit('updateNavigationDrawerValue', false)"
          href="#informacje-dodatkowe"
          class="anchor-link"
        >
          Informacje dodatkowe
        </a>
      </li>
      <li class="menu-item">
        <a
          @click="$emit('updateNavigationDrawerValue', false)"
          href="#kontakt"
          class="anchor-link"
        >
          Kontakt
        </a>
      </li>
      <li class="menu-item">
        <a
          href="https://pl-pl.facebook.com/pg/NaprawaOkienRolet/posts/"
          target="_blank"
          rel="noopener noreferrer"
          class="facebook-nav"
        >
          FACEBOOK
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.navigation-drawer {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
.list-menu {
  margin-top: 60px;
}
.menu-item {
  padding-top: 10px;
  padding-bottom: 10px;
  list-style-type: square;
}
.anchor-link {
  font-size: 14px;
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
</style>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showDrawerFlag: {
      get() {
        this.toggleScrollbar(this.drawer)
        return this.drawer
      },
      set(value) {
        this.$emit('updateNavigationDrawerValue', value)
      }
    }
  },
  methods: {
    toggleScrollbar(drawer) {
      if (process.browser) {
        if (drawer) {
          document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        } else {
          document.getElementsByTagName('html')[0].style.overflow = 'auto'
        }
      }
    }
  }
}
</script>
