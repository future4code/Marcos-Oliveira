"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    interoduceYourself() {
        return `Olá, sou ${this.getName()}. Bom dia!`;
    }
}
exports.User = User;
const myUser = new User("1", "maicon@gmail.com", "Maicon Oliveira", "123456");
console.log(myUser.getId(), myUser.getName(), myUser.getEmail());
