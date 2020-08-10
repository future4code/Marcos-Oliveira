import { Place } from "./Place";

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity
  }
}

const commerce: Commerce = new Commerce(8, "11200-629")

//console.log(commerce.getCep())