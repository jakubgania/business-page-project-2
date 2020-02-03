<template>
  <div>
    <div class="top-image">
      <div class="top-image-content">
        <div class="top-image-content--text">
          Okna System Serwis
        </div>
      </div>
    </div>
    <div class="container">
      top image
    </div>
  </div>
</template>

<script>
import topImage from './../assets/images/top-image.jpg'

export default {
  data() {
    return {
      topImage
    }
  }
}
</script>

<style>
.container {
  max-width: 1000px;
  background-color: bisque;
}
</style>

<style lang="scss">
.top-image {
  content: '';
  display: block;
  position: relative;
  top: 0;
  left: 0;
  background-image: url(./../assets/images/top-image.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 600px;
}
.top-image-content {
  max-width: 1200px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 14px;
  text-align: center;

  &--text {
    color: #fff;
    letter-spacing: 4px;
    font-size: 3vw;
    font-weight: 800;
  }
}
</style>
