var jogador1 = 0;
var jogador2 = 0;
var placar;

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Jogadores inválidos");

// usando if
if (jogador1 > 0) {
    console.log("Jogador 1 marcou ponto");
    placar = jogador1 > jogador2;

// usando else if
} else if (jogador2 > 0) {
    console.log("Jogador 2 marcou ponto");
    placar = jogador2 > jogador1;

// usando else
} else {
    console.log("Ninguém marcou ponto");
}

// usando switch case

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou");
        break;
    case placar = jogador2 > jogador1:
    console.log("Jogador 2 ganhou");
    break;
    default:
        console.log("Ninguém ganhou")
}

// ESTRUTURAS DE REPETIÇÃO

// for: funciona como uma repetição de uma instruição até que a condição seja falsa.
// for ([expressaoInicial]; [condicao]; [incremento]) { declaracao }

// for/in: funciona como uma repetição a partir de uma propriedade.
// for ([indice] in [objeto ou array]) { declaracao }

// for/of: funciona como uma repetição a partir de um valor.
// for ([indice] of [array]) { declaracao }

// while: executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução.
/* var a = 0
   while (a < 10) {
    a++;
    console.log(a); 
   } */
// do/while: executa uma instrução "até que" determinada condição seja falsa, a verificação é feita depois da execução.
/* var b = 0
   do {
    b++;
    console.log(b);
   } while (b < 10) */

// usando for
let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
let object = { propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3", }

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

// usando for/in
for (let i in array) {
    console.log(i);
}

// for/in com objeto
for (i in object) {
    console.log(i);
}

// usando for/of
for (i of array) {
    console.log(i);
}

// for/of com objeto
for (i of object.propriedade1) {
    console.log(i);
}

// usando while
var a = 0
while (a < 10) {
    a++;
    console.log(a);
}

// usando do/while
var b = 0;
do {
    b++;
    console.log(b);
} while (b < 10)