<template>
    <div class="tarefas">

        <div class="tarefa tarefa-nova position-relative p-3 rounded  bg-gradient text-white border-0 border-start"
            v-for="(tarefa, index) in tarefasStore.tarefas" :key="index"
            :class="tarefa.completed ? 'bg-success tarefa-concluida' : 'bg-danger tarefa-nova'">
            <h5 class="m-0" @click="completarTarefa(tarefa)">{{ tarefa.text }} {{ tarefa.id }}</h5>
            <span class="removerTarefa" title="Remover Tarefa" @click="removerTarefa(tarefa)"><i
                    class="bi bi-x"></i></span>
        </div>

    </div>
</template>


<script>
import { useListagemTarefasStore } from '@/service/tarefasService.js'
// import { ref } from 'vue'

export default {
    setup() {
        const tarefasStore = useListagemTarefasStore()
        console.log(tarefasStore.tarefas)

        function removerTarefa(tarefa) {
            console.log('removerTarefa')
            console.log(tarefa)
            tarefasStore.removerTarefa(tarefa)
        }

        function completarTarefa(tarefa) {
            console.log('completar tarefa')
            tarefa.completed = !tarefa.completed
        }

        return {
            tarefasStore,
            completarTarefa,
            removerTarefa
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.tarefas {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 1fr;
}

.tarefa {
    grid-column: auto / span 1;
    cursor: pointer;
}

.tarefa-nova {
    border-left: 10px solid rgb(181 0 17) !important;
}

.tarefa-concluida {
    border-left: 10px solid rgb(17 109 66) !important;
}

span.removerTarefa {
    font-size: 1.5rem;
    position: absolute;
    right: 5px;
    top: 0px;
    cursor: pointer;
}
</style>