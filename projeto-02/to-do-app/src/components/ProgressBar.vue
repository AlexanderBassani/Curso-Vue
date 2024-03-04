<template>
    <div>
        <h1 class="">Tarefas</h1>
        <div class="progress" role="progressbar" aria-label="Success example"
            :aria-valuenow="tarefasStore.porcentagemTarefasConcluidas" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                :style="'width:' + tarefasStore.porcentagemTarefasConcluidas + '%'">
                <strong>{{ tarefasStore.porcentagemTarefasConcluidas }}%</strong>
            </div>
        </div>
    </div>
</template>


<script>
import { useListagemTarefasStore } from '@/service/tarefasService.js'
// import { ref } from 'vue'

export default {
    setup() {
        const tarefasStore = useListagemTarefasStore()
        return {
            tarefasStore
        }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>