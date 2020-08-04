import moment from 'moment'
moment.locale("pt-br")

import { readDatabase, writeToDatabase } from './index'

const accountName: string = process.argv[2]
const accountCPF: number = Number(process.argv[3])
const recipientName: string = (process.argv[4])
const recipientCPF: number = Number(process.argv[5])
const value: number = Number(process.argv[6])

function performTransfer(
  accountName: string, 
  accountCPF: number, 
  recipientName: string,
  recipientCPF: number, 
  value: number 
): void {
  readDatabase()

  let accountList: any[] = readDatabase()

  const accountIndexUser = accountList.findIndex(account => 
    account.name === accountName && account.cpf === accountCPF
  )

  const accountIndexRecipient = accountList.findIndex(account => 
    account.name === recipientName && account.cpf === recipientCPF
  )

  if (accountIndexUser === -1) {
    console.log("Dados do remetente incorretos")
    return
  } else if(accountIndexRecipient === -1) {
    console.log("Dados do destinatário incorretos")
    return
  }

  if (accountList[accountIndexUser].balance < value) {
    console.log("Saldo insuficiente para realizar a transferência")
    return
  }

  accountList[accountIndexUser].balance -= value
  accountList[accountIndexRecipient].balance += value

  let today = moment()
  let descriptionUser: string = "Transferência enviada"
  let descriptionRecipient: string = "Transferência recebida"

  accountList[accountIndexUser].accountStatement.push({ 
    value,
    description: descriptionUser,
    date: today
  })
  
  accountList[accountIndexRecipient].accountStatement.push({ 
    value,
    description: descriptionRecipient,
    date: today
  })

  writeToDatabase(accountList)

  console.log("Operação de transferência efetuada com sucesso!!!")

}

performTransfer(accountName, accountCPF, recipientName, recipientCPF, value)