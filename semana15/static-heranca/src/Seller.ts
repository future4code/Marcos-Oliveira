import { Employee } from './Employee'

class Seller extends Employee{
  private salesQuantity: number = 0
  static SELLING_COMMISSION: number = 5;

  public getSalesQuantity(): number {
    return this.salesQuantity
  }

  public setSalesQuantity(quantity: number): void{
    this.salesQuantity = quantity;
  }

  public calculateTotalSalary(): number {
    return (
      this.baseSalary + 
	  Employee.BENEFITS_VALUE + 
	  Seller.SELLING_COMMISSION * 5
	)
  }
  
}

const seller = new Seller("1", "Ana Oliveira", "ana@gmail.com", "123456", "20/07/2020",2000)
const seller2 = new Seller("2", "Carla Oliveira", "carla@gmail.com", "321456", "20/06/2020",2000)

console.log(seller.getId())
console.log(seller.getName())
console.log(seller.getEmail())
console.log(seller.getBaseSalary())
console.log(seller.getAdmissionDate())
console.log(seller.calculateTotalSalary())

seller.setSalesQuantity(200)
console.log(seller.getSalesQuantity())

seller2.setSalesQuantity(600)
console.log(seller.calculateTotalSalary())
