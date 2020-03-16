<template>
  <div>
    <div
      data-aos="zoom-up"
      data-aos-dealy="0"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div class="top-image">
        <div class="top-image-content">
          <div class="top-image-content--text">
            <span
              data-aos="fade-out"
              data-aos-dealy="1000"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Okna
            </span>
            <span
              data-aos="fade-out"
              data-aos-dealy="2000"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              - System
            </span>
            <span
              data-aos="zoom-out"
              data-aos-dealy="3000"
              data-aos-duration="3000"
              data-aos-once="true"
            >
              - Serwis
            </span>
          </div>
          <div class="fullname-text">
            <span
              data-aos="zoom-in-up"
              data-aos-dealy="3000"
              data-aos-duration="3000"
              data-aos-once="true"
            >
              Tomasz Liebner | 721 648 839
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="word-changer-section">
        <transition name="fade">
          <p v-if="show" class="word-changer">
            {{ wordChanger }}
          </p>
        </transition>
      </div>
      <div id="o-firmie">
        <div
          data-aos="fade-right"
          data-aos-dealy="0"
          data-aos-duration="400"
          data-aos-once="true"
        >
          <div class="title-section">
            O firmie
          </div>
        </div>
        <b-row class="icons-section">
          <b-col cols="3" lg="3" class="icons-section__item">
            <div
              data-aos="zoom-in"
              data-aos-dealy="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <i class="material-icons icons-section__icon">border_all</i>
            </div>
          </b-col>
          <b-col cols="3" lg="3" class="icons-section__item">
            <div
              data-aos="zoom-in"
              data-aos-dealy="800"
              data-aos-duration="1400"
              data-aos-once="true"
            >
              <i class="material-icons icons-section__icon">build</i>
            </div>
          </b-col>
          <b-col cols="3" lg="3" class="icons-section__item">
            <div
              data-aos="zoom-in"
              data-aos-dealy="1000"
              data-aos-duration="1600"
              data-aos-once="true"
            >
              <i class="material-icons icons-section__icon">settings</i>
            </div>
          </b-col>
          <b-col cols="3" lg="3" class="icons-section__item">
            <div
              data-aos="zoom-in"
              data-aos-dealy="1200"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <i class="material-icons icons-section__icon">format_paint</i>
            </div>
          </b-col>
        </b-row>
        <div class="description">
          <p>{{ description }}</p>
        </div>
      </div>
      <b-row class="image-section">
        <b-col md="6" lg="6" style="text-align: center;">
          <div
            data-aos="fade-right"
            data-aos-dealy="400"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <b-img src="../assets/images/img2.jpg" fluid class="image"></b-img>
          </div>
        </b-col>
        <b-col md="6" lg="6" style="text-align: center;">
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
        <div
          data-aos="fade-right"
          data-aos-dealy="0"
          data-aos-duration="400"
          data-aos-once="true"
        >
          <div class="title-section">
            Zakres usług
          </div>
        </div>
        <ul class="service-list">
          <li
            v-for="item in services"
            :key="item.id"
            class="service-list__item"
          >
            <div style="display: flex;">
              <div>
                <i class="material-icons service-list--icon">
                  keyboard_arrow_right
                </i>
              </div>
              <div class="description">
                <p style="margin-bottom: 0;">
                  {{ item }}
                </p>
              </div>
            </div>
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
        <div
          data-aos="fade-right"
          data-aos-dealy="0"
          data-aos-duration="400"
          data-aos-once="true"
        >
          <div class="title-section">
            Informaje dodatkowe
          </div>
        </div>
        <ul class="service-list">
          <li
            v-for="item in additionalInformation"
            :key="item.id"
            class="service-list__item"
          >
            <div style="display: flex;">
              <div>
                <i class="material-icons service-list--icon">
                  keyboard_arrow_right
                </i>
              </div>
              <div class="description">
                <p style="margin-bottom: 0;">
                  {{ item }}
                </p>
              </div>
            </div>
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
      <div
        data-aos="fade-right"
        data-aos-dealy="0"
        data-aos-duration="400"
        data-aos-once="true"
      >
        <div class="title-section">
          Opinie
        </div>
        <div class="description" style="margin-bottom: 40px;">
          <p>Zobacz opinie na temat mojej działalności lub napisz swoją.</p>
        </div>
      </div>
    </div>
    <div class="recommendation-section">
      <b-row>
        <b-col lg="10" offset-lg="1">
          <b-row>
            <b-col v-for="item in recommendations" :key="item.id" lg="3">
              <div class="recommendation-box">
                <div style="padding-bottom: 20px;">
                  <span class="recommendation-author">
                    {{ item.author }}
                  </span>
                  <div style="margin-top: 10px;">
                    <i class="material-icons recommendation-icon">
                      star
                    </i>
                    <i class="material-icons recommendation-icon">
                      star
                    </i>
                    <i class="material-icons recommendation-icon">
                      star
                    </i>
                    <i class="material-icons recommendation-icon">
                      star
                    </i>
                    <i class="material-icons recommendation-icon">
                      star
                    </i>
                  </div>
                </div>
                <div>
                  <p class="recommendation-descritpion">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div style="text-align: -webkit-center;">
        <a
          :href="googleRecommendationsLink"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none;"
        >
          <div class="button-link google">
            Rekomendacje - Google
          </div>
        </a>
      </div>
    </div>
    <div class="container">
      <div
        data-aos="fade-right"
        data-aos-dealy="0"
        data-aos-duration="400"
        data-aos-once="true"
      >
        <div class="title-section">
          Naprawy
        </div>
        <div class="description" style="margin-bottom: 40px;">
          <p>
            Poniżej kilka zdjęć z różnych napraw, które miałem okazję
            przeprowadzić.
          </p>
        </div>
      </div>
    </div>
    <div class="gallery-section">
      <b-row>
        <b-col
          v-for="item in galleryImages"
          :key="item.id"
          sm="6"
          lg="3"
          class="gallery-item"
        >
          <b-img :src="item" fluid class="gallery-image"></b-img>
        </b-col>
      </b-row>
    </div>
    <div class="container">
      <div id="uslugi">
        <div
          data-aos="fade-right"
          data-aos-dealy="0"
          data-aos-duration="400"
          data-aos-once="true"
        >
          <div class="title-section">
            Facebook
          </div>
        </div>
        <div class="description">
          <p>
            Zachęcam do odwiedzin mojego profilu na Facebooku gdzie często
            zamieszczam różne informacje oraz można zadać mi pytanie.
          </p>
        </div>
        <div style="text-align: -webkit-center;">
          <a
            :href="facebookLink"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: none;"
          >
            <div class="button-link facebook">
              Facebook
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div id="kontakt">
        <div
          data-aos="fade-right"
          data-aos-dealy="0"
          data-aos-duration="400"
          data-aos-once="true"
        >
          <div class="title-section">
            Kontakt
          </div>
        </div>
        <div class="description" style="margin-bottom: 40px;">
          <p>{{ contactDescription }}</p>
        </div>
        <b-row class="contact-section">
          <b-col md="6" lg="6" class="contact-section__tile-phonenumber">
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
          <b-col md="6" lg="6" class="contact-section__tile-email">
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
      <b-row class="image-section">
        <b-col lg="12" style="text-align: center;">
          <div
            data-aos="fade-up"
            data-aos-dealy="400"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <b-img src="../assets/images/img3.jpg" fluid class="image"></b-img>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import topImage from './../assets/images/top-image.jpg'
