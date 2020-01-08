<template>
  <div
    v-bind:class="{ contenuMedia: $route.name == 'Médias' }"
    class="contenuCarte"
  >
    <h1
      v-bind:titreCard="titreCard"
      v-if="titreCard != null || ''"
      class="titreCard"
    >
      {{ titreCard }}
    </h1>
    <div
      v-bind:class="{ rowContact: $route.name == 'Contact' }"
      class="interieur"
    >
      <div
        v-bind:class="{ texteContact: $route.name == 'Contact' }"
        v-if="texteCard != null || ''"
        class="texte"
      >
        <p v-for="texte in texteCard" :key="texte">{{ texte }}</p>
      </div>
      <slot class="leLien"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContenu',
  props: {
    titreCard: {
      type: String,
      default: 'Erreur'
    },
    texteCard: {
      type: Array,
      required: false,
      default: () => ['Erreur']
    }
  }
}
</script>

<style lang="sass" scoped>
.contenuCarte
    max-width: 100%
    background: linear-gradient(160.44deg, #BA4AEF 4.72%, #ED6AA1 95.62%)
    box-shadow: 0px 4px 10px rgba(227, 67, 163, 0.78)
    border-radius: 31px
    display: flex
    flex-direction: column
    padding: 5% 5%
    padding-top: 1%
    padding-bottom: 1.5%
    margin-top: 5%

.contenuMedia
  margin-bottom: 5% !important

.interieur
  display: flex
  flex-direction: column

.rowContact
  flex-direction: row
  justify-content: space-between

.leLien
  width: 100%

.titreCard
  text-shadow: 0px 4px 4px #401ADB

.texteContact
  max-width: 400px
  width: auto
  margin: auto 0 !important

.texte
 font-size: 1.5em
 text-align: left
 p
   margin-top: 0
   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)


/******MEDIA QUERY MOBILE */
@media screen and (max-width: 480px)
  .texte
    font-size: 1.15em

  .texteContact
    max-width: 100%
    font-size: 1.10em

  .contenuCarte
    padding-bottom: 7% !important
    margin-bottom: 10% !important

  .contenuMedia
   margin-bottom: 5% !important

  .rowContact
    flex-direction: column

/******MEDIA QUERY TABLETTE */
@media screen and (min-width: 481px) and (max-width: 780px)
  .texte
    font-size: 1.3em

  .rowContact
    flex-direction: column
</style>
