<template>
  <div class="menu-barre">
    <div class="logo">
      <router-link to="/">
        <img
          class="logoImg"
          src="~/assets/img/petits-logo.png"
          alt="logo"
          srcset
        />
      </router-link>
    </div>
    <div v-on:click="ouvrirMenu()" class="menu-bouton">
      <font-awesome-icon v-if="!active" :icon="['fas', 'bars']" />
      <font-awesome-icon v-if="active" :icon="window - close" />
    </div>
    <transition name="ouvrir">
      <div v-if="active" class="navigation">
        <ul v-on:click="ouvrirMenu()" class="menu-navigation">
          <router-link to="/">Accueil</router-link>
          <router-link to="/Services">Nos services</router-link>
          <router-link to="/Medias">Médias</router-link>
          <router-link to="/Contact">Contact</router-link>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      // pour gérer l'état du menu s'Il est actif ou pas
      active: false
    }
  },
  methods: {
    ouvrirMenu() {
      // activer et desactiver le menu
      this.active = !this.active

      // ajouter un écouteur d'événements sur la page pour fermer le menu si on clique ailleurs sur la page
      function deMenu() {
        this.active = false
        document.querySelector('#page').removeEventListener('click', deMenu)
        document.querySelector('.header').removeEventListener('click', deMenu)
      }
      document
        .querySelector('#page')
        .addEventListener('click', deMenu.bind(this))
      document
        .querySelector('.header')
        .addEventListener('click', deMenu.bind(this))
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  z-index: 1000;
}

.menu-barre {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 15px -2px rgba(0, 0, 0, 0.64);
}
.logo {
  align-self: center;

  .logoImg {
    width: 135px;
    padding: 3%;
    filter: drop-shadow(0 0 0.75rem #d57584);
    transition: 0.5s all;
    &:hover {
      transform: translateX(10%) scale(1.2);
    }
  }
}

.menu-bouton {
  align-self: center;
  font-size: 2em;
  margin-right: 2%;
  z-index: 4;
  color: black;
  transition: all 0.3s;
}
.menu-bouton:hover {
  transform: scale(1.2);
}
.menu-bouton:active {
  transform: scale(1.2) rotateZ(360deg);
}

.navigation {
  z-index: 3;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-content: flex-end;
  right: -6%;
  top: -100%;
  width: 400px;
  height: 400px;
  background-position: -50% -50%;
  background-repeat: no-repeat;
  background-color: pink;
  background-size: contain;
  border-radius: 50%;
  background: linear-gradient(
    173deg,
    rgba(206, 213, 80, 1) 0%,
    rgba(212, 106, 137, 1) 100%
  );

  box-shadow: 0px 4px 4px rgba(227, 27, 171, 0.25),
    -4px 4px 4px rgba(227, 27, 171, 0.25);

  .menu-navigation {
    font-style: normal;
    font-weight: 800;
    color: white;

    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 0;
    margin-left: 10%;
    margin-top: 15%;
    font-size: 2em;
    line-height: 1.5em;
    .router-link-exact-active {
      &::before {
        content: '\261E ';
        color: white;
      }
    }
    a {
      text-decoration: none;
      color: white;
      text-shadow: 0px 4px 4px #db1a1a;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

/******* TRANSITIONS VUEJS POUR L'ANIMATION DU MENU */
.ouvrir-enter-active,
.ouvrir-leave-active {
  transition: all 0.4s cubic-bezier(0.54, 0.98, 0.73, 1.21);
  top: -1000%;
  right: -40%;
  transform: scale(0);
}

.ouvrir-enter-to {
  top: -100%;
  right: -5%;
  transform: scale(1);
}

/*******MEDIA QUERY MOBILE */
@media screen and (max-width: 380px) {
  .logo {
    .logoImg {
      width: 128px;
    }
  }

  .navigation {
    right: -43%;

    .menu-navigation {
      margin-left: 7%;
      font-size: 1.7em;
    }
  }

  .menu-bouton {
    margin-right: 5%;
  }
}

@media screen and (min-width: 381px) and (max-width: 480px) {
  .logo {
    .logoImg {
      width: 128px;
    }
  }

  .navigation {
    right: -33%;

    .menu-navigation {
      margin-left: 8%;
      font-size: 1.7em;
    }
  }

  .menu-bouton {
    margin-right: 5%;
  }
}

@media screen and (min-width: 481px) and (max-width: 580px) {
  .logo {
    .logoImg {
      width: 135px;
    }
  }

  .navigation {
    right: -20%;

    .menu-navigation {
      margin-left: 15.5%;
      font-size: 1.8em;
    }
  }

  .menu-bouton {
    margin-right: 5%;
  }
}

/**** MEDIA QUERY TABLETTE */
@media screen and (min-width: 581px) and (max-width: 780px) {
  .logo {
    .logoImg {
      width: 135px;
    }
  }

  .navigation {
    right: -20%;

    .menu-navigation {
      margin-left: 6.5%;
      font-size: 1.8em;
    }
  }

  .menu-bouton {
    margin-right: 5%;
  }
}

/****MEDIA QUERY 4K */
@media screen and (min-width: 2880px) {
  .navigation {
    right: -3%;

    .menu-navigation {
      margin-left: 6.5%;
      font-size: 1.8em;
    }
  }
}
</style>