import image1 from './../assets/images/image-1.jpg'
import image2 from './../assets/images/image-2.jpg'
import image3 from './../assets/images/image-3.jpg'
import image4 from './../assets/images/image-4.jpg'

export default {
  data() {
    return {
      topImage,
      description:
        'Nasza firma od wielu lat świadczy usługi związane z szeroko rozumianym serwisem okien. Specjalizujemy się w serwisie okien, rolet i drzwi. W swojej bogatej ofercie świadczymy kompleksową regulację okien i drzwi - plastikowych (PCV), aluminiowych (ALU) oraz drewnianych. Dodatkowo serwisujemy rolety, usuwamy zarysowania, a także zajmujemy się konserwacją okuć. Więcej o świadczonych przez nas usługach znajdziesz w sekcji „Zakres usług". Z pewnością nasz zróżnicowany serwis zaspokoi twoje wszelkie oczekiwania.',
      contactDescription:
        ' W przypadku pytań proszę o kontakt na poniżej podany numer telefonu lub adres e-mail.',
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
        'Naprawa ram okiennych po włamaniu',
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
      show: true,
      recommendations: [
        {
          author: 'Kuba Bojanowski',
          description:
            'Usługa regulacji okien wykonana fachowo i terminowo - zgodnie z oczekiwaniami. Z pełną odpowiedzialnością mogę polecić usługi świadczone przez firmę jako rzetelnego i kulturalnego wykonawcę.'
        },
        {
          author: 'Izabela Piechura',
          description:
            'Pełen profesjonalizm. Okna chodzą jak marzenie a dodam, że miałam duży problem z zamknięciem zwłaszcza jednego z nich i obawiałam się że jest uszkodzone. Pan pracuje ekspresowo ale nie kosztem jakości. Cena wcale nie wygurowana. Polecam'
        },
        {
          author: 'Paweł Wasiak',
          description:
            'Fachowiec jest miła osobą. Rolety naprawione szybko i sprawnie. Ustawione działają bez zarzutu. Końcowa cena, taka jak ustaliliśmy, mimo piętrzących się problemów.Można śmiało polecać ;)'
        },
        {
          author: 'Aga Kac',
          description:
            'Chciałam serdecznie podziękować za szybką naprawę. Jestem zadowolona z Państwa usług. Cena nie wygórowana. Będę polecać Wasze usługi znajomym. Dziękuję.'
        }
      ],
      facebookLink: 'https://pl-pl.facebook.com/pg/NaprawaOkienRolet/posts/',
      googleRecommendationsLink:
        'https://www.google.com/search?q=okna+system+serwis&oq=okna+system+serwis&aqs=chrome.0.69i59j0j69i60j69i61l2.3562j0j4&sourceid=chrome&ie=UTF-8#lrd=0x470fe98f3b81528f:0x730b235a5ef71540,1,,,',
      galleryImages: [image1, image2, image3, image4]
    }
  },
  computed: {
    wordChanger() {
      if (this.counter === this.topWords.length) {
        this.resetCounter()
      }

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
          content:
            'Nasza firma od wielu lat świadczy usługi związane z szeroko rozumianym serwisem okien. Specjalizujemy się w serwisie okien, rolet i drzwi.'
        },
        {
          name: 'keywords',
          content:
            'okna, system, serwis, Tomasz Liebner, montaż, okna, rolety, regulacja, drzwi, usterki, szlifowanie, klient, dojazd, przeróbki, zarysowania, nawiewniki, konserwacja, Wrocław'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Okna - System - Serwis | Tomasz Liebner'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://okna-system-serwis.pl'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Nasza firma od wielu lat świadczy usługi związane z szeroko rozumianym serwisem okien. Specjalizujemy się w serwisie okien, rolet i drzwi. Dojazd do klienta na terenie D'
        }
      ]
    }
  }
}
</script>

