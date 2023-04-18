<template>
  <main id="app">
    <header>
      <h1>Cours Vue js</h1>
    </header>
  <p>
   Vue.js, est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages. Vue a été créé par Evan You et est maintenu par lui et le reste des membres actifs de l'équipe principale 
   travaillant sur le projet et son écosystème.<br>
   <a href="https://fr.wikipedia.org/wiki/Vue.js" class="button" target="blank">Wikipédia</a>
  </p>
    <img alt="Vue logo" src="./assets/ny_edited.jpg">
    <HelloWorld msg="Bienvenue sur Vue.js App"/>
    <footer>
      <p>&copy; - Vue - 2021</p>
    </footer>
    
  </main>
 
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
</script>



<style src="./css/style.css"></style>
