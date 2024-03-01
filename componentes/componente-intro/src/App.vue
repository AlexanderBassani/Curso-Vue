<template>
  <div id="app">
    <!-- <h1>Contadores</h1> -->
    <!-- <Contador></Contador> -->
    <app-contadores></app-contadores>
    <button>?</button>
    <ConsoleLog></ConsoleLog>
  </div>
</template>


<script>
// import Contador from './MyContador.vue'

export default{
    data(){
      return {
        contador: 0
      }
    },
  // components: {
  //   Contador
  // }
}
</script>

<style>

</style>