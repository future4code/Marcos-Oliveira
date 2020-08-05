"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
class Customer extends User_1.User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
const customer = new Customer("1", "amanda@gmail.com", "Amanda Oliveira", "123456", "11223344");
console.log(customer.getId(), customer.getEmail(), customer.getName(), customer.purchaseTotal, customer.getCreditCard(), customer.interoduceYourself());
