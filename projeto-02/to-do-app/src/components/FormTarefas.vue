<template>
    <div class="col-auto">
        <div class="input-group my-3">
            <div class="form-floating flex-grow-1">
                <input type="text" class="form-control" name="tarefa" placeholder="Nova Tarefa" v-model="input"
                    @keyup.enter="adicionarTarefa()">
                <label for="tarefa">Nova Tarefa</label>
            </div>
            <button class="btn btn-primary" @click="adicionarTarefa()"><i class="bi bi-plus-square"></i></button>
        </div>
    </div>
</template>


<script>
import { useListagemTarefasStore } from '@/service/tarefasService.js'
import { ref } from 'vue'

export default {
    setup() {
        const tarefasStore = useListagemTarefasStore()
        const input = ref('')

        function adicionarTarefa() {
            tarefasStore.adicionarTarefa(input.value)
            input.value = ''
        }


        return {
            input,
            adicionarTarefa
        }
    },
}

// export default {
//     name: 'FormTarefas',
//     data(){
//         return{
//             tarefas: useListagemTarefasStore
//         }
//     },
//     methods:{
//         adicionarTarefa(){
//             const input = document.querySelector('input[name="tarefa"]');
//             if(input.value != ''){
//                 this.tarefas.push(input.value);
//                 input.value="";
//                 console.log(this.tarefas);
//             }
//         }
//     }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
i.bi-plus-square {
    font-size: 21px;
}
</style>