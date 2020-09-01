import { BaseDatabase } from "./BaseDatabase";
import moment from "moment";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = 'Posts';

  public async createPost(
    id: string, 
    photo: string,
    description: string,
    created_at: string,
    type: string,
    creatorId: string
  ): Promise<void> {
    const date = moment(created_at, "DD/MM/YYYY")

    await this.getConnection()
      .insert({
        id,
        photo_url: photo,
        description,
        created_at: date.format("YYYY-MM-DD"),
        type,
        user_id: creatorId
      }).into(PostDatabase.TABLE_NAME)

    await BaseDatabase.destroyConnection()
  }

  public async getPostById(postId: string): Promise<any> {
    const result = await this.getConnection().raw(`
      SELECT * FROM ${PostDatabase.TABLE_NAME}
      WHERE id = "${postId}"
    `)

    await BaseDatabase.destroyConnection()

    result[0].map((post: any) => {
      post.created_at = moment(post.created_at).format("DD/MM/YYYY")
    })

    return result[0][0]
  }

  public async deletePostById(id: string): Promise<any> {
    await this.getConnection()
      .del()
      .from(PostDatabase.TABLE_NAME)
      .where({ id })

    await BaseDatabase.destroyConnection()
  }
}
