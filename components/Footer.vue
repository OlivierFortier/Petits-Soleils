<template>
  <div class="footer">
    <div class="contenu">
      <div class="adresse">
        <h2>Adresse</h2>
        <!-- link a page contact -->
        <div class="lienAdresse">
          <router-link to="/Contact">
            14115 Rue Prince-Arthur, bureau 257 Pointe-aux-Trembles, QC, Canada
            H1A 1A8
          </router-link>
        </div>
      </div>
      <div class="follow">
        <h2>Suivez-nous!</h2>
        <div class="conteneurSocial">
          <a
            class="medSocial"
            href="https://www.facebook.com/lespetitssoleilsdelapointe/"
          >
            <font-awesome-icon :icon="['fab', 'facebook-square']" />
          </a>
          <a
            class="medSocial"
            href="https://www.instagram.com/les.petits.soleils/"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>
      </div>
      <h5></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass" scoped>
.footer
  z-index: 1 !important
  background-image: url("../assets/img/Footer.svg")
  background-size: cover
  background-repeat: no-repeat
  background-origin: center
  height: auto
  width: 100%
  display: flex
  justify-content: center
  padding-top: 10%

  h5
    margin: 0 auto
    grid-area: cell3
    margin-top: 3%

  .contenu
    height: 100%
    align-self: center
    width: 80vw
    max-width: 500px
    display: grid
    grid-template: 'cell1 cell2' auto / 1fr

.follow , .adresse
  h2
    text-shadow: 0px 2px 5.3357px #DB1A1A
    font-size: 2em

.lienAdresse
  max-width: 10em
  margin: 0 auto
  transition: all 0.5s
  &:hover
    transform: scale(1.1)
  a
    text-decoration: none
    color: white
    text-shadow: 0px 2px 5.3357px #DB1A1A

.conteneurSocial
  a
    margin-left: 5%
    margin-right: 5%
    svg
      path
        transition: all 0.3s
        transform-origin: 50% 50%
      &:hover
        path
          transform: rotateZ(360deg) scale(1.1)


.medSocial
  font-size: 3em
  color: white
  filter: drop-shadow(0 0 0.75rem crimson)


/******MEDIA QUERY MOBILE */
@media screen and (max-width: 450px)
  .footer
    padding-top: 30%

@media screen and (min-width: 451px) and (max-width: 480px)
  .footer
    padding-top: 25%


/******MEDIA QUERY TABLETTE */
@media screen and (min-width: 481px) and (max-width: 780px)
  .footer
    padding-top: 20%
</style>
