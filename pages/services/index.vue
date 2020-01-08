<template>
  <div class="wrapper">
    <section class="contenu">
      <CardContenu
        v-bind:titreCard="'Camps de jour'"
        v-bind:texteCard="[
          'Camp de jour adapté pour enfant de 6 à 17 ans vivant avec une déficience intellectuelle et trouble du spectre de l\'autisme. Nous offrons un ratio de 2 enfants pour une animatrice.',

          'Inscription le 23 mars 2019 lors de notre journée porte-ouverte obligatoire. Vous devez venir accompagné de votre enfant.'
        ]"
      />

      <CardContenu
        v-bind:titreCard="'Répits de jour'"
        v-bind:texteCard="[
          'Camp de jour adapté pour enfant de 6 à 17 ans vivant avec une déficience intellectuelle et trouble du spectre de l\'autisme. Nous offrons un ratio de 2 enfants pour une animatrice.',

          'Inscription le 23 mars 2019 lors de notre journée porte-ouverte obligatoire. Vous devez venir accompagné de votre enfant.'
        ]"
      />
    </section>
  </div>
</template>

<script>
import CardContenu from '~/components/CardContenu.vue'
export default {
  name: 'Services',
  components: { CardContenu }
}
</script>

<style lang="sass" scoped>
.wrapper
  margin-top: 0 !important

.contenuCarte
  margin-top: 0
  margin-bottom: 8%

/******MEDIA QUERY MOBILE */
@media screen and (max-width: 480px)
  .contenuCarte
    margin-bottom: 15%
</style>
