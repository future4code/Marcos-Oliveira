import { Transaction } from "./Transaction"
import * as moment from 'moment'

export class Account {
    constructor(
        private name: string,
        private cpf: string,
        private birthDate: string,
        private balance: number = 0,
        private transactions: Transaction[] = []
    ) {

    }

    getCpf = () => this.cpf
    getName = () => this.name
    getBirthDate = () => this.birthDate
    getBalance = () => this.balance
    gettransactions = () => this.transactions

    addTransaction(transaction: Transaction): void {
        this.transactions.push(transaction)
    }

    calculateBalance(): void {
        this.balance = 0
        this.transactions.forEach(
            (transaction) => {
                const today: moment.Moment = moment()
                const dateAsObject = moment(transaction.getDate(), "DD/MM/YYYY")

                const difference = today.diff(dateAsObject, 'days')

                if (difference >= 0) {
                    this.balance += transaction.getValue()
                }
            }

        )

    }
}