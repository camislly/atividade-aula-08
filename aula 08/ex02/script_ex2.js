//determinando uma array(lista), com 3 objetos informando as propriedades e os sers valores: nomes, 
//notas e turma dos alunos

const alunos = [
    {nome:'João',
    nota: 5,
    turma:'1B',},
    {nome:'Sofia',
    nota: 9,
    turma:'1B',},
    {nome:'Paulo',
    nota: 6,
    turma:'2C',}
];

//criando uma função que determina quais alunos estão aprovados, com base em sua média 
function alunosAprovados(alunos, media) {
    let aprovados = [];

    //aqui o método length verifica o tamanho do conteúdo, e imprime, então a cada aluno adicionado,
    // o número aumenta.
    for (let i = 0; i < alunos.length; i++) {
        let {nota, nome} = alunos[i];
    //aqui determina os alunos que irão aparecer no console, no caso, somente os aprovados. 
        if (nota>= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
//aqui é determinado que os alunos aprovados(que irão aparecer no console) serão aqueles com a nota maior
// ou igual a 5.
console.log(alunosAprovados(alunos, 5));
alert(alunosAprovados(alunos, 5));