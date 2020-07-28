type operacoes = {
    soma: number,
    subtrcao: number,
    multiplicacao: number,
    maior: number
  }
  
const resultado = (a: number, b: number): operacoes => {
  const exibeResultado: operacoes = {
    soma: a + b,
    subtrcao: a - b,
    multiplicacao: a * b,
    maior: a > b ? a : b
  }  
  
  return exibeResultado
}

console.log(resultado(10, 20))