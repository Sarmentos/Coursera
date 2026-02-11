function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    Object.freeze(this);
}

const p1 = new Pessoa('Lucas', 'Silva');
console.log(p1);


// function criaPessoa(nome, sobrenome){
//     return{
//         nome,
//         sobrenome,
//         nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Lucas', 'Silva');
// console.log(p1.nomeCompleto());

// contrutor de objetos
// const pessea1 = new Object();
// pessea1.nome = 'Lucas';
// pessea1.sobrenome = 'Silva';
// pessea1.idade = 30;
// pessea1.falarNome = function(){
//     return (`${this.nome} está falando seu nome.`);
// };
// pessea1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for(let chave in pessea1){
//     console.log(pessea1[chave]);
// }

// console.log(pessea1.falarNome());
// console.log(pessea1.getDataNascimento());

// delete pessea1.nome;
// console.log(pessea1);
// console.log(pessea1.sobrenome);


// literal
// const pessao = {
//     nome: 'Lucas',
//     sobrenome: 'Silva'    
// };
 

// //anotação de colchetes
// const chave = 'nome';
// console.log(pessao[chave]);
// console.log(pessao['nome']);
// console.log(pessao['sobrenome']);
// // anotação de ponto
// console.log(pessao.nome);
// console.log(pessao.sobrenome);