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

      <Card-api v-bind:titreCard="'Api test'" v-bind:texteCard="posts" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import CardContenu from '~/components/CardContenu.vue'
import CardApi from '~/components/CardApi.vue'
export default {
  name: 'Services',
  components: { CardContenu, CardApi },
  data() {
    return {
      posts: []
    }
  },
  async created() {
    try {
      const res = await axios.get(
        'https://spreadsheets.google.com/feeds/list/1N9N3KHxUaEjfYTOJyf5YDmd88SpO9wQbqWt3jxsQK9k/od6/public/values?alt=json'
      )
      this.posts = res.data.feed.entry
    } catch (error) {
      this.posts = error
    }
  }
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
