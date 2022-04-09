/*
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
for(let i=1;i<=10;i++){
    console.log(tabuada(i));
}
//especificar o "let" pra o contador do for para evitar lixo de memoria e travamento. Por padrão o sistema atribui var


//exercicio 9
function converterEmHoras(minutos){
    return minutos/60;
}
console.log(converterEmHoras(150));


const nome = "Délio";
const idade = 27;
const eCasado = true;

const delio {
    nome:"Délio",
    idade : 27,
    eCasado: false
};  


function tabuadaProf(numeral){
    let result = [];
    for(let i = 1; i<=10; i++){
        //result.push(numeral + "x" + i + ":" + numeral*i);
        result.push(`${numeral}x${i}: ${numeral*i}`);
    }   
    return result.join("\n");
}

console.log(tabuadaProf(7));


const podeDigirirProf = (idade, voceBebeu = false)=> {
    const isMaiorIdadeENaoBebeu = () => idade >= 18 && !voceBebeu;
    
    return `Você ${!isMaiorIdadeENaoBebeu() ? "não " : ""}pode dirigir!`;
}

console.log(podeDigirirProf(21, true));

*/
const menu = (option, label) =>{
    let retorno;
    switch (option){
        case 0:
        case 7:
            retorno = "Sair do sistema";
            break;
        case 1:
            return submenu();
        default:
            retorno = "Informe uma opção válida";
    }
    return retorno;
};

const submenu = (label) =>{
    switch(label){
        case "cliente":
            return "Cadastrar cliente";
        default:
            return "Cadastrar professor";
    }
}
console.log(menu(0, cliente));