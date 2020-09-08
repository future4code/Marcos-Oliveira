import { UserInputDTO, LoginInputDTO, User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";

export class UserBusiness {
    constructor (
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    async createUser(user: UserInputDTO): Promise<string> {
        if (!user.name || !user.email || !user.password) {
            throw new InvalidParameterError("Missing input");
        }

        if (user.email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        if (user.password.length < 6) {
            throw new InvalidParameterError("Invalid password");
        }
        
        let role: string = "";
        if (user.role) {
            role = User.stringToUserRole(user.role)
        }

        const id = this.idGenerator.generate();

        const hashPassword = await this.hashManager.hash(user.password);

        await this.userDatabase.createUser(
            id, 
            user.email, 
            user.name, 
            hashPassword, 
            role
        );

        const accessToken = this.authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    public async login(userLogin: LoginInputDTO): Promise<string> {
        if (!userLogin.email || !userLogin.password) {
            throw new InvalidParameterError("Missing input");
        }
        
        if (userLogin.email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        const user = await this.userDatabase.getUserByEmail(userLogin.email);

        if (!user) {
            throw new NotFoundError("User not found");
        }
        
        const isPasswordCorrect = await this.hashManager.compare(userLogin.password, user.getPassword());

        if (isPasswordCorrect === false) {
            throw new InvalidParameterError("Invalid password");
        }

        const token = this.authenticator.generateToken({
            id: user.getId(),
            role: user.getRole()
        });

        return token;
    }

    async getUserByEmail(user: LoginInputDTO): Promise<string> {
        if (!user.email || !user.password) {
            throw new InvalidParameterError("Missing input");
        }

        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

        const hashCompare = await this.hashManager.compare(user.password, userFromDB.getPassword());
        if (!hashCompare) {
            throw new InvalidParameterError("Invalid password");
        }

        const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        return accessToken;
    }
}