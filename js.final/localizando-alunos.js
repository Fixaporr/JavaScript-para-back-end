const alunos =['João','Juliana','Caio','Ana']
const mediasDosAlunos=[10,7,9,6]

let listaDeNotasEAlunos =[alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
if(LinstaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].index0f(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ',sua media é' + listaDeNotasEAlunos[1][indice]

    }else{
        return "Aluno não esta cadastrado"
    }
} 

console.log(exibeNomeNota("Ana"))