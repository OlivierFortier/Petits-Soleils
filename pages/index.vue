<template>
  <div class="wrapper">
    <section class="contenu">
      <CardContenu
        v-bind:titreCard="'Notre mission'"
        v-bind:texteCard="[
          'Offrir des journées d\'activités adaptées aux besoins de votre enfant dans le but de s\'amuser pleinement.',

          'Les petits soleils de la Pointe de l’île accompagne les jeunes vivant avec un handicap intellectuel dans la réalisation d’activités occupationnelles et ludiques.',

          'Elle supporte également les parents dans leurs efforts à apporter toute l’aide, l’attention et le soutien dont leur enfant a besoin.'
        ]"
      >
        <router-link class="lien" to="/Services">Voir nos services</router-link>
      </CardContenu>
      <card-contenu
        v-bind:titreCard="'Notre histoire'"
        v-bind:texteCard="[
          'Enregistré auprès du Registraire des entreprises du Québec depuis le 13 février 2013, l\'organisme a été créé afin d\'offrir des services de loisirs à une clientèle vivant avec une déficience intellectuelle.',

          'Jusqu\'à tout récemment, le camp de jour estival s\'adressant à cette clientèle était assuré par Loisirs Communautaires Le Relais du Bout qui l\'avait lui-même repris de l\'organisme Loisirs-Soleil en 2001.'
        ]"
      >
        <router-link class="lien" to="/Médias"
          >Découvrez l'ambiance</router-link
        >
      </card-contenu>
    </section>
  </div>
</template>

<script>
import CardContenu from '~/components/CardContenu.vue'

export default {
  name: 'Accueil',
  components: {
    CardContenu
  }
}
</script>

<style lang="sass" scoped></style>
