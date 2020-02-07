<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="footer-content">
        <div>
          OKNA - SYSTEM - SERWIS | &copy; 2017 - 2020
        </div>
        <div class="ml-auto">
          Wykonanie -
          <a href="https://jakubgania.io" class="creator-link">
            jakubgania.io
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.footer-wrapper {
  background-color: #ebf0fa;
  padding-top: 40px;
  padding-bottom: 40px;
}
.footer-content {
  display: flex;
}
.creator-link {
  color: #0066ff;

  &:hover {
    color: #000;
    transition: color 0.2s ease;
    text-decoration: none;
  }
}

@media only screen and (max-width: 576px) {
  .footer-content {
    display: block;
  }
}
</style>
