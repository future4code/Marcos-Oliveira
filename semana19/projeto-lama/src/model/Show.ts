import { InvalidParameterError } from "../error/InvalidParameterError";

export class Show{
    constructor(
    private id: string,
    private weekDay: string,
    private startTime: number,
    private endTime: number,
    private bandId: string
    ) {}

    getId() {
        return this.id;
    }

    getWeekDay() {
        return this.weekDay;
    }

    getStartTime() {
        return this.startTime;
    }

    getEndTime() {
        return this.endTime;
    }

    getBandId() {
        return this.bandId;
    }

    static stringToShowWeekDay(input: string): ShowWeekDay {
        switch (input) {
          case "FRIDAY":
            return ShowWeekDay.FRIDAY;
          case "SATURDAY":
            return ShowWeekDay.SATURDAY;
          case "SUNDAY":
            return ShowWeekDay.SUNDAY;
          default:
            throw new InvalidParameterError("Invalid day of the week");
        }
    }

    static toShowModel(show: any): Show {
        return new Show (
            show.id, 
            Show.stringToShowWeekDay(show.week_day), 
            show.start_time, 
            show.end_time, 
            show.band_id
        );
    }

}

export interface ShowInputDTO{
    weekDay: string;
    startTime: number;
    endTime: number;
    bandId: string;
}

export enum ShowWeekDay{
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}