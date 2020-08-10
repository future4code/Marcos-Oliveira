import { Place } from "./Place";

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    cep: string
    ) {
      super(cep);
    }

    public getResidentsQuantity(): number {
      return this.residentsQuantity
    }
}

const residence: Residence = new Residence(4, "15700-999")

//console.log(residence.getCep())