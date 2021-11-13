function enviar(){
    var ano = window.document.getElementById('cnasc')
    var sm = window.document.getElementById('cmasc')
    var sf = window.document.getElementById('cfem')
    var res = window.document.getElementById('img')
     var nasc = Number(ano.value)
     idade = (2021-nasc)

     res.innerHTML = (`<p>Você é masculino ou Feminuno </p>`)
     if(idade>=18 && idade<60){
         res.innerHTML += (`Detectamos Homem com ${idade} anos`)
         img.src = ('_imagem/manhã_pequena.png')
     }else if(idade>=60){
        // res.innerHTML += (`Detectamos Sênior com ${idade} anos`)
         img.src = '_imagem/tarde_pequena.png'
     }else if(idade>=14 && idade<18)
     {
        // res.innerHTML += (`Detectamos Adolescente com ${idade} anos`)
         img.src = '_imagem/monstro_pequeno.png'        
     }
 }