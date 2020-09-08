import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, LoginInputDTO } from "../../src/model/User";

describe("Testing login on the Business layer", () => {

    let userDatabase = {

    };
    let idGenerator = {

    };
    let hashManager = {

    };
    let authenticator = {
        generateToken: jest.fn(() => "token")
    };

    test("Should return an error when receiving empty email", async () => {
        expect.assertions(2);

        try {

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashManager as any,
                authenticator as any
            );

            const input: LoginInputDTO = {
                email: "",
                password: "223344"
            };

            await userBusiness.login(input);

        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });
    
    test("Should return an error when receiving empty password", async ()=>{
        expect.assertions(2);

        try {

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashManager as any,
                authenticator as any
            );

            const input: LoginInputDTO = {
                email: "marcos@dev.com",
                password: ""
            };

            await userBusiness.login(input);

        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });
    
    test("Should return error when the user is not found", async ()=>{
        expect.assertions(3);

        let getUserByEmail = jest.fn((email: string) => {return undefined});

        try {

            userDatabase = {getUserByEmail};

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashManager as any,
                authenticator as any
            );

            const input: LoginInputDTO = {
                email: "marcos@dev.com",
                password: "223344"
            };

            await userBusiness.login(input);

        } catch (error) {
            expect(getUserByEmail).toHaveBeenCalledWith("marcos@dev.com");
            expect(error.code).toBe(404);
            expect(error.message).toEqual("User not found");
        }
    });
    
    test("Should return error when the user has entered the incorrect password", async () => {
        expect.assertions(4);

        let getUserByEmail = jest.fn((email: string) => {
            return new User (
                "id", 
                "Marcos Oliveira",
                "marcos@dev.com",  
                "223344", 
                UserRole.ADMIN
            );
        });

        let compare = jest.fn((password: string, userPassword: string) => false);

        try {
            userDatabase = {getUserByEmail};
            hashManager = {compare};

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashManager as any,
                authenticator as any
            );

            const input: LoginInputDTO = {
                email: "marcos@dev.com",
                password: "000000"
            };

            await userBusiness.login(input);

        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Invalid password");
            expect(getUserByEmail).toHaveBeenCalledWith("marcos@dev.com");
            expect(compare).toHaveBeenCalledWith("000000", "223344");
        }
    });

    test("Should return a token when all data is correct", async () => {

        let getUserByEmail = jest.fn((email: string) => {
            return new User("id", "Marcos Oliveira", "marcos@dev.com", "223344", UserRole.ADMIN);
        });

        let compare = jest.fn((password: string, userPassword: string) => true);

        userDatabase = {getUserByEmail};
        hashManager = {compare};

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        const input: LoginInputDTO = {
            email: "marcos@dev.com",
            password: "223344"
        };

        await userBusiness.login(input);

        expect(getUserByEmail).toHaveBeenCalledWith("marcos@dev.com");
        expect(compare).toHaveBeenCalledWith("223344", "223344");
        expect(authenticator.generateToken).toHaveReturnedWith("token");
    });
    
}); 