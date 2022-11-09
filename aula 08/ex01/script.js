// foi adicionada a função, e essa frase vai aparecer no console, informando quantos anos a
// pessoa terá quando se passarem x anos.

function calculadoraIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

//definiu a constante em forma de objeto com o nome e a idade que a pessoa tem
const pessoa1 = {
    nome: 'Amelia',
    idade: 23,
};

//definiu a constante  em forma de objeto  com o nome e a idade que a pessoa tem
const pessoa2 = {
    nome: 'Márcia',
    idade: 20,
};

//definiu a constante  em forma de objeto  com o nome e a idade que a pessoa tem
const pessoa3 = {
    nome: 'Jonas',
    idade: 13,
};

//chamou a função, determinando os parametros, que é a pessoa que vai aparecer,
// e a quantidade de anos que será somado a sua idade
console.log(calculadoraIdade.call(pessoa3, 40));
console.log(calculadoraIdade.apply(pessoa2, [24]));
alert(calculadoraIdade.call(pessoa3, 40));
alert(calculadoraIdade.apply(pessoa2, [24]));