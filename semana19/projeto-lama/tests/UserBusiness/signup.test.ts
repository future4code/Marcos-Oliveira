import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserInputDTO, UserRole } from "../../src/model/User";

describe("Testing signup on the Business layer", () => {

    let userDatabase = {

    };
    let idGenerator = {
        generate: jest.fn(() => "id")
    }
    let hashManager = {
        hash: jest.fn(() => "hash")
    };
    let authenticator = {
        generateToken: jest.fn(() => "token")
    };
    
    test("Should return an error when receiving empty name", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        const input: UserInputDTO = {
            email: "marcos@dev.com",
            name: "",
            password: "123456",
            role: "ADMIN"
        };

        try {
            await userBusiness.createUser(input);
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Should return an error when receiving empty email", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        const input: UserInputDTO = {
            email: "",
            name: "Marcos Oliveira",
            password: "123456",
            role: "ADMIN"
        };

        try {
            await userBusiness.createUser(input);
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Should return an error when receiving empty password", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        const input: UserInputDTO = {
            email: "marcos@dev.com",
            name: "Marcos Oliveira",
            password: "",
            role: "ADMIN"
        };

        try {
            await userBusiness.createUser(input);
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("'Invalid email' error should be returned for an email without @", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        const input: UserInputDTO = {
            email: "marcosdev.com",
            name: "Marcos Oliveira",
            password: "123456",
            role: "ADMIN"
        };

        try {
            await userBusiness.createUser(input);
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Invalid email");
        }
    });

    test("'Invalid password' error should be returned for a password of less than 6 characters", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        const input: UserInputDTO = {
            email: "marcos@dev.com",
            name: "Marcos Oliveira",
            password: "12345",
            role: "ADMIN"
        };

        try {
            await userBusiness.createUser(input);
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Invalid password");
        }
    });

    test("Should return 'Invalid user role' in case of role other than NORMAL or ADMIN'", async () => {
        expect.assertions(2);
        try {

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashManager as any,
                authenticator as any
            );
    
            const input: UserInputDTO = {
                email: "marcos@dev.com",
                name: "Marcos Oliveira",
                password: "123456",
                role: "MRO"
            };

            await userBusiness.createUser(input);
        } catch (err) {
            expect(err.code).toBe(422);
            expect(err.message).toEqual("Invalid user role");
        }
    });
    
    test("Should return access token after user creation", async () => {

        let createUser = jest.fn((user: User) => {})

        userDatabase = {createUser};

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        const input: UserInputDTO = {
            email: "marcos@dev.com",
            name: "Marcos Oliveira",
            password: "223344",
            role: User.stringToUserRole("ADMIN")
        };

        await userBusiness.createUser(input);

        expect(hashManager.hash).toBeCalled();
        expect(createUser).toHaveBeenCalledWith("id", "marcos@dev.com", "Marcos Oliveira", "hash", UserRole.ADMIN);
        expect(authenticator.generateToken).toHaveReturnedWith("token");
    });

}); 

