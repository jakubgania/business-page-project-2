<template>
  <div>
    <div class="top-image">
      <div class="top-image-content">
        <div class="top-image-content--text">
          Okna System Serwis
        </div>
        <div style="height: 20px;">
          <transition name="fade">
            <p v-if="show" class="word-changer">
              {{ wordChanger }}
            </p>
          </transition>
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <div class="title-section">
          O firmie
        </div>
        <div>
          {{ description }}
        </div>
      </div>
      <div>
        <div class="title-section">
          Zakres usług
        </div>
        <div v-for="item in services" :key="item.id">
          <div>
            <span>
              {{ item }}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div class="title-section">
          Informaje dodatkowe
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113279.93463273442!2d16.897845156905976!3d51.142463957758494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1spl!2spl!4v1507373970591"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0;margin-top:15px;margin-bottom:15px;"
            allowfullscreen=""
          >
          </iframe>
        </div>
      </div>
      <div>
        <div class="title-section">
          Kontakt
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topImage from './../assets/images/top-image.jpg'

export default {
  data() {
    return {
      topImage,
      description:
        'Nasza firma od wielu lat świadczy usługi związane z szeroko rozumianym serwisem okien. Specjalizujemy się w serwisie okien, rolet i drzwi. W swojej bogatej ofercie świadczymy kompleksową regulację okien i drzwi - plastikowych (PCV), aluminiowych (ALU) oraz drewnianych. Dodatkowo serwisujemy rolety, usuwamy zarysowania, a także zajmujemy się konserwacją okuć. Więcej o świadczonych przez nas usługach znajdziesz w zakładce „Zakres usług". Z pewnością nasz zróżnicowany serwis zaspokoi twoje wszelkie oczekiwania.',
      services: [
        'Montaż okien, drzwi i parapetów',
        'Serwis rolet',
        'Regulacja okien i drzwi:',
        'PCV (plastikowych)',
        'ALU (aluminiowych)',
        'Drewnianych',
        'Koserwacja okuć',
        'Usuwanie zarysowań oraz ubytków na profilach PCV za pomocą wosku',
        'Przeróbki okien:',
        'Dodatkowe funkcje antywłamaniowe',
        'Funkcje uchylania',
        'Wymiana uszkodzonych elementów okuć',
        'Wymiana szyb zespolonych',
        'Wymianę uszczelek',
        'Montaż nawiewników okiennych różnych typów',
        'Przeróbki okien z otwieranych na otwieralno-uchylane',
        'Szlifowanie szyb',
        'Inne usterki związane z stolarką'
      ],
      topWords: [
        'Montaż okien',
        'Serwis rolet',
        'Regulacja okien i drzwi',
        'Konserwacja okuć',
        'Usuwanie zarysowań',
        'Przeróbki okien',
        'Wymiana uszkodzonych elementów',
        'Funkcje uchylania',
        'Montaż nawiewników',
        'Szlifowanie',
        'Usterki stolarskie',
        'Dojazd do klienta'
      ],
      counter: 0,
      show: false
    }
  },
  computed: {
    wordChanger() {
      if (this.counter === this.topWords.length) {
        this.resetCounter()
      }
      console.log(this.counter)
      return this.topWords[this.counter]
    }
  },
  methods: {
    resetCounter() {
      this.counter = 0
    }
  },
  mounted() {
    setInterval(() => {
      this.show = !this.show
      if (this.show) ++this.counter
    }, 2400)
  }
}
</script>

<style>
.container {
  max-width: 1000px;
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
.word-changer {
  color: white;
  letter-spacing: 1px;
  font-weight: 700;
}
.content-subsection {
  //
}
.title-section {
  color: #182c36;
  font-size: 40px;
}
</style>
