"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
class Seller extends Employee_1.Employee {
    constructor() {
        super(...arguments);
        this.salesQuantity = 0;
    }
    getSalesQuantity() {
        return this.salesQuantity;
    }
    setSalesQuantity(quantity) {
        this.salesQuantity = quantity;
    }
    calculateTotalSalary() {
        return this.baseSalary + 400 + this.salesQuantity * 5;
    }
}
const seller = new Seller("1", "Ana Oliveira", "ana@gmail.com", "123456", "20/07/2020", 2000);
const seller2 = new Seller("2", "Carla Oliveira", "carla@gmail.com", "321456", "20/06/2020", 2000);
console.log(seller.getId());
console.log(seller.getName());
console.log(seller.getEmail());
console.log(seller.getBaseSalary());
console.log(seller.getAdmissionDate());
console.log(seller.calculateTotalSalary());
seller.setSalesQuantity(200);
console.log(seller.getSalesQuantity());
seller2.setSalesQuantity(600);
console.log(seller.calculateTotalSalary());
