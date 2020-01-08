<template>
  <div id="app">
    <Menu v-sticky class="barre-menu" />
    <transition name="affichePage" mode="out-in">
      <HeaderAccueil v-if="$route.name == 'Accueil'" class="HeaderAccueil" />
      <Header v-if="$route.name != 'Accueil'" class="Header" />
    </transition>
    <section id="page">
      <transition name="affichePage" mode="out-in">
        <router-view />
      </transition>
    </section>
    <Footer v-sticky class="leFooter" />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import HeaderAccueil from '~/components/HeaderAccueil.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    HeaderAccueil,
    Header,
    Footer,
    Menu
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap')
$white: white

#app
  font-family: 'Nunito', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  width: 100%
  min-height: 100vh
  display: flex
  flex-direction: column
  color: $white

.leFooter
  z-index: 1

.barre-menu
    background: linear-gradient(95deg, rgba(206,226,74,1) 0%, rgba(207,211,82,1) 100%)
    z-index: 1000000

#page
  flex: 1

.wrapper
  display: flex
  justify-content: center
  margin-top: 5%

.contenu
  display: flex
  flex-direction: column
  width: 80vw
  max-width: 900px
  justify-content: center
  padding-bottom: 3.3%

.lien
  display: flex
  justify-content: center
  font-size: 1.8em
  font-weight: 700
  text-decoration: none
  color: white
  transition: all 0.5s
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%)
  width: 10em
  max-width: 100%
  margin: 0 auto
  border-radius: 30px
  box-shadow: 0px 1px 15px -2px rgba(0,0,0,0.64)
  text-shadow: 0px 4px 4px #401ADB
  padding-top: 1%
  padding-bottom: 1%


.lien:hover
  transform: scale(1.1)

.affichePage-enter-active
  animation: entrer 1s
  opacity: 0

.affichePage-leave-active
  animation: partir 1s

@keyframes entrer
  from
    transform: translateY(-50px)
    opacity: 0
  to
    transform: translateY(0px)
    opacity: 1

@keyframes partir
  from
    transform: translateY(0px)
  to
    transform: translateY(-50px)
    opacity: 0

/******MEDIA QUERY MOBILE */
@media screen and (max-width: 480px)
  .contenu
    padding-bottom: 5%
    width: 90vw

  .lien
    font-size: 1.5em
    padding-top: 2%
    padding-bottom: 2%
</style>
