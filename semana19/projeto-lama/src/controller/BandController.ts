import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandInputDTO } from "../model/Band";

export class BandController {
    private static BandBusiness = new BandBusiness (
        new BandDatabase(),
        new IdGenerator(),
        new Authenticator()
    )

    async createBand(req: Request, res: Response) {
        try {
   
            const token = req.headers.authorization as string;

            const bandData: BandInputDTO = {
                name: req.body.email,
                musicGenre: req.body.musicGenre,
                responsible: req.body.responsible
            };

            await BandController.BandBusiness.createBand(token, bandData);

            res.status(200).send({
                message: "Band successfully created!"
            });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getBandIdOrName (req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string;

            const bandId = req.body.bandId;
            const bandName = req.body.bandName;

            const band = await BandController.BandBusiness.getBandByIdOrName(token, bandId, bandName);

            res.status(200).send({
                band
            });
                        
        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}