import { User } from './User'

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;
  
  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }
  
  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer = new Customer("1", "amanda@gmail.com", "Amanda Oliveira", "123456", "11223344")

console.log(
  customer.getId(), 
  customer.getEmail(), 
  customer.getName(), 
  customer.purchaseTotal,
  customer.getCreditCard(),
  customer.interoduceYourself()
)