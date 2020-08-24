import { BaseDB } from "./BaseDatabase";

export class UserDatabase extends BaseDB {
  private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string,
    role?: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
        role
      })
    .into(UserDatabase.TABLE_NAME);
    
    await BaseDB.destroyConnection()
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    await BaseDB.destroyConnection()

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deleteUser(id: string): Promise<any> {
    await this.getConnection()
      .delete()
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    await BaseDB.destroyConnection()
  }
}