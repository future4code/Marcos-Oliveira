import { BandDatabase } from "../data/BandDatabase";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { GenericError } from "../error/GenericError";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { Band, BandInputDTO } from "../model/Band";

export class BandBusiness {
    constructor (
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    async createBand(token: string, band: BandInputDTO): Promise<void> {
        if (!token) {
            throw new GenericError("User must be logged");
        }
        
        if (!band.name || !band.musicGenre || !band.responsible) {
            throw new InvalidParameterError("Missing input");
        }

        const authenticationData = this.authenticator.getData(token)

        if (authenticationData.role !== "ADMIN") {
            throw new UnauthorizedError("Unauthorized")
        }

        const id = this.idGenerator.generate();

        await this.bandDatabase.createBand (
            id, 
            band.name, 
            band.musicGenre, 
            band.responsible
        );
    }

    async getBandByIdOrName(token: string, bandId?: string, bandName?: string): Promise<Band> {       

        if (!token) {
            throw new GenericError("User must be logged");
        }

        if (!bandId && !bandName) {
            throw new InvalidParameterError("Missing input");
        };

        let response: any;
        if (bandId) {
            response = await this.bandDatabase.getBandById(bandId);
        };

        if (bandName) {
            response = await this.bandDatabase.getBandByName(bandName);
        };

        return response;
    }

}