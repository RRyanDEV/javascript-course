let Nome = "Roger"
console.log(nome)
console.log(`Meu nome é ${nome}`)

let maca = 2;
console.log(maca * maca);

nome = "Ruan";
console.log(nome);

maca = "dinheiro"
console.log(`Estou sem ${maca}`); 

// Nem todas as linguagens permite a troca do tipo de Variavel.

let um = 1, dois = 2, tres = 3;
console.log(um * dois + tres);

// Variaveis - CONST & VAR ---------------------------------------------------------------

var nome = "Ryan"

const ip = "192.168.0.1" //O valor de const nunca pode ser ALTERADO durante o código, apenas na declaração.

console.log(nome)
console.log(ip);

// Não pode começar com números   (let 2nome)
// Mas, pode terminar com números (let nome2)
// Pode ter $ ou _, mas não outros caracteres especiais (let $nome, _nome)
console.log("Convenção de Nomes das Variaveis")
// Mas não pode ter pontuação ou outros especiais (let @nome, .nome)
// Pode ser iniciado com maiúscula (let Nome)
// Ou conter CamelCase (let meuPrimeiroNome)