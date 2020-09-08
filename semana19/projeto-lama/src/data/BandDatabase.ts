import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";
import { NotFoundError } from "../error/NotFoundError";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "Band";

  public async createBand(
    id: string,
    name: string,
    musicGenre: string,
    responsible: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          music_genre: musicGenre,
          responsible
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandById(id: string): Promise<Band> {
    try {
      const result = await this.getConnection()
      .select("*")
      .from(BandDatabase.TABLE_NAME)
      .where({ id })

      return Band.toBandModel(result[0])

    } catch (error) {
      throw new NotFoundError("Band not found")
    }
  }

  public async getBandByName(name: string): Promise<Band> {
    try {
      const result = await this.getConnection()
      .select("*")
      .from(BandDatabase.TABLE_NAME)
      .where({ name })

      return Band.toBandModel(result[0])

    } catch (error) {
      throw new NotFoundError("Band not found")
    }
  }
}