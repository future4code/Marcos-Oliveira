import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq"

  public async registerUser (
    id: string, 
    name: string, 
    email: string, 
    password: string,
    role?: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          email,
          password,
          role
        }).into(UserDatabase.TABLE_NAME);
  
      await BaseDatabase.destroyConnection()
      
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select('*')
        .from(UserDatabase.TABLE_NAME)
        .where({ email });

      await BaseDatabase.destroyConnection()
      
      return result[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUsers(): Promise<any[]> {
    try {

      const users: any = [];

      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME);

      for(let user of result){
        users.push(user);
      }

      await BaseDatabase.destroyConnection()

      return users;

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }    
  }

  public async deleteUser (id: string): Promise<void> {
    try {
      await this.getConnection()
        .delete()
        .from(UserDatabase.TABLE_NAME)
        .where({ id })
        
      await BaseDatabase.destroyConnection()   
       
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
    
  } 
  
}
