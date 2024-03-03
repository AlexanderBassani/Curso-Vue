<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome Usuário: <strong>{{ nomeAlternativo }}</strong></p>
        <p>Nome Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Nome Usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reinicarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
export default {
    // props:['nome'],
    props:{
        // nome: String,
        // nome: [String, Array],
        nome: {
            type: String,
            default: 'Anônimo',
            // default: function() {
            //     return Array(10).fill(0).join('')
            // },
            // required: true
        },
        reiniciarFn: Function,
        idade: Number
    },
    data() {
        return {
            nomeAlternativo: this.nome
        }
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reinicarNome(){
            // this.nome = 'Pedro'
            // this.$emit('eventoMudou', this.nome)

            // const antigo = this.nome
            const novo = "Pedro"
            this.$emit('eventoMudou', novo)
            // this.$emit('eventoMudou', {
            //     novo: this.nome, || novo
            //     antigo
            // })
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
