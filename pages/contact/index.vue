<template>
  <div class="wrapper">
    <section class="contenu">
      <CardContenu
        v-bind:titreCard="'Adresse'"
        v-bind:texteCard="[
          `14115 Rue Prince-Arthur,
       bureau 257,
        Pointe-aux-Trembles,
        QC, Canada H1A 1A8`
        ]"
      >
        <div class="g-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5576.25326790115!2d-73.50853717260883!3d45.66835806641551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8e17d2a88bb97%3A0x158743d2650de6ec!2s14115%20Rue%20Prince-Arthur%20bureau%20257%2C%20Pointe-aux-Trembles%2C%20QC%20H1A%201A8!5e0!3m2!1sfr!2sca!4v1575773000398!5m2!1sfr!2sca"
            height
            width
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </div>
      </CardContenu>

      <CardContenu
        v-bind:titreCard="'Nous rejoindre'"
        v-bind:texteCard="[
          `Caroline Charbonneau`,

          `514-498-3962 poste 372`,

          `lespetitssoleils@relaisdubout.org`
        ]"
      >
        <div class="boutons">
          <a class="lien" href="tel:514-498-3962">Appeler</a>
          <a class="lien" href="mailto:lespetitssoleils@relaisdubout.org"
            >Courriel</a
          >
        </div>
      </CardContenu>
    </section>
  </div>
</template>

<script>
import CardContenu from '~/components/CardContenu'

export default {
  name: 'Contact',
  components: {
    CardContenu
  }
}
</script>

<style lang="sass" scoped>
.contenuCarte
  margin-top: 3%
  margin-bottom: 6%

.wrapper
  margin-top: 0
  margin-bottom: 0

.boutons
  display: flex
  flex-direction: column
  justify-content: space-around
  width: 100%

.lien
  margin-top: 2%
  margin-bottom: 2%
  width:

.g-maps
  height: 300px
  padding-bottom: 3%
  iframe
    border-radius: 36px
    max-width: 100%
    width: 100%
    max-height: 100%
    height: 100%
    box-shadow: 0px 4px 10px rgba(227, 67, 163, 0.78)

.interieur
  flex-direction: row !important

/******MEDIA QUERY MOBILE */
@media screen and (max-width: 480px)
  .lien
    width: 100%
    /******MEDIA QUERY LARGE */
@media screen and (min-width: 780px)
  .g-maps
    width: 500px
  .lien
    width: 80%
</style>
