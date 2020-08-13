### Exercício 1
a) O método raw além de trazer o resultado da `query`, ele também traz informações a respeito da `query` que foi feita.

b) const searchActor = async (name: string): Promise<void> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor 
      WHERE name = "${name}"
    `)
    console.log(result[0]) 
  } catch (error) {
    console.log(error)
  }
}

c) const countActors = async (gender: string): Promise<void> => {
  try {
    const result = await connection.raw(`
      SELECT COUNT(*) as count 
      FROM Actor 
      WHERE gender = "${gender}"
    `)
    console.log(result[0])
  } catch (error) {
    console.log(error)  
  }
} 


### Exercício 2

a) const updateActor = async (id: string, salary: number): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        salary
    })
      .where("id", id)
    console.log("Sucesso!")    
  } catch (error) {
    console.log(error)
  }
}

b) const deleteActor = async (id: string): Promise<void> => {
  try {
    await connection("Actor")
      .delete()
      .where("id", id)
    console.log("Sucesso!")    
  } catch (error) {
    console.log(error)
  }
}

c) const avgSalary = async (gender: string): Promise<void> => {
  try {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender })
    console.log(result)  
  } catch (error) {
    console.log(error)
  }
}


### Exercício 3
a) A variável `id` está recebendo como parâmetro o `id` que está vindo da `url`

b) `.status()` define o código do status HTTP. 
`.send()` define o que será enviado no body como resposta.
