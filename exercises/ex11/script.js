function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var body = document.body;
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'fotomanha.png';
        body.id = 'manha';
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'fototarde.png';
        body.id = 'tarde';
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png';
        body.id = 'noite';
    }
}
