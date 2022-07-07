
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');


let totaldoSAldo = 0;
limparSaldo()
function somarAoSaldo(soma: number ){
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    totaldoSAldo = 0;
    campoSaldo.innerHTML = totaldoSAldo.toString()
}
if(botaoAtualizar){
botaoAtualizar.addEventListener('click',  () =>{
    somarAoSaldo(Number(soma));
});
}

botaoLimpar.addEventListener('click',()=>  {
    limparSaldo();
});