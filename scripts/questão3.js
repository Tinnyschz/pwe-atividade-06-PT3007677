let alunos = [
  ["João da Silva", 7, 8.5],
  ["Kaique Santana", 10, 9.5],
  ["Vitor Rammus", 8, 9.2]
]


for (let i=0; i<alunos.length; i++) {
  let nota1 = alunos[i][1] * 0.6;
  let nota2 = alunos[i][2] * 0.4;
  let notaFinal = nota1 + nota2;

  alert(
    "Nome do aluno: " + alunos[i][0] + "\nNota 1: " + alunos[i][1] + "\nNota2: " + alunos[i][2]
)

  alert(
   "Nome do aluno: " + alunos[i][0] + "\nNota final: " + notaFinal
)
}