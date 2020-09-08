import { ShowBusiness } from "../../src/business/ShowBusiness";
import { ShowInputDTO, Show } from "../../src/model/Show";

describe("Testing createShow on the Business layer", () => {
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
    
        const input: ShowInputDTO = {
            weekDay: "SEXTA",
            startTime: 13,
            endTime: 14,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
    
        try {
            await showBusiness.createShow("", input) ;
    
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
    
        const input: ShowInputDTO = {
            weekDay: "",
            startTime: 13,
            endTime: 14,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
    
        try {
            await showBusiness.createShow("token", input) ;
    
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });
    
    test("Should return an error when receiving empty startTime", async () => {
        expect.assertions(2);
    
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
    
        const input: ShowInputDTO = {
            weekDay: "SEXTA",
            startTime: Number(NaN),
            endTime: 14,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
    
        try {
            await showBusiness.createShow("token", input) ;
    
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });
    
    test("Should return an error when receiving empty endTime", async () => {
        expect.assertions(2);
    
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
    
        const input: ShowInputDTO = {
            weekDay: "SEXTA",
            startTime: 13,
            endTime: Number(NaN),
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
    
        try {
            await showBusiness.createShow("token", input) ;
    
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });
        
    test("Should return an error when receiving empty bandId", async () => {
        expect.assertions(2);
        
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
        
        const input: ShowInputDTO = {
            weekDay: "SEXTA",
            startTime: 13,
            endTime: 14,
            bandId: ""
        };
        
        try {
            await showBusiness.createShow("token", input) ;
        
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });
    
    test("Should return an error when startTime is less than 8", async () => {
        expect.assertions(2);
        
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
        
        const input: ShowInputDTO = {
            weekDay: "SEXTA",
            startTime: 7,
            endTime: 14,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
        
        try {
            await showBusiness.createShow("token", input) ;
        
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Invalid times");
        }
    });
    
    test("Must return an error when startTime is greater than 22", async () => {
        expect.assertions(2);
        
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
        
        const input: ShowInputDTO = {
            weekDay: "SEXTA",
            startTime: 23,
            endTime: 14,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
        
        try {
            await showBusiness.createShow("token", input) ;
        
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Invalid times");
        }
    });
    
    test("Should return an error when endTime is less than 9", async () => {
        expect.assertions(2);
        
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
        
        const input: ShowInputDTO = {
            weekDay: "SEXTA",
            startTime: 8,
            endTime: 8,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
        
        try {
            await showBusiness.createShow("token", input) ;
        
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Invalid times");
        }
    });

    test("Should return an error when endTime is greater than 23", async () => {
        expect.assertions(2);
        
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
        
        const input: ShowInputDTO = {
            weekDay: "SEXTA",
            startTime: 20,
            endTime: 24,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
        
        try {
            await showBusiness.createShow("token", input) ;
        
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Invalid times");
        }
    });

    test("Should return an error when endTime is less than startTime", async () => {
        expect.assertions(2);
    
        const showBusiness = new ShowBusiness(
           showDatabase as any,
           idGenerator as any,
           authenticator as any
        );
    
        const input: ShowInputDTO = {
           weekDay: "SEXTA",
           startTime: 10,
           endTime: 8,
           bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
    
        try {
           await showBusiness.createShow("token", input) ;
    
        } catch (error) {
           expect(error.code).toBe(422);
           expect(error.message).toEqual("Invalid times");
        }
    });
    
    test("Should return an error when a show already exists on the same day and time", async () => {
        expect.assertions(2);

        let getShowByDayAndStartTime = jest.fn((weekDay: string, startTime: number) => { 
            return new Show ("id", "SATURDAY", 18, 20, "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"); 
        });

        showDatabase = {getShowByDayAndStartTime};
        
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
        
        const input: ShowInputDTO = {
            weekDay: "SATURDAY",
            startTime: 18,
            endTime: 20,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
        
        try {
            await showBusiness.createShow("token", input) ;
        
        } catch (error) {
            expect(error.code).toBe(422);
            expect(error.message).toEqual("Day and time already occupied");
        }
    });

   test("Should return an error when 'weekDay' is not FRIDAY, SATURDAY or SUNDAY", async () => {
    expect.assertions(2);

    let getShowByDayAndStartTime = jest.fn((weekDay: string, startTime: number) => undefined );

    showDatabase = {getShowByDayAndStartTime};

    try {

        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );

        const input: ShowInputDTO = {
            weekDay: "SEXTA",
            startTime: 18,
            endTime: 20,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };

        await showBusiness.createShow("token", input);
    } catch (err) {
        expect(err.code).toBe(422);
        expect(err.message).toEqual("Invalid day of the week");
    }
   });
   
    test("Must register a show successfully", async () => {

        let getShowByDayAndStartTime = jest.fn((weekDay: string, startTime: number) => undefined );

        let registerShow = jest.fn((show: Show) => {});

        showDatabase = {getShowByDayAndStartTime, registerShow};
        
        const showBusiness = new ShowBusiness(
            showDatabase as any,
            idGenerator as any,
            authenticator as any
        );
        
        const input: ShowInputDTO = {
            weekDay: "SATURDAY",
            startTime: 20,
            endTime: 21,
            bandId: "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f"
        };
        
        await showBusiness.createShow("token", input) ;

        expect(getShowByDayAndStartTime).toBeCalled();
        expect(getShowByDayAndStartTime).toBeCalledTimes(1)
        expect(getShowByDayAndStartTime).toReturnWith(undefined)
        expect(registerShow).toHaveBeenCalledWith("id", "SATURDAY", 20, 21, "ab7f255a-d53b-4eda-a7ec-d6bc66cf2a1f");
    });
    
});