<style>
body {
  overflow-x: hidden;
}
.container {
  max-width: 1000px;
}

@media only screen and (max-width: 576px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>

<style lang="scss">
$test-font-size: 18px;

.top-image {
  content: '';
  display: block;
  position: relative;
  top: 0;
  left: 0;
  background-image: linear-gradient(
      180deg,
      rgba(0, 82, 204, 0.6),
      rgba(102, 204, 255, 0.4)
    ),
    url(./../assets/images/top-image.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
    margin-bottom: 40px;
  }
}
.fullname-text {
  color: #fff;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 20px;
}
.word-changer-section {
  height: 34px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
}
.word-changer {
  color: #000;
  letter-spacing: 1px;
  font-size: 22px;
  margin-bottom: 0;
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
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e6e6e6;
    cursor: default;
    background-color: #fff;
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
  padding-bottom: 40px;

  &__tile-phonenumber {
    padding-right: 0;
    padding-right: 4px;
  }

  &__tile-email {
    padding-left: 0;
  }
}
.contact-item {
  background-color: #eceff1;
  height: 140px;
  color: #000;
  text-align: center;
  line-height: 140px;
  font-size: $test-font-size;

  &__icon {
    vertical-align: middle;
  }

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
}
.icons-section {
  margin-top: 0px;
  margin-bottom: 40px;

  &__item {
    text-align: center;
    cursor: default;
  }

  &__icon {
    font-size: 44px;
    color: #e6e6e6;
  }
}
.description {
  letter-spacing: 0.2px;
  font-size: $test-font-size;
}
.recommendation-section {
  background-color: #0066ff;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 60px;
}
.recommendation-box {
  margin: 20px;
  padding: 20px;
  color: white;
}
.recommendation-author {
  font-size: 22px;
  color: #e6e6e6;
}
.recommendation-icon {
  color: #ffdb4d;
}
.recommendation-description {
  letter-spacing: 0.4px;
}
.button-link {
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  height: 60px;
  line-height: 60px;
  color: white;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease;
  transition: color 0.2 ease;
}
.google {
  background-color: #ff7733;

  &:hover {
    background-color: #e67300;
    color: #e6e6e6;
    transition: background-color 0.2s ease;
    transition: color 0.2 ease;
  }
}
.facebook {
  margin-top: 40px;
  background-color: #3360ff;

  &:hover {
    background-color: #2352f7;
    color: #e6e6e6;
    transition: background-color 0.2s ease;
    transition: color 0.2 ease;
  }
}
.gallery-section {
  margin-top: 120px;
  margin-bottom: 120px;
}
.gallery-item {
  text-align: center;
}

@media screen and (min-width: 1200px) {
  .top-image-content {
    &--text {
      font-size: 60px;
    }
  }
}
@media only screen and (max-width: 1200px) {
  .recommendation-box {
    margin: 0;
    padding: 0;
  }
}

@media only screen and (max-width: 992px) {
  .top-image-content {
    &--text {
      font-size: 5vw;
    }
  }
  .gallery-item {
    &:nth-child(3) {
      margin-top: 25px;
    }

    &:nth-child(4) {
      margin-top: 25px;
    }
  }
  .recommendation-section {
    margin-bottom: 20px;
  }
  .recommendation-box {
    margin: 20px;
  }
}

@media only screen and (max-width: 768px) {
  .top-image-content {
    &--text {
      font-size: 4vw;
    }
  }
  .fullname-text {
    font-size: 18px;
  }
  .contact-section {
    padding-bottom: 40px;

    &__tile-phonenumber {
      padding-right: 15px;
      margin-bottom: 2px;
    }

    &__tile-email {
      padding-left: 15px;
    }
  }
}

@media only screen and (max-width: 576px) {
  .top-image {
    height: 400px;
    margin-bottom: 60px;
  }
  .top-image-content {
    &--text {
      letter-spacing: 2px;
      font-size: 5.4vw;
    }
  }
  .word-changer-section {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .word-changer {
    font-size: 18px;
  }
  .title-section {
    font-size: 26px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .title-section {
    font-size: 22px;
  }
  .description {
    font-size: 16px;
  }
  .google {
    width: 92%;
  }
  .icons-section {
    &__icon {
      font-size: 36px;
    }
  }
  .contact-section {
    padding-bottom: 40px;

    &__tile-phonenumber {
      padding-right: 15px;
      margin-bottom: 2px;
    }

    &__tile-email {
      padding-left: 15px;
    }
  }
  .contact-item {
    height: 80px;
    line-height: 80px;
    font-size: 16px;
  }
  .image {
    max-width: 70%;
  }
  .recommendation-box {
    margin-left: 15px;
    margin-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .gallery-section {
    margin-top: 60px;
    margin-bottom: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .gallery-item {
    &:nth-child(2) {
      margin-top: 12px;
    }

    &:nth-child(3) {
      margin-top: 12px;
    }

    &:nth-child(4) {
      margin-top: 12px;
    }
  }
}
</style>
