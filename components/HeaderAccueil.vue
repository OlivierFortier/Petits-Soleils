<template>
  <div class="header">
    <!-- <Menu class="barre-menu" /> -->
    <div class="hero-img">
      <img class="monImage" src="~/assets/img/petits-logo.png" alt srcset />
    </div>
    <div class="intro">
      <p>
        Camp de jour et répits de jour pour enfants de 6 à 17 ans vivant avec
        une déficience intellectuelle ou un trouble du spectre de l'autisme
      </p>
    </div>
  </div>
</template>

<script>
// import Menu from './Menu.vue'
export default {
  name: 'HeaderAccueil',
  components: {},
  beforeMount() {
    window.addEventListener('scroll', this.deroulement)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.deroulement)
  },
  methods: {
    deroulement() {
      // reste a définir le scrolly final
      const heroImg = document.querySelector('.monImage')
      if (heroImg != null) {
        if (window.scrollY >= 10) {
          // lentement réduire l'opacité
          heroImg.style.opacity = '0.7'
          heroImg.style.transform = 'translate(0% ,-50%)'
        }
        if (window.scrollY >= 20) {
          // lentement réduire l'opacité
          heroImg.style.opacity = '0.4'
        }
        if (window.scrollY >= 30) {
          // lentement réduire l'opacité
          heroImg.style.opacity = '0.2'
        } else {
          // faire l'inverse
          heroImg.style.opacity = '1'
          heroImg.style.transform = 'translate(0% ,0%)'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.header
    background-image: url("../assets/img/headerfull.svg")
    background-size: cover
    background-repeat: no-repeat
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding-bottom: 5%

    .hero-img
        width: 100%

        img
          padding-top: 3%
          max-width: 80vw

.monImage
    transition: all 0.5s
    filter: drop-shadow(0 0 0.75rem #D57584)


.intro
    width: 100%
    display: flex
    justify-content: center
    margin-top: 6%

    p
      align-self: center
      width: 60vw
      max-width: 500px
      font-size: 1.5em
      font-weight: 800
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)


/******MEDIA QUERY MOBILE */
@media screen and (max-width: 480px)
    .header
        height: auto
        padding-bottom: 10%

    .hero-img
      padding-bottom: 20%
      padding-top: 15%

    .intro
        p
            font-size: 1em
            padding-bottom: 5%

/******MEDIA QUERY TABLETTE */
@media screen and (min-width: 481px) and (max-width: 780px)
    .header
        height: auto

    .intro
        margin-top: 12%
        p
            font-size: 1.2em
            padding-bottom: 5%

/******MEDIA QUERY LARGE SCREEN */
@media screen and (min-width: 1680px)
  .header
    padding-bottom: 7%

  .intro
    margin-top: 13%
</style>
