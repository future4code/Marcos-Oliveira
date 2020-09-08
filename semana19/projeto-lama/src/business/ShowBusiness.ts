import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { ShowInputDTO, Show } from "../model/Show";
import { GenericError } from "../error/GenericError";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { Authenticator } from "../services/Authenticator";

export class ShowBusiness {
    constructor (
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    async createShow(token: string, show: ShowInputDTO): Promise<void> {
        if (!token) {
            throw new GenericError("User must be logged");
        }

        const verifyToken = this.authenticator.getData(token);
        
        if (!show.weekDay || !show.startTime || !show.endTime || !show.bandId) {
            throw new InvalidParameterError("Missing input");
        }

        if ((show.startTime < 8 || show.startTime > 22) || (show.endTime < 9 || show.endTime > 23)) {
            throw new InvalidParameterError("Invalid times");
        }

        if (show.endTime <= show.startTime) {
            throw new InvalidParameterError("Invalid times");
        }

        const checkTime = await this.showDatabase.getShowByDayAndStartTime(show.weekDay, show.startTime);

        if (checkTime) {
           throw new InvalidParameterError("Day and time already occupied")
        }

        const id = this.idGenerator.generate();

        await this.showDatabase.registerShow (
            id, 
            Show.stringToShowWeekDay(show.weekDay), 
            show.startTime, 
            show.endTime,
            show.bandId
        );
    }

    async getShowByDay (token: string, weekDay: string): Promise<any> {
        if (!token) {
            throw new GenericError("User must be logged");
        }

        if (!weekDay) {
            throw new InvalidParameterError("Missing input");
        }

        const verifyToken = this.authenticator.getData(token)

        const day = Show.stringToShowWeekDay(weekDay)

        return await this.showDatabase.getShowByDay(day)
    
    }

}