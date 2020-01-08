<template>
  <div class="header">
    <h1 class="titrePage">{{ $route.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass" scoped>

.header
    background-image: url("../assets/img/header.svg")
    background-size: cover
    background-repeat: no-repeat
    height: 20em
    width: 100%
    background-position-y: -50px
    display: flex
    justify-content: center
    align-items: center
    padding-bottom: 5%

    .titrePage
        position: relative
        top: 0
        padding-bottom: 2%
        width: 100%
        font-size: 3em
        font-weight: 800
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

/******MEDIA QUERY MOBILE */
@media screen and (max-width: 480px)
    .header
        height: 10em
        .titrePage
            padding-bottom: 12%

/******MEDIA QUERY TABLETTE */
@media screen and (min-width: 481px) and (max-width: 780px)
     .header
         height: 10em

/******MEDIA QUERY EXTRA LARGE */
@media screen and (min-width: 2380px)
    .header
        height: 32em

    .titrePage
        padding-bottom: 0
</style>
