import moment from 'moment'
moment.locale("pt-br")

import { User } from './User'

export class Employee extends User {
  protected admissionDate: string = moment().format("DD/MM/YYYY");
  protected baseSalary: number;
  static BENEFITS_VALUE: number = 400;
  
  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
    }
      
    public getAdmissionDate(): string {
      return this.admissionDate
    }
  
    public getBaseSalary(): number {
      return this.baseSalary
    }

    public calculateTotalSalary(): number {
      return this.baseSalary + Employee.BENEFITS_VALUE
    }
}

const employee = new Employee("1", "danilo@gmail.com", "Danilo Oliveira", "123456", "04/08/2020", 2000)

console.log(employee.getAdmissionDate())