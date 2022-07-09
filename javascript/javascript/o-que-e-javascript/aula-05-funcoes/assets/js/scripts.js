// funções são blocos de comandos e instruções para a execução de determinada tarefa

/* function nomeDaFuncao() {
    $(instrucao);
}
nomeDaFuncao() */

function funcao() {
    console.log("Essa mensagem veio de uma função.")
}
funcao();

// () - indica que é um objeto do tipo function;
// {} - indica que é um bloco de instrução

// FUNÇÕES COM PARÂMETROS

/* As funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

function nomeDaFuncao(parametro) {
    $(instrucao);
}
nomeDaFuncao(valorDoParametro); */

function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);

}
mensagem("Tudo certo", "jovem!")

// TIPOS DE FUNÇÕES

/* Funções declarativas
São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada "function" seguida do nome da função, parênteses "()" e chaves "{}":

function nomeDaFuncao() {
    $(instrucao); 
}
nomeDaFuncao() é obrigatório. 

   Expressões de Funções
São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:

var funcao = function nomeDaFuncao() {
    ${instrucao};
}
ou

var funcao = function(){
    ${instrucao};
};

   Arrow Function
São funções de expressão de sintaxe curta. Arrow funcions sempre serão anônimas, e portanto não podem ser nomeadas. Deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}":

var funcao= () => {
    ${instrucao};
}

   FUNÇÕES ARITMÉTICAS (CRIANDO UMA CALCULADORA)
Para este exercício serão usados alguns métodos nativos do Javascript:
. Number() - para converter valores em números;
. Prompt() - para registrar entradas de usuários;
. Alert() - para mostrar mensagem aos usuários;
. Template Stringas - para usar strings junto com expressões. */