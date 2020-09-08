import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { ShowInputDTO } from "../model/Show";
import { BaseDatabase } from "../data/BaseDatabase";

export class ShowController {
    private static showBusiness = new ShowBusiness (
        new ShowDatabase(),
        new IdGenerator(),
        new Authenticator()
    )

    async createShow(req: Request, res: Response) {
        try {
   
            const token = req.headers.authorization as string;

            const showData: ShowInputDTO = {
                weekDay: req.body.weekDay,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                bandId: req.body.bandId
            };

            await ShowController.showBusiness.createShow(token, showData);

            res.status(200).send({
                message: "Show successfully registered!"
            });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getShowByDay(req: Request, res: Response) {
        try {
   
            const token = req.headers.authorization as string;

            const weekDay = req.body.weekDay;

            const result = await ShowController.showBusiness.getShowByDay(token, weekDay);

            res.status(200).send({
                showsOfTheDay: result
            });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}