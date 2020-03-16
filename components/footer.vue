<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="footer-content">
        <span style="color: #fff;font-weight: 600;">
          &copy; 2017 - 2020 OKNA - SYSTEM - SERWIS
        </span>
        <div class="ml-auto author-section">
          <span style="color: #fff;">
            Wykonanie -
          </span>
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
  background-color: #263238;
  padding-top: 80px;
  padding-bottom: 80px;
}
.container {
  padding-left: 25px;
  padding-right: 25px;
}
.footer-content {
  display: flex;
}
.creator-link {
  color: #0066ff;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #ff6666;
    transition: color 0.2s ease;
    text-decoration: none;
  }
}

@media only screen and (max-width: 768px) {
  .footer-content {
    font-size: 14px;
  }
}

@media only screen and (max-width: 576px) {
  .footer-content {
    display: block;
    text-align: center;
  }
  .author-section {
    margin-top: 10px;
  }
}
</style>
