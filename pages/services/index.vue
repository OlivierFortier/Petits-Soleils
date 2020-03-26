<template>
  <div class="wrapper">
    <section class="contenu">
      <Card-api
        v-bind:titreCard="'Camps de jour'"
        v-bind:texteCard="posts"
        v-bind:camp="true"
      />

      <Card-api
        v-bind:titreCard="'Répits de jour'"
        v-bind:texteCard="posts"
        v-bind:camp="false"
      >
      </Card-api>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import CardApi from '~/components/CardApi.vue'
export default {
  name: 'Services',
  components: { CardApi },
  data() {
    return {
      posts: []
    }
  },
  async created() {
    if (localStorage.getItem('posts')) {
      this.posts = JSON.parse(localStorage.getItem('posts'))
    } else {
      try {
        const res = await axios.get(
          'https://spreadsheets.google.com/feeds/list/1N9N3KHxUaEjfYTOJyf5YDmd88SpO9wQbqWt3jxsQK9k/od6/public/values?alt=json'
        )
        localStorage.setItem('posts', JSON.stringify(res.data.feed.entry))
        this.posts = res.data.feed.entry
      } catch (error) {
        this.posts = error
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
  margin-bottom: 8%

/******MEDIA QUERY MOBILE */
@media screen and (max-width: 480px)
  .contenuCarte
    margin-bottom: 15%
</style>
