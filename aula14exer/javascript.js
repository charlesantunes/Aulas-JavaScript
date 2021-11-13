function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('cimg')

    var data = new Date()
    var hora = 23  

    msg.innerHTML = (`Agora são ${hora} horas`)
    if(hora>1 && hora<=12){
        //Bom dia
        img.src = '_imagem/manhã_pequena.png'
        document.body.style.background = 'rgb(75, 249, 255)'
    }else if (hora>12 && hora<=18){
        //Boa tarde
        img.src = '_imagem/tarde_pequena.png'
        document.body.style.background = 'rgb(255, 189, 45)'
    }else if(hora>18  && hora <= 24){
        //Boa noite
        img.src = "_imagem/noite_pequena.png"
        document.body.style.background = 'rgb(94, 94, 94)'
    }else{
        msg.innerHTML = ('Hora inválida, escolha uma hora entre 1 à 24')
    }

}