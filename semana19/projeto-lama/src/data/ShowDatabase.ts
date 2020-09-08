import { BaseDatabase } from "./BaseDatabase";
import { Show } from "../model/Show";

export class ShowDatabase extends BaseDatabase {

  private static TABLE_NAME = "Shows";

  public async registerShow (
    id: string,
    weekDay: string,
    startTime: number,
    endTime: number,
    bandId: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          week_day: weekDay,
          start_time: startTime,
          end_time: endTime,
          band_id: bandId
        })
        .into(ShowDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getShowByDayAndStartTime(weekDay: string, startTime: number): Promise<Show | undefined> {
    const result = await this.getConnection()
    .select("*")
    .from(ShowDatabase.TABLE_NAME)
    .where({ week_day: weekDay })
    .andWhere({ start_time: startTime })

    if (result) {
      return Show.toShowModel(result[0]);
    }

    return undefined;
  }

  public async getShowByDay(weekDay: string) : Promise<Show | undefined> {
    const result = await this.getConnection().raw(`
      SELECT b.name, b.music_genre AS musicGenre
      FROM Band b
      JOIN ${ShowDatabase.TABLE_NAME} s
      ON b.id = s.band_id
      WHERE s.week_day = "${weekDay}"
      ORDER BY s.start_time
    `);

    if (result) {
      return result[0];
    }

    return undefined;
  }

}