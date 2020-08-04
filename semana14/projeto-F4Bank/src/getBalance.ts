import { readDatabase } from './index'

const accountName: string = process.argv[2]
const accountCPF: number = Number(process.argv[3])

let balance: any[] = []

function getBalance(accountName: string, accountCPF: number): void {
  readDatabase()

  let accountList: any[] = readDatabase()

  const response = accountList.find(item => item.name === accountName && item.cpf === accountCPF)

  if (response) {
    balance.push(response)
    for (let item of balance) {
      console.log(`Saldo atual de ${item.name}: ${item.balance}`)
    }
  } else {
    console.log("Não foi possível verificar o saldo, dados incorretos")
  }
}

getBalance(accountName, accountCPF)

