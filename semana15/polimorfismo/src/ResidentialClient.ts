import { Residence } from "./Residence";
import { Client } from "./Client";

export class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber = 0,
    public consumedEnergy: number,
    private cpf: number,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep)
  }

  public getCpf(): number {
    return this.cpf
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75
  }
      
}