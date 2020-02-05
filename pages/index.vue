<template>
  <div>
    <div class="top-image">
      <div class="top-image-content">
        <div class="top-image-content--text">
          Okna - System - Serwis
        </div>
        <div class="fullname-text">
          Tomasz Liebner
        </div>
      </div>
    </div>
    <div class="container">
      <div style="height: 20px;text-align: center;">
        <transition name="fade">
          <p v-if="show" class="word-changer">
            {{ wordChanger }}
          </p>
        </transition>
      </div>
      <div id="o-firmie">
        <div class="title-section">
          O firmie
        </div>
        <div>
          {{ description }}
        </div>
      </div>
      <b-row class="image-section">
        <b-col lg="6">
          <div
            data-aos="fade-right"
            data-aos-dealy="400"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <b-img src="../assets/images/img2.jpg" fluid class="image"></b-img>
          </div>
        </b-col>
        <b-col lg="6">
          <div
            data-aos="fade-left"
            data-aos-dealy="400"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <b-img src="../assets/images/roleta-pvc.png" fluid class="image">
            </b-img>
          </div>
        </b-col>
      </b-row>
      <div id="uslugi">
        <div class="title-section">
          Zakres usług
        </div>
        <ul class="service-list">
          <li
            v-for="item in services"
            :key="item.id"
            class="service-list__item"
          >
            <i class="material-icons service-list--icon">
              keyboard_arrow_right
            </i>
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="image-section">
        <div
          data-aos="zoom-in"
          data-aos-dealy="400"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <b-img src="../assets/images/Engineering-Background.jpg" fluid>
          </b-img>
        </div>
      </div>
      <div id="informacje-dodatkowe">
        <div class="title-section">
          Informaje dodatkowe
        </div>
        <ul class="service-list">
          <li
            v-for="item in additionalInformation"
            :key="item.id"
            class="service-list__item"
          >
            <i class="material-icons service-list--icon">
              keyboard_arrow_right
            </i>
            {{ item }}
          </li>
        </ul>
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
      <div id="kontakt">
        <div class="title-section">
          Kontakt
        </div>
        <div style="margin-bottom: 40px;">
          W przypadku pytań proszę o kontakt na poniżej podany numer telefonu
          lub adres e-mail.
        </div>
        <b-row class="contact-section">
          <b-col lg="6" style="padding-right: 0;padding-right: 2px;">
            <div
              data-aos="zoom-in-right"
              data-aos-dealy="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div class="contact-item">
                <i class="material-icons contact-item__icon">phone_iphone</i>
                721 648 839
              </div>
            </div>
          </b-col>
          <b-col lg="6" style="padding-left: 0;">
            <div
              data-aos="zoom-in-left"
              data-aos-dealy="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div class="contact-item">
                <i class="material-icons contact-item__icon">email</i>
                okna.system.serwis@gmail.com
              </div>
            </div>
          </b-col>
        </b-row>
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
      additionalInformation: [
        'Dojazd do klienta na terenie Dolnego Śląska',
        'Gdy nie mogę odebrać telefonu staram się jak najszybciej oddzwonić',
        'Ważne jest dla mnie zadowlenie klienta dlatego sumiennie wykonuję powierzone mi zadania',
        'Rzetelne określenie potrzeb naprawd w sytuacji usterki',
        'W razie wątpliwosci i pytań oferuje fachowe doradztwo w zarkresie pełnionych usług',
        'Obszar dojazdu : Wrocław i okolice'
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
      show: true
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
      ++this.counter
    }, 2400)
  },
  head() {
    return {
      title: 'Okna - System - Serwis | Tomasz Liebner',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: ''
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        }
      ]
    }
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
  // background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
  margin-bottom: 80px;
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
.fullname-text {
  color: white;
  letter-spacing: 1px;
  font-weight: 700;
}
.word-changer {
  color: black;
  letter-spacing: 1px;
  // font-weight: 700;
  font-size: 22px;
}
.content-subsection {
  //
}
.title-section {
  color: #182c36;
  font-size: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
}
.service-list {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;

  &__item {
    // background-color: red;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    cursor: default;
    background-color: white;
    padding-left: 0;
    transition: background-color 1s easy;
    transition: padding-left 1s easy;

    &:hover {
      background-color: #f2f2f2;
      transition: background-color 0.2s ease;
      padding-left: 14px;
      transition: padding-left 0.2s ease;
    }
  }

  &__item:last-child {
    border-bottom: none;
  }

  &--icon {
    vertical-align: middle;
    position: relative;
    top: -1px;
  }
}
.image-section {
  margin-top: 60px;
  margin-bottom: 40px;
}
.image {
  max-height: 380px;
}
.contact-section {
  padding-bottom: 100px;
}
.contact-item {
  background-color: black;
  height: 140px;
  color: white;
  text-align: center;
  line-height: 140px;

  &__icon {
    vertical-align: middle;
  }

  &:hover {
    transform: scale(1.04);
    transition: transform 0.2s ease;
  }
}
</style>
