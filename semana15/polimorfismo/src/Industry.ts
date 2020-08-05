import { Place } from "./Place";

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    cep: string
  ) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity
  }
}

const industry: Industry = new Industry(5, "25877-009")

//console.log(industry.getCep())