<template>
  <div class="wrapper">
    <section class="contenu">
      <CardContenu v-bind:titreCard="'Photos'" v-bind:texteCard="[]">
        <carousel
          v-bind:adjustableHeight="false"
          v-bind:autoplay="true"
          v-bind:autoplayTimeout="2500"
          v-bind:navigationClickTargetSize="50"
          v-bind:autoplayHoverPause="true"
          v-bind:navigationEnabled="tablette"
          v-bind:centerMode="true"
          v-bind:mouse-drag="true"
          v-bind:touchDrag="true"
          v-bind:perPage="1"
          v-bind:loop="true"
        >
          <slide class="s-Slide">
            <img src="@/assets/img/photos/ps2.jpg" alt />
          </slide>
          <slide class="s-Slide">
            <img src="@/assets/img/photos/ps1.jpg" alt />
          </slide>
          <slide class="s-Slide">
            <img src="@/assets/img/photos/ps3.jpg" alt />
          </slide>
          <slide class="s-Slide">
            <img src="@/assets/img/photos/ps4.jpg" alt />
          </slide>
          <slide class="s-Slide">
            <img src="@/assets/img/photos/ps8.jpg" alt />
          </slide>
          <slide class="s-Slide">
            <img src="@/assets/img/photos/ps6.jpg" alt />
          </slide>
        </carousel>
      </CardContenu>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import CardContenu from '~/components/CardContenu'

export default {
  name: 'Medias',
  components: {
    Carousel,
    Slide,
    CardContenu
  },
  data() {
    return {
      tablette: true
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.handleNavigation)
  },
  mounted() {
    this.handleNavigation()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleNavigation)
  },
  methods: {
    handleNavigation() {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      if (width <= 780) {
        this.tablette = false
      } else {
        this.tablette = true
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.wrapper
  margin-top: 0 !important

.contenuCarte
  margin-top: 0
  margin-bottom: 15%

.s-Slide
  max-width: 100%
  width: 1500px
  img
    max-width: 100%
    max-height: 500px
    margin: auto
  display: flex
  align-items: center

.contenuCarte
  margin-bottom: 0

/******MEDIA QUERY MOBILE */
@media screen and (max-width: 480px)
  .s-Slide
    color: brown

    /******MEDIA QUERY TABLETTE */
@media screen and (min-width: 481px) and (max-width: 780px)
  .s-Slide
   color: brown
</style>
