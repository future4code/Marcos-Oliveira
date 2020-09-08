import { ShowBusiness } from "../../src/business/ShowBusiness";

describe("Testing getShowByDay on the Business layer", () => {
    let showDatabase = {
  
    };
    let idGenerator = {
      generate: jest.fn(() => "id")
    };
    let authenticator = {
      getData: jest.fn((token: string) => {
        return {
            id: "id",
            role: "role"
        } 
      })
    };
    
    test("Should return an error when receiving empty token", async () => {
        expect.assertions(2);
    
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
    
        try {
            await showBusiness.getShowByDay("", "SUNDAY") ;
    
        } catch (error) {
            expect(error.code).toBe(400);
            expect(error.message).toEqual("User must be logged");
        }
    });
    
    test("Should return an error when receiving empty weekDay", async () => {
        expect.assertions(2);
    
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
    
        try {
            await showBusiness.getShowByDay("token", "") ;
    
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });
    
    test("Should return an error when 'weekDay' is not FRIDAY, SATURDAY or SUNDAY", async () => {
        expect.assertions(2);
    
        try {
    
            const showBusiness = new ShowBusiness(
                showDatabase as any,
                idGenerator as any,
                authenticator as any
            );
    
            await showBusiness.getShowByDay("token", "SEXTA");
        } catch (err) {
            expect(err.code).toBe(422);
            expect(err.message).toEqual("Invalid day of the week");
        }
    });
    
    test("Must return all shows of the day that the user informed", async () => {
    
        let getShowByDay = jest.fn((weekDay: string) => { 
            return {
                name: "Os Guardiões",
                musicGenre: "Rock" 
            }
        });
    
        showDatabase = {getShowByDay};
    
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
    
        await showBusiness.getShowByDay("token", "SUNDAY");

        expect(getShowByDay).toHaveBeenCalledWith("SUNDAY");
        expect(getShowByDay).toHaveReturnedTimes(1);
        expect(getShowByDay).toHaveReturnedWith({ name: "Os Guardiões", musicGenre: "Rock" });
    
    });

});