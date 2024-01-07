new Vue({
    el: '#desafio',
    data: {
        valor: ""
    },
    methods: {
        alerta() {
            alert('Alerta')
        },
        alteraValor(e) {
            console.log(e)
            this.valor = e.target.value
        }
    }
})