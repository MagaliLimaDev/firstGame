function escolhaJogador (){
    var fase1 = prompt ('Digite o número da opção desejada: \n 1-Tristana \n 2-Heimerding \n 3-Fizz');
    if(fase1 == 1){
        alert("Parabéns, você escolheu a Tristana!");
        location.href= "/html/tristana/fase1Tristana.html"
    }else if (fase1 == 2){
        alert("Parabéns, você escolheu o Heimeidinger!");
    }else if (fase1 == 3){
        alert("Parabéns, você escolheu o Fizz!");
    }else{
       alert("OPS!! \n Escolha um número de jogador válido!");
    }
}

function responderFase1Tristana(){
    var erro = 3;

    while(erro > 0){
        var resposta = prompt('Qual alternativa correta? \nDigite apenas a Letra correspondente. \n A \n B \n C \n D');
        if(resposta == 'd' || resposta == 'D'){
            alert("Parabéns, você passou para a próxima fase!");
            window.location.href='/html/tristana/fase2Tristana.html';
            break;
        }else{
            erro = (erro - 1);
            if(erro == 0){
                alert("Você acabou com suas chances");
                window.location.href='gameover.html';
            }else{
                alert("Você tem mais " + erro + " tentativas");  
            }
        }
    }
    
}
function responderFase2Tristana(){
    var erro = 3;

    while(erro > 0){
        var resposta = prompt('Qual é a alternativa correta? \nDigite apenas a Letra correspondente. \n A \n B \n C \n D');
        if(resposta == 'c' || resposta == 'C'){
            alert("Parabéns, você passou para a ultima fase!");
            
            break;
        }else{
            erro = (erro - 1);
            if(erro == 0){
                alert("Você acabou com suas chances");
                window.location.href='gameover.html';
            }else{
                alert("Você tem mais " + erro + " tentativas");  
            }
        }
    }
    
}
