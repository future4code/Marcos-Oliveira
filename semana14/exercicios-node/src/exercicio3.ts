import * as fs from 'fs'

const listaTarefas: string = "src/" +  process.argv[2]

const novaTarefa: string = "\n" + process.argv[3]

try {
  fs.appendFileSync(listaTarefas, novaTarefa)
  console.log("Tarefa adicionada com sucesso!")
} catch (error) {
  console.log("Erro ao atualizar lista de tarefas")
}

