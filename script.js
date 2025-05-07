const botao = document.querySelector('#botao')
botao.addEventListener('click',preco)



function preco(){
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl',{mode: 'cors'})
    .then((resposta) => resposta.json())
    .then((data) => {
        console.log(data)
        const btc = data.bitcoin.brl
        document.querySelector('#valor').innerText = `Preço atual: R$ ${btc}`
        valor.style.display ='block'
    })
}