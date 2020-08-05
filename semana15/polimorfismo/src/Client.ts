export interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  
  calculateBill(): number;
}

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
}

//console.log(client)

console.log(client.registrationNumber)
//client.name
//client.consumedEnergy
console.log(client.calculateBill())