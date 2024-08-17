function tabuada() {
    var num = document.getElementById('txtn')
    var tab =document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('please, digite o numero')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //quando gerar a tabuada irá apagar a outra 
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` //mutiplicação de dois numeros
            tab.appendChild(item) //receber a variavel
            c++ //incremento ++
        }
    }

}