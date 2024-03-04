<template>
  <div class="card my-3">
    <div class="card-body">

      <ProgressBar></ProgressBar>

      <FormTarefas></FormTarefas>

      <ListagemTarefas></ListagemTarefas>

    </div>
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import FormTarefas from './components/FormTarefas.vue'
import ListagemTarefas from './components/ListagemTarefas.vue'

export default {
  name: 'App',
  components: {
    ProgressBar,
    FormTarefas,
    ListagemTarefas
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card{
  max-width: 900px;
  margin: auto;
}
</style>
