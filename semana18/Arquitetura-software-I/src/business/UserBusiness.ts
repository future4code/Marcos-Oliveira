import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {

    public async signUp(name: string, email: string, password: string, role?: string): Promise<string> {

        if (!name || !email || !password) {
            throw new Error('Insira todas as informações necessárias para o cadastro');
        }

        if(email.indexOf("@") === -1){
            throw new Error("Email inválido");
        }

        if(password.length < 6){
            throw new Error("A senha deve ter pelo menos 6 caracteres");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);

        const userDataBase = new UserDatabase();
        await userDataBase.registerUser(
            id,
            name,
            email,
            hashPassword,
            role
        );

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({ id, role });

        return token;
    }

    public async login(email: string, password: string): Promise<string> {

        const userDataBase = new UserDatabase();
        const user = await userDataBase.getUserByEmail(email);

        const hashManager = new HashManager();
        const isPasswordCorrect = await hashManager.compare(password, user.password);

        if (!isPasswordCorrect) {
            throw new Error('Usuário ou senha incorretos');
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        });

        return token;
    }

    public async getUsers(token: string): Promise<any[]> {
        
        const authenticator = new Authenticator();
        authenticator.getData(token);

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUsers()

        return user;
    }

    public async deleteUser(input: any): Promise<void> {

        const userDatabase = new UserDatabase();
        const authenticator = new Authenticator();

        const verifiedToken = authenticator.getData(input.token);

			if (verifiedToken.role !== "ADMIN") {
			    throw new Error("Apenas administradores podem deletar usuários!")
			}

        return await userDatabase.deleteUser(input.id);
        
    }
}