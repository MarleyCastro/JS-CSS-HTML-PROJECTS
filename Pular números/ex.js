function contar() {
    let ini = Number(document.getElementById('txti').value);
    let fim = Number(document.getElementById('txtf').value);
    let passo = Number(document.getElementById('txtp').value);
    let res = document.getElementById('res');

    if (!ini || !fim || !passo) {
        window.alert('ERRO: Espaços vazios ou valores inválidos!');
    } else {
        res.innerHTML = 'Contando: ';
        if (passo <= 0) passo = 1;

        for (let c = ini; ini < fim ? c <= fim : c >= fim; c += ini < fim ? passo : -passo) {
            res.innerHTML += `${c} \u{1F449} `;
        }
    }
}
