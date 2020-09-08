import { BandBusiness } from "../../src/business/BandBusiness";
import { BandInputDTO, Band } from "../../src/model/Band";

describe("Testing createBand on the Business layer", () => {
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

    const input: BandInputDTO = {
        name: "Os Guardiões",
        musicGenre: "Rock",
        responsible: "Beny Renpt"
    };

    try {
        await bandBusiness.createBand("", input) ;

    } catch (error) {
        expect(error.code).toBe(400);
        expect(error.message).toEqual("User must be logged");
    }
  });

  test("Should return an error when receiving empty name", async () => {
    expect.assertions(2);

    const bandBusiness = new BandBusiness(
        bandDatabase as any,
        idGenerator as any,
        authenticator as any
    );

    const input: BandInputDTO = {
        name: "",
        musicGenre: "Rock",
        responsible: "Beny Renpt"
    };

    try {
        await bandBusiness.createBand("token", input) ;

    } catch (error) {
        expect(error.code).toBe(422);
        expect(error.message).toEqual("Missing input");
    }
  });

  test("Should return an error when receiving empty musicGenre", async () => {
    expect.assertions(2);

    const bandBusiness = new BandBusiness(
        bandDatabase as any,
        idGenerator as any,
        authenticator as any
    );

    const input: BandInputDTO = {
        name: "Os Guardiões",
        musicGenre: "",
        responsible: "Beny Renpt"
    };

    try {
        await bandBusiness.createBand("token", input) ;

    } catch (error) {
        expect(error.code).toBe(422);
        expect(error.message).toEqual("Missing input");
    }
  });

  test("Should return an error when receiving empty responsible", async () => {
    expect.assertions(2);

    const bandBusiness = new BandBusiness(
        bandDatabase as any,
        idGenerator as any,
        authenticator as any
    );

    const input: BandInputDTO = {
        name: "Os Guardiões",
        musicGenre: "Rock",
        responsible: ""
    };

    try {
        await bandBusiness.createBand("token", input) ;

    } catch (error) {
        expect(error.code).toBe(422);
        expect(error.message).toEqual("Missing input");
    }
  });
  
  test("Should return 'Unauthorized' error when user is not 'ADMIN'", async () => {
    expect.assertions(2);

    let getData = jest.fn(() => { return { id: "id", role: "NORMAL" } });

    authenticator = {getData};

    const bandBusiness = new BandBusiness(
        bandDatabase as any,
        idGenerator as any,
        authenticator as any
    );

    const input: BandInputDTO = {
        name: "Os Guardiões",
        musicGenre: "Rock",
        responsible: "Beny Renpt"
    };

    try {
        await bandBusiness.createBand("token", input) ;

    } catch (error) {
        expect(error.code).toBe(403);
        expect(error.message).toEqual("Unauthorized");
    }
  });
  
  test("User must succeed when registering a band", async () => {
    expect.assertions(4);

    let getData = jest.fn(() => { return { id: "id", role: "ADMIN" } });

    let createBand = jest.fn((band: Band) => {})
    
    bandDatabase = {createBand};
    authenticator = {getData};

    const bandBusiness = new BandBusiness(
        bandDatabase as any,
        idGenerator as any,
        authenticator as any
    );

    const input: BandInputDTO = {
        name: "Os Guardiões",
        musicGenre: "Rock",
        responsible: "Beny Renpt"
    };

    await bandBusiness.createBand("token", input) ;

    expect(getData).toBeCalled();
    expect(getData).toBeCalledTimes(1)
    expect(getData).toBeCalledWith("token")
    expect(createBand).toHaveBeenCalledWith("id", "Os Guardiões", "Rock", "Beny Renpt");
  });
  
});