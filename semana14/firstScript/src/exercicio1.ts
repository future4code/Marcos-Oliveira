
// a)
//const minhaString: string = 5 - Já acusa erro, pois minhaString não está recebendo texto e sim um número

// b)
const meuNumero: number | string = 10 // Acrescentando " | string " 

//c)
type person = {
  nome: string,
  idade: number,
  corFavorita: CORFAVORITA
}

// d)
enum CORFAVORITA {
  VIOLETA = 'Violeta',
  ANIL = 'Anil',
  AZUL = 'Azul',
  VERDE = 'Verde',
  AMARELO = 'Amarelo',
  LARANJA = 'Laranja',
  VERMELHO = 'Vermelho'
}

const marcos: person = {
  nome: 'Marcos',
  idade: 20,
  corFavorita: CORFAVORITA.AZUL
}

const amanda: person = {
  nome: 'Amanda',
  idade: 25,
  corFavorita: CORFAVORITA.LARANJA
}

const danilo: person = {
  nome: 'Danilo',
  idade: 30,
  corFavorita: CORFAVORITA.VIOLETA
}


