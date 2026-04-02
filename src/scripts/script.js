const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#mensagem-topo')

saudacao.textContent = hora < 12 ? "Bom dia, Mestre Jedi!" : "Boa tarde, Mestre Jedi!" 

const card = document.querySelector('#banner-promo')
card.addEventListener('mouseover', () =>{
card.classList.add('destaque-dark')
});

card.addEventListener('mouseout', () =>{
card.classList.remove('destaque-dark')
})

const InputQtd = document.querySelector('#qtd-item')
const resultadoTxt = document.querySelector('#resultado-preco')

if (InputQtd && resultadoTxt){
    InputQtd.addEventListener('input', () =>{
        const resultadoPreco = 85.0
        const total = Number(InputQtd.value) * resultadoPreco
        resultadoTxt.textContent = `R$ ${total.toFixed(2)}`

        if(total < 250){
            resultadoTxt.style.color = "#00b894"
        }

        if(total > 255) {
            resultadoTxt.style.color = "#d17373"
        }

        if(total > 510){
            resultadoTxt.style.color = "#ff0303 "
        }
    })
}


const btnAdicionar = document.querySelector('#btn-adicionar')
const nomeProduto = document.querySelector('#nome-produto')
const listaCarrinho = document.querySelector('#lista-carrinho')

btnAdicionar.addEventListener('input', () =>{
    
})


const btnReset = document.querySelector('#btn-limpar')

btnReset.addEventListener('click', () =>{
    listaCarrinho.value = ''
})

