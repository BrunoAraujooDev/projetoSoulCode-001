class Carrossel {
    constructor(anterior, proximo, lista, navegacao) {
        this.anterior = document.querySelector(anterior)
        this.proximo = document.querySelector(proximo)
        this.lista = document.querySelector(lista)
        this.navegacao = document.querySelector(navegacao)

        this.slides = this.getListaSlides()
        this.indicadores = this.getListaIndicadores()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.IndiceDoSlideAtual = 0

        this.proximo.addEventListener('click', this.proximoSlide.bind(this))
        this.anterior.addEventListener('click', this.voltaSlide.bind(this))
        this.navegacao.addEventListener('click', this.pularParaSlide.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.lista.children)
    }

    getListaIndicadores() {
        return Array.from(this.navegacao.children)
    }

    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width
    }

    getSlideAtual() {
        return this.slides[this.IndiceDoSlideAtual]
    }

    getIndiceAtual() {
        return this.indicadores[this.IndiceDoSlideAtual]
    }

    proximoSlide() {
        let proximaPosicao = this.IndiceDoSlideAtual + 1
        if(proximaPosicao > this.slides.length - 1) {proximaPosicao = 0}
        this.direcaoSlide(proximaPosicao)
    }

    voltaSlide() {
        let voltaPosicao = this.IndiceDoSlideAtual - 1
        if(voltaPosicao < 0) {voltaPosicao = this.slides.length - 1}
        this.direcaoSlide(voltaPosicao)
    }

    direcaoSlide(posicao) {
        const indicadorAtual = this.getIndiceAtual()
        this.IndiceDoSlideAtual = posicao
        const indicadorSelecionado = this.getIndiceAtual()
        this.scrollSlide(this.getSlideAtual())
        this.atualizaIndicadores(indicadorAtual, indicadorSelecionado)
    }

    scrollSlide(slideSelecionado) {
        this.lista.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'
    }

    atualizaIndicadores(indicadorAtual, indicadorSelecionado) {
        indicadorAtual.classList.remove('carousel__indicador--ativo')
        indicadorSelecionado.classList.add('carousel__indicador--ativo')
    }

    pularParaSlide(evento) {
        if(evento.target === evento.currentTarget) {return}
        const indicadorSelecionado = evento.target.getAttribute('data-indicador')
        this.direcaoSlide(parseInt(indicadorSelecionado))
    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }

}

const anterior = '[data-anterior]'
const proximo = '[data-proximo]'
const lista = '[data-lista]'
const navegacao = '[data-navegacao]'

new Carrossel(anterior, proximo, lista, navegacao)