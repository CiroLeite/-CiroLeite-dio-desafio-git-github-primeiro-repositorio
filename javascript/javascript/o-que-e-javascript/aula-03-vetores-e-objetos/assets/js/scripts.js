// o que são vetores ou arrays

// como declarar um array

// let array = ["string", 1, true];
// console.log(array);

// pode guardar vários tipos de dados

let array = ["string", 1, true, ["array1"], ["array2"], ["array3"],[ "array4"]];
console.log(array);

// MANIPULANDO ARRAYS

// forEach() - itera um array;
// push() - adiciona item no final do array;
// pop() - remove item no final do array;
// shift() - remove item no inicio do array;
// unshift() - add item no inicio do array;
// indexOf() - retorna o índice de um valor;
// splice() - remove ou substitui um item pelo índice;
// slice() - retorna uma parte de um array existente.

// forEach()

array.forEach(function(item, index) {console.log(item, index)});

// push() 

array.push("novo item");
console.log(array);

// pop() 

array.pop();
console.log(array);

// unshift() 

array.shift();
console.log(array);

// unshift()

array.unshift("novo item");
console.log(array);

// indexOf() 

console.log(array.indexOf(true));

// splice()

array.splice(0, 3);
console.log(array);

// slice()

let novoArray = array.slice(0, 3);
console.log(array);


// OBJETOS devem ser declarados entre chaves "{}"
// MANIPULANDO OBJETOS

// var xicara = {cor: "azul", tamanho: "p", funcao: tomarCafe()};
// var cor = xicara.cor;
// var tamanho = xicara.tamanho;
// var funcao = tomarCafe();

var object = {string: "string", number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: "objeto interno"}};

console.log(object);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);