new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		classe3: 'quadrado encolher',
		classe4: 'quadrado encolher',
		// estilo: "background-color: green; width:100px; height: 100px;",
		estilo5: {
			width: '100px',
			height: '100px'
		},
		cor5: '',
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor++
				this.width = `${valor}%`;
				if (valor == 100) clearInterval(temporizador)
			}, 100);

		},
		setPerigo(e) {
			console.log('teste')
			if (e.target.value == 'true') {
				this.perigo = true
			} else if (e.target.value == 'false') {
				this.perigo = false
			}
		}
	}
})
