

function escolhaJogador (){
    var fase1 = prompt ('Digite o número da opção desejada: \n 1-Tristana \n 2-Heimerding \n 3-Fizz');
    if(fase1 == 1){
        alert("Parabéns, você escolheu a Tristana!");
        location.href= "fase1Tristana.html"
    }else if (fase1 == 2){
        alert("Parabéns, você escolheu o Heimeidinger!");
    }else if (fase1 == 3){
        alert("Parabéns, você escolheu o Fizz!");
    }else{
       alert("OPS!! \n Escolha um número de jogador válido!");
    }
    }