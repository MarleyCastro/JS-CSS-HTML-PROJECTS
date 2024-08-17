function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    // For testing purposes, set hour to 20
    hora = 2;

    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png';
        document.body.style.background = '#768054'  // Morning image
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'noite.png';
        document.body.style.background = '#d8883e'  // Afternoon image
    } else {
        img.src = 'tarde.png';  // Evening image
        document.body.style.background = '#b58cb1'  // Afternoon image
    }
}
