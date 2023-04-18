<template>

  <section class="hello">
  
    <h2>
      <span aria-hidden="true">
        &#128540;
      </span> 
        {{ componentTitle }}
      </h2>
     <button v-on:click="counter += 1"  class="button" aria-label="button like">Click here</button>
     <p>
       <span 
          class="material-icons" 
          aria-hidden="true">
          thumb_up
        </span>{{ counter }}
    </p>
    <p>{{ conponenentContent }}</p>
   <p>{{msg}}</p>
    <!-- list -->
   
  </section>
</template>


<script>
export default {
  name: 'HelloWorld',
  //function data for component value
  data:()=>{
    return{
      componentTitle: `Hello Vue.js`,
      conponenentContent: `Approachable. Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation. Performant. Truly reactive, compiler- ...`,
      display: false,
      counter: 0,
      msg: `Personal Home Page by Giusmili`
     

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
p .material-icons{
  vertical-align:  -.3rem;
  margin-right: .3rem;
}

</style>
