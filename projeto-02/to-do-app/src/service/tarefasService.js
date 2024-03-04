import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useListagemTarefasStore = defineStore('ListagemTarefas', () => {
    const tarefas = ref([])

    function adicionarTarefa(texto) {
        if (texto != '') {
            tarefas.value.push(
                {
                    id: tarefas.value.length + 1,
                    text: texto,
                    completed: false
                }
            );
        }
    }

    function removerTarefa(tarefa) {
        console.log('removerTarefa')
        const indexTarefa = tarefas.value.findIndex((item) => item.id == tarefa.id)
        tarefas.value.splice(indexTarefa, 1)
    }

    const porcentagemTarefasConcluidas = computed(() => {
        let numTarefasConcluidas = tarefas.value.filter((item) => item.completed == true).length
        return tarefas.value.length != 0 ? Math.round((numTarefasConcluidas * 100) / tarefas.value.length) : 0
    })

    return { tarefas, adicionarTarefa, removerTarefa, porcentagemTarefasConcluidas }
})

