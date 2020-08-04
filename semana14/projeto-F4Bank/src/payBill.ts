import moment from 'moment'
moment.locale("pt-br")

import { readDatabase, writeToDatabase } from './index'

const accountName: string = process.argv[2]
const accountCPF: number = Number(process.argv[3])
const value: number = Number(process.argv[4])
const description: string = process.argv[5]
const datePayment: moment.Moment = moment(process.argv[6], "DD/MM/YYYY")

function payBill(
  accountName: string, 
  accountCPF: number, 
  value: number,
  description: string,
  datePayment: moment.Moment    
): void {
  if (process.argv[6] === undefined) {
    datePayment = moment()
  }

  const diffDatePaymenttAndToday = datePayment.diff(moment(), "seconds");

  if (diffDatePaymenttAndToday < 0) {
    console.log("Data de pagamento é anterior a data atual, favor inserir outra data")
    return
  }

  readDatabase()

  let accountList: any[] = readDatabase()

  const accountIndex = accountList.findIndex(account => 
    account.name === accountName && account.cpf === accountCPF
  )

  if (accountIndex === -1) {
    console.log("Dados incorretos")
    return
  } else if (accountList[accountIndex].balance < value) {
    console.log("Saldo insuficiente para pagar a conta")
    return
  }

  accountList[accountIndex].accountStatement.push({ 
    value,
    description,
    datePayment
  })

  accountList[accountIndex].balance -= value

  writeToDatabase(accountList)

  console.log("Operação de pagamento efetuada com sucesso!!!")
  
}

payBill(accountName, accountCPF, value, description, datePayment)