import moment from 'moment'
moment.locale("pt-br")

import { readDatabase } from './index'

function getAllAccounts(): void {
  readDatabase()

  const accountList: any[] = readDatabase()

  for (let item of accountList) {
    let date: moment.Moment
    date = moment(item.dateOfBirth)
    console.log(`
      Nome: ${item.name}
      CPF: ${item.cpf}
      Data de nascimento: ${date.format("DD/MM/YYYY")}
      Saldo: ${item.balance}
    `)
  }
}

getAllAccounts()