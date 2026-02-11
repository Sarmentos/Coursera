function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave
        value: estoque, // valor
        writable: true, // pode alterar o valor 
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor 
            writable: true, // pode alterar o valor 
            configurable: true // congigurável
        },
        preco:{
            enumerable: true, // mostra a chave
            value: preco, // valor 
            writable: true, // pode alterar o valor 
            configurable: true // congigurável
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 500;
// delete p1.estoque;
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}


const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Sarmento',
    idade: 20,
    cidade: {
        nome: 'Cariacica',
        estado: 'ES',
        rua: 'Rua 1',
        numero: 123,
    },
}

console.log(pessoa['cidade']);
console.log(pessoa.cidade.nome);


function criaPessoa(id, nome, sobrenome, idade){
    return{
        id,
        nome,
        sobrenome,
        idade,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p2 = criaPessoa(1, 'Lucas', 'Sarmento', 22);
console.log(p2);
console.log(p2.nomeCompleto());
console.log(Object.keys(p2));

function Cidade(nomeEstado, rua, municipio, numero){
    this.nomeEstado = nomeEstado;
    this.rua = rua;
    this.municipio = municipio;
    this.numero = numero;
    
    Object.defineProperty(this, 'municipio', {
        enumerable: true, // mostrar a chave
        value: municipio, // valor
        writable: true, // pode alterar o valor 
        configurable: false // configurável
    });
}

const c1 = new Cidade('ES', 'Rua 1', 'Cariaciaca', 123);
console.log(c1);
delete c1.municipio;
console.log(c1);