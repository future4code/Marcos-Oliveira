import moment from 'moment'
import { readDatabase, writeToDatabase } from './index'

const accountName: string = process.argv[2]
const accountCPF: number = Number(process.argv[3])
const value: number = Number(process.argv[4])

function addBalance(
  accountName: string, 
  accountCPF: number, 
  value: number
): void {
  readDatabase()

  let accountList: any[] = readDatabase()

  const accountIndex = accountList.findIndex(account => 
    account.name === accountName && account.cpf === accountCPF 
  )

  if (accountIndex === -1) {
    console.log("Dados incorretos")
    return
  }

  accountList[accountIndex].balance += value

  let description: string = "Depósito de dinheiro"
  let today = moment()
  accountList[accountIndex].accountStatement.push({ 
    value,
    description,
    date: today
  })

  writeToDatabase(accountList)

  console.log("Saldo creditado com sucesso!!!")

}

addBalance(accountName, accountCPF, value)