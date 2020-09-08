import { BandBusiness } from "../../src/business/BandBusiness";
import { Band } from "../../src/model/Band";

describe("Testing getBandByIdOrName on the Business layer", () => {
    let bandDatabase = {
  
    };
    let idGenerator = {
      generate: jest.fn(() => "id")
    };
    let authenticator = {
  
    };
    
    test("Should return an error when receiving empty token", async () => {
        expect.assertions(2);
    
        const bandBusiness = new BandBusiness(
            bandDatabase as any,
            idGenerator as any,
            authenticator as any
        );
    
        try {
            await bandBusiness.getBandByIdOrName("", "","Os Guadiões") ;
    
        } catch (error) {
            expect(error.code).toBe(400);
            expect(error.message).toEqual("User must be logged");
        }
    });

    test("Should return an error when receiving empty bandId and bandName", async () => {
        expect.assertions(2);
    
        const bandBusiness = new BandBusiness(
            bandDatabase as any,
            idGenerator as any,
            authenticator as any
        );
    
        try {
            await bandBusiness.getBandByIdOrName("token", "","") ;
    
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });
    
   test("The band information must be returned by the id the user informed", async () => {

    let getBandById = jest.fn((token : string, bandId?: string, bandName?: string) => { 
        return new Band ("id", "The Boys", "Rock", "Thiago");
    });

    bandDatabase = {getBandById};

    const bandBusiness = new BandBusiness(
        bandDatabase as any,
        idGenerator as any,
        authenticator as any
    );

    await bandBusiness.getBandByIdOrName("token", "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f","") ;

    expect(getBandById).toHaveBeenCalledWith("ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f");
    expect(getBandById).toHaveReturnedTimes(1);
    expect(getBandById).toHaveReturnedWith(
        new Band("id", "The Boys", "Rock", "Thiago")
    );
   });

   test("The band information must be returned by the name the user informed", async () => {

    let getBandByName = jest.fn((token : string, bandId?: string, bandName?: string) => { 
        return new Band ("id", "The Boys", "Rock", "Thiago");
    });

    bandDatabase = {getBandByName};

    const bandBusiness = new BandBusiness(
        bandDatabase as any,
        idGenerator as any,
        authenticator as any
    );

    await bandBusiness.getBandByIdOrName("token", "","The Boys") ;

    expect(getBandByName).toHaveBeenCalledWith("The Boys");
    expect(getBandByName).toHaveReturnedTimes(1);
    expect(getBandByName).toHaveReturnedWith(
        new Band("id", "The Boys", "Rock", "Thiago")
    );
   });

});