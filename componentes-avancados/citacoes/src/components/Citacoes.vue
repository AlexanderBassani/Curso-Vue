<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <Citacao>
            <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
            <p>{{ citacoes[indice].texto }}</p>
            <div class="autor">
                <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
            </div>
        </Citacao>
    </div>
</template>

<script>
import Citacao from './Citacao.vue'
export default {
    components: { Citacao },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    created(){
        console.log('created')
    },
    destroyed(){
        console.log('destroyed')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },
}
</script>

<style scoped>
    .autor{
        text-align: end;
    }
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
