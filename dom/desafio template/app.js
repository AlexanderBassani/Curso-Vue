new Vue({
    el: '#desafio',
    data: {
        nome: "Alexander Basssani Amaral",
        idade: "29",
        imsSrc: "https://picsum.photos/400/400"
    },
    methods: {
        randomNumber: function () {
            return Math.random()
        },
        multiplyAge: function (vezes) {
            return this.idade * vezes
        }
    }
}) 