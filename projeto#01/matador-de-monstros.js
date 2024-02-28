new Vue({
    el: '#app',
    data: {
        jogando: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        acoes: [],
        vencedor: ''
    },
    computed: {
        temResultado() {
            resultado = this.vidaJogador == 0 || this.vidaMonstro == 0
            if (resultado) this.vidaJogador == 0 ? this.vencedor = 'monstro' : this.vencedor = 'jogador'
            return resultado
        }
    },
    methods: {
        ataque(especial) {
            if (especial) {
                ataqueJogador = Math.round(Math.random() * 10) + 10
                ataqueMonstro = Math.round(Math.random() * 10) + 5
            } else {
                ataqueJogador = Math.round(Math.random() * 10) + 2
                ataqueMonstro = Math.round(Math.random() * 10) + 5
            }
            this.battleLog(true, 'Jogador Atingiu o Monstro com', ataqueJogador)
            this.battleLog(false, 'Monstro Atingiu o Jogador com', ataqueMonstro)
            this.vidaJogador > ataqueMonstro ? this.vidaJogador -= ataqueMonstro : this.vidaJogador = 0
            this.vidaMonstro > ataqueJogador ? this.vidaMonstro -= ataqueJogador : this.vidaMonstro = 0
        },
        curar() {
            curaJogador = Math.round(Math.random() * 10) + 5
            ataqueMonstro = Math.round(Math.random() * 10) + 5
            this.battleLog(true, 'Jogador curou-se em', curaJogador)
            this.battleLog(false, 'Monstro Atingiu o Jogador com', ataqueMonstro)
            this.vidaJogador > (ataqueMonstro + curaJogador) ? this.vidaJogador -= (ataqueMonstro - curaJogador) : this.vidaJogador = 0
        },
        fimJogo(reiniciar) {
            reiniciar ? this.jogando = true : this.jogando = false
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.acoes = []
        },
        battleLog(player, mensagem, valor) {
            this.acoes.unshift({
                player: player,
                texto: mensagem,
                num: valor
            })
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.jogando = false
        }
    }
})