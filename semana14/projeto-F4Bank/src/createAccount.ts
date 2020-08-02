import moment from 'moment'
moment.locale("pt-br")

import { readDatabase, writeToDatabase } from './index'

type Statement = {
  value: number,
  description: string,
  date: moment.Moment
}

type Account = {
  name: string,
  cpf: number,
  dateOfBirth: moment.Moment,
  balance: number
  accountStatement: Statement[]
}

const newAccountName: string = process.argv[2]
const newAccountCPF: number = Number(process.argv[3])
const newAccountDate: moment.Moment = moment(process.argv[4], "DD/MM/YYYY")
const balance: number = 0
const accountStatement: Statement[] = []

let accountList: Account[] = []

function createAccount(
  newAccountName: string,
  newAccountCPF: number,
  newAccountDate: moment.Moment
): void {

  const today = moment()
  const diffDateOfBirthAndToday = today.diff(newAccountDate, "years")
  
  if (diffDateOfBirthAndToday < 18) {
    console.log("Não foi possível criar a conta, idade inferior a 18 anos");
    return;
  }

  readDatabase()

  let accountList: any[] = readDatabase()

  for (let item of accountList) {
    if (item.cpf === newAccountCPF) {
      console.log("CPF já existente")
      return;
    }
  }

  accountList.push({
    name: newAccountName,
    cpf: newAccountCPF,
    dateOfBirth: newAccountDate,
    balance: balance,
    accountStatement: accountStatement
  })

  writeToDatabase(accountList)

  console.log("Conta criada com sucesso!!!")
}

createAccount(newAccountName, newAccountCPF, newAccountDate)