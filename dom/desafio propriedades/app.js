new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor != 37 ? 'Valor diferente de 37' : 'Valor igual a 37'
        }
    },
    watch: {
        valor(novo, antigo) {
            console.log(novo, antigo)
            setTimeout(() => {
                this.valor = 0
            }, 5000);
        }
    },
});