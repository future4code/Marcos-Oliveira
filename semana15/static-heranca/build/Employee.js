"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale("pt-br");
const User_1 = require("./User");
class Employee extends User_1.User {
    constructor(id, email, name, password, admissionDate, baseSalary) {
        super(id, email, name, password);
        this.admissionDate = moment_1.default().format("DD/MM/YYYY");
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }
    getAdmissionDate() {
        return this.admissionDate;
    }
    getBaseSalary() {
        return this.baseSalary;
    }
    calculateTotalSalary() {
        return this.baseSalary + 400;
    }
}
exports.Employee = Employee;
const employee = new Employee("1", "danilo@gmail.com", "Danilo Oliveira", "123456", "04/08/2020", 2000);
console.log(employee.getAdmissionDate());
