document.getElementById("solicitarCorrida").addEventListener("click", function() {
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const statusElement = document.getElementById("status");

    if(origem && destino) {
        // Simulação de solicitação de corrida
        statusElement.textContent = `Corrida solicitada de ${origem} para ${destino}. Buscando motorista...`;
        
        // Simula tempo de busca de motorista
        setTimeout(() => {
            statusElement.textContent = "Motorista encontrado! Chegando em 5 minutos.";
        }, 2000);
    } else {
        statusElement.textContent = "Por favor, preencha os campos de origem e destino.";
    }
});
