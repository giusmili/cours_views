<template>
  <section class="hello">
    <h1>&#128540;{{ componentTitle }}</h1>
     <button v-on:click="counter += 1"  class="button button-outline">Click here</button>
     <p>Le bouton ci-dessus a été cliqué {{ counter }} fois.</p>
    <p>{{ conponenentContent }}</p>
   
   
  </section>

</template>
<script>
export default {
  name: 'HelloWorld',
  //function data for component value
  data: function(){
    return{
      componentTitle: `Hello Vue.js`,
      conponenentContent: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat praesentium recusandae accusantium?`,
      display: false,
      counter: 0,
     

    }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
h3 {
  margin: 4.0rem 0 0;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 1.0rem;
}
a {
  color: #42b983;
  text-decoration: none;
}

</style>
