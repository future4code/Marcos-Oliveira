import { Client } from "./Client"
import { ResidentialClient } from "./ResidentialClient"
import { ComercialClient } from "./ComercialClient"
import { IndustrialClient } from "./IndustrialClient"

class ClientManager {
  private clients: Client[] = []

  public getClientsQuantity(): number {
    return this.clients.length
  }

  public registerClient(client: Client) {
    this.clients.push(client)
  }

  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
        return client.registrationNumber === registrationNumber
    })

    if (foundClient) {
      return foundClient.calculateBill()
    }
  
    return 0;
  }

  public calculateTotalIncome(): number {
    let total: number = 0;
    this.clients.forEach((client) => {
      total += client.calculateBill();
    });
    return total;
  }

	public deleteUser(registrationNumber: number): void {
    let registrationIndex = undefined;

    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].registrationNumber === registrationNumber) {
        registrationIndex = i;
      }
    }

    if (registrationIndex !== undefined) {
      this.clients.splice(registrationIndex, 1);
    }
  }

  public printClients(): void {
    this.clients.forEach((client) => {
      console.log(`
        Nome do cliente: ${client.name}
        Número de registro: ${client.registrationNumber}
        Total de energia gasta: ${client.consumedEnergy}
        Total pago: ${client.calculateBill()} 
      `)
    })
  }

}

const clientManager = new ClientManager()

const residentialClient = new ResidentialClient("Marcos Oliveira", 22, 100, 33445566, 3, "23909-000")
clientManager.registerClient(residentialClient)

const commercialClient = new ComercialClient("Labenu", 12, 100, "12456-900/0001", 10, "23909-000")
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient("Petrobras", 32, 100, "12456-1", 40, "23909-000")
clientManager.registerClient(industrialClient)

clientManager.printClients()

