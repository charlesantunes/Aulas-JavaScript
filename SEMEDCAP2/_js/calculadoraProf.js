function enviar(){

}
//------------INÍCIO da função da pagina calcularprova -----------------------
//--função da pagina calcularprova 1º Semestre --
function calcularP(){
   // window.alert('testando a função')
   var nota1 = window.document.getElementById('cpri')
   var nota2 = window.document.getElementById('cseg')
   var resP = window.document.getElementById('resP')
      
   var pn1 = Number(nota1.value)
   var pn2 = Number(nota2.value)
   mediaP = (pn1*2)+(pn2*3)
  
   if (pn1 > 10.0 || pn1 < 0 || pn2 > 10.0 || pn2 < 0) {
        window.alert('[ERRO] Por favor, preencha o campo "Nota" com valor até 10')
    }else if(pn1 >= 5 && pn2 >=5){
        resP.innerHTML = (`<strong>APROVADO NO PRIMEIRO TURNO, PARABÊNS!</strong></br>
        Nota da 1º Avaliação = ${pn1} X 2 = <strong>${pn1*2}</strong></br>
        Nota da 2º Avaliação = ${pn2} X 3 = <strong>${pn2*3}</strong></br>
        TOTAL DAS NOTAS SOMADAS DO 2º SEMESTRE = <strong>${mediaP}</strong></br>
        O aluno <strong>não necessita recuperar nota</strong>`)
    }else if(pn1 < 5 && pn2 >= 5){
        resP.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
        Nota da 1º Avaliação = ${pn1} X 2 = <strong>${pn1*2}</strong></br>
        Nota da 2º Avaliação = ${pn2} X 3 = <strong>${pn2*3}</strong></br>
        TOTAL DAS NOTAS SOMADAS DO 2º SEMESTRE = <strong>${mediaP}</strong></br>
        O aluno necessita <strong>recuperar a nota da 1º Avaliação</strong>`)
    }else if(pn1 >= 5 && pn2 < 5){
        resP.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
        Nota da 1º Avaliação = ${pn1} X 2 = <strong>${pn1*2}</strong></br>
        Nota da 2º Avaliação = ${pn2} X 3 = <strong>${pn2*3}</strong></br>
        TOTAL DAS NOTAS SOMADAS DO 2º SEMESTRE = <strong>${mediaP}</strong></br>
        O aluno Necessita <strong>recuperar a nota da 2º Avaliação</strong>`)
    }
    else if(pn1 < 5 && pn2 < 5){
        resP.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
        Nota da 1º Avaliação = ${pn1} X 2 = <strong>${pn1*2}</strong></br>
        Nota da 2º Avaliação = ${pn2} X 3 = <strong>${pn2*3}</strong></br>
        TOTAL DAS NOTAS SOMADAS DO 2º SEMESTRE = <strong>${mediaP}</strong></br>
        O aluno Necessita <strong>recuperar a nota da 1º Avaliação ou 2º Avaliação</strong>`)
    }
}
//--função da pagina calcularprova 2º Semestre --
function calcularS(){
    // window.alert('testando a função')
    var nota3 = window.document.getElementById('cter')
    var nota4 = window.document.getElementById('cqua')
    var resS = window.document.getElementById('resS')
    
    var sn3 = Number(nota3.value)
    var sn4 = Number(nota4.value)
    mediaS = (sn3*2)+(sn4*3)
   
    if (sn3 > 10.0 || sn3 < 0 || sn4 > 10.0 || sn4 < 0) {
         window.alert('[ERRO] Por favor, preencha o campo "Nota" com valor até 10')
     }else if(sn3 >= 5 && sn4 >=5){
         resS.innerHTML = (`<strong>APROVADO NO SEGUNDO TURNO, PARABÊNS!</strong></br>
         Nota da 3º Avaliação = ${sn3} x 2 = <strong>${sn3*2}</strong></br>
         Nota da 4º Avaliação = ${sn4} x 3 = <strong>${sn4*3}</strong></br>
         TOTAL DAS NOTAS SOMADAS DO 2º SEMESTRE = <strong>${mediaS}</strong></br>
         O aluno <strong>não necessita recuperar nota</strong>`)
     }else if(sn3 < 5 && sn4 >= 5){
         resS.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
         Nota da 3º Avaliação = ${sn3} x 2 = <strong>${sn3*2}</strong></br>
         Nota da 4º Avaliação = ${sn4} x 3 = <strong>${sn4*3}</strong></br>
         TOTAL DAS NOTAS SOMADAS DO 2º SEMESTRE = <strong>${mediaS}</strong></br>
         O aluno necessita <strong>recuperar a nota da 3º Avaliação</strong>`)
     }else if(sn3 >= 5 && sn4 < 5){
         resS.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
         Nota da 3º Avaliação = ${sn3} x 2 = <strong>${sn3*2}</strong></br>
         Nota da 4º Avaliação = ${sn4} x 3 = <strong>${sn4*3}</strong></br>
         TOTAL DAS NOTAS SOMADAS DO 2º SEMESTRE = <strong>${mediaS}</strong></br>
         O aluno necessita <strong>recuperar a nota da 4º Avaliação</strong>`)
     }
     else if(sn3 < 5 && sn4 < 5){
         resS.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
         Nota da 3º Avaliação = ${sn3} x 2 = <strong>${sn3*2}</strong></br>
         Nota da 4º Avaliação = ${sn4} x 3 = <strong>${sn4*3}</strong></br>
         TOTAL DAS NOTAS SOMADAS DO 2º SEMESTRE = <strong>${mediaS}</strong></br>
         O aluno necessita <strong>recuperar a nota da 3º Avaliação ou 4º Avaliação</strong>`)
     }
 }

 //--função da pagina calcularprova 1º e 2º Semestre --
 function calcularT(){
     // window.alert('testando a função')
    var tnota1 = window.document.getElementById('cTpri')
    var tnota2 = window.document.getElementById('cTseg')
    var tnota3 = window.document.getElementById('cTter')
    var tnota4 = window.document.getElementById('cTqua')
    var resT = window.document.getElementById('resT')
    
    var tn1 = Number(tnota1.value)
    var tn2 = Number(tnota2.value)
    var tn3 = Number(tnota3.value)
    var tn4 = Number(tnota4.value)
    

    mediaT = (tn1*2)+(tn2*3)+(tn3*2)+(tn4*3)
   
    if (tn1 > 10.0 || tn1 < 0 || tn2 > 10.0 || tn2 < 0 || tn3 > 10.0 || tn3 < 0 || tn4 > 10.0 || tn4 < 0) {
         window.alert('[ERRO] Por favor, preencha o campo "Nota" com valor até 10')

        }else if(tn1 >= 5 && tn2 >=5 && tn3 >= 5 && tn4 >=5){
            resT.innerHTML = (`<strong>ALUNO APROVADO, PARABÊNS!</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno <strong>não necessita recuperar nota</strong>`)
        }else if(tn1 < 5 && tn2 >= 5 && tn3 >= 5 && tn4 >=5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>recuperar a nota da 1º Avaliação</strong>`)
        }else if(tn1 < 5 && tn2 < 5 && tn3 >= 5 && tn4 >=5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 1º ou 2º Avaliação</strong>`)
        }else if(tn1 < 5 && tn2 < 5 && tn3 >= 5 && tn4 <5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 1º ou 2º Avaliação</strong>`)
        }else if(tn1 < 5 && tn2 < 5 && tn3 < 5 && tn4 >= 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 1º, 2º ou 3º  Avaliação</strong>`)

        }else if(tn1 < 5 && tn2 < 5 && tn3 < 5 && tn4 < 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 1º, 2º, 3º ou 4º Avaliação</strong>`)
        }else if(tn1 < 5 && tn2 >= 5 && tn3 < 5 && tn4 >= 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 1º ou 3º Avaliação</strong>`)
        }else if(tn1 < 5 && tn2 >= 5 && tn3 < 5 && tn4 < 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 1º ou 3º Avaliação</strong>`)        
        }else if(tn1 < 5 && tn2 >=5 && tn3 >= 5 && tn4 < 5){
            resT.innerHTML = (`<strong>APROVADO NO SEGUNDO TURNO, PARABÊNS!</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 1º ou 4º Avaliação</strong>`)
        }else if(tn1 >= 5 && tn2 < 5 && tn3 >= 5 && tn4 >= 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>recuperar a nota da 2º Avaliação</strong>`)
        }else if(tn1 >= 5 && tn2 < 5 && tn3 < 5 && tn4 >= 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 2º ou 3º Avaliação</strong>`)        
        }else if(tn1 >= 5 && tn2 < 5 && tn3 < 5 && tn4 < 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 2º ou 3º Avaliação</strong>`)
        }else if(tn1 >= 5 && tn2 < 5 && tn3 >= 5 && tn4 < 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 2º ou 4º Avaliação</strong>`)
        }else if(tn1 >= 5 && tn2 >= 5 && tn3 < 5 && tn4 >= 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a nota da 3º Avaliação</strong>`)
        }else if(tn1 >= 5 && tn2 >= 5 && tn3 < 5 && tn4 < 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a menor nota entre a 3º ou 4º Avaliação</strong>`)
        }else if(tn1 >= 5 && tn2 >= 5 && tn3 >= 5 && tn4 < 5){
            resT.innerHTML = (`<strong>RECUPERAÇÃO !</strong></br>
            Nota da 1º Avaliação = ${tn1} x 2 = <strong>${tn1*2}</strong></br>
            Nota da 2º Avaliação = ${tn2} x 3 = <strong>${tn2*3}</strong></br>
            Nota da 3º Avaliação = ${tn3} x 2 = <strong>${tn3*2}</strong></br>
            Nota da 4º Avaliação = ${tn4} x 3 = <strong>${tn4*3}</strong></br>
            TOTAL DAS NOTAS SOMADAS = <strong>${mediaT}</strong></br>
            O aluno necessita <strong>escolher recuperar a nota da 4º Avaliação</strong>`)
        }
        
        
        
        else{
            resT.innerHTML = ('-ERRO-preencha todos os campos')
        }
     }
 //------------ FIM da função da pagina calcularprova -----------------------