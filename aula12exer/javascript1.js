function verificar(){
    // window.alert('testando a função verificar()')  //linha criada apenas p/ teste
    var data = new Date()
    var ano = data.getFullYear()

    var fano = window.document.getElementById('cnasc')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) >= ano){  //value = valor recebido, length = digitado, Number é opicional
        window.alert('ERRO, verifique os dados e tente novamente')      
    }else{
       // window.alert('testando a condição')      //linha criada apenas p/ teste
        var fsex = window.document.getElementsByName('tsexo') // são dois campos tsexo, logo, temos [0] e [1]
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`     //linha criada apenas p/ teste
        var genero = ''
        var img = document.createElement('img') //tag que pode ser criado no html, é o mesmo que = <img>
        img.setAttribute('id','foto')           //adicionando valores na tag, pode ser feito no html = <img id='foto'>
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src','_imagem/monstro_pequeno.png')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','_imagem/monstro_pequeno.png')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','_imagem/monstro_pequeno.png')
            }else{
                //Idoso
                img.setAttribute('src','_imagem/monstro_pequeno.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src','_imagem/monstro_pequeno.png')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','_imagem/monstro_pequeno.png')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','_imagem/monstro_pequeno.png')
            }else{
                //Idoso
                img.setAttribute('src','_imagem/monstro_pequeno.png')
            }
        }
        res.style.textAlign = 'center'      //centralizar texto, pode ser feito no css
        res.innerHTML = `Detectado sexo ${genero} com ${idade} anos`
        res.appendChild(img)    // appendChild = adicionar a pagina um elemento img, ou seja, aparecer a imagem

    }
        
}