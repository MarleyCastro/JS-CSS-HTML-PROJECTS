let num = document.querySelector('input#fnum') /* id do html*/
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inlista(n, l) { /*numero, lista*/
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}
function adcionar() {
    if(isnumero(num.value)&& !inlista(num.value, valores)){
        valores.push(Number(num.value))/*indice, adcionar elemento no vetor*/
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus() /*apagar a seleção automaticamente*/

}

function finalizar() {
        if (valores.length == 0) {
            window.alert('Adcione valores antes de finalizar')
        }else{
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior) {
                    maior = valores[pos]
                    if(valores[pos] < menor)
                        menor = valores[pos]
                }
            }
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores, temso ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores informado é: ${media}.</p>`
        }
}