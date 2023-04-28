/* 
    1- selecionar o elemento que irá receber o evento
    2- adicionar um EventListener no elemento
    3- buscar o conselho com fetch
    4- 
    
*/
const titulo = document.getElementById('advice-title')
const textoConselho = document.getElementById('text-advice') 

async function tirarUmaDica(){
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    const json = await resposta.json()
    let conselho = await json.slip.advice
    let idAdvice = await json.slip.id
    
    titulo.innerHTML=`<h3>ADVICE #${idAdvice} </h3>`
    textoConselho.innerHTML = `<p> ${conselho} </p>` 
}

document.getElementById('botao-dado').addEventListener('click', tirarUmaDica)

tirarUmaDica()
