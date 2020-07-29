// a) Através do comando 'process.argv'


// b) c)
const nome: string = process.argv[2]

const idade: number = Number(process.argv[3])

const idadeMaisSete: number = idade + 7

const blue = '\u001b[34m'

if (process.argv[2] === undefined || process.argv[3] === undefined) {
  console.log(blue + "Está faltando parâmetro - Nome - Idade")
} else {
  console.log(`Olá, ${nome}! Você tem ${idade} anos. Sua idade daqui a 7 anos será ${idadeMaisSete}`)
}




