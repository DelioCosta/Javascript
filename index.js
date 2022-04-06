//exercicio 1
let nomeCompleto = "Délio Cornélio Queiroz da Costa";
console.log(nomeCompleto);

//exercicio 2
let numeroA = 10;
let numeroB = 15;
let resultado = numeroA*numeroB;
console.log(resultado);

//exercicio 3
function saudacao(){
    return "Oi eu sou o Goku";
}
console.log(saudacao());

//exercicio 4
function multiplica(numeroA, numeroB){
    return numeroA*numeroB;
}
console.log(multiplica(3,6));

//exercicio 5
function podeDigirir(idade){
    if(idade>=18){
        return "Você pode dirigir"
    } else{
        return "Você não pode dirigir"
    }
}
console.log(podeDigirir(17));

//exercicio 6
for(i=0;i<=20;i++){
    console.log(i);
}

//exercicio 7
for(i=0;i<=20;i++){
    if(i%2==1){
    console.log(i);
    }
}

//exercicio 8
function tabuada(numero){
    return numero*3;
}
for(i=1;i<=10;i++){
    console.log(tabuada(i));
}


//exercicio 9
function converterEmHoras(minutos){
    return minutos/60;
}
console.log(converterEmHoras(150));
