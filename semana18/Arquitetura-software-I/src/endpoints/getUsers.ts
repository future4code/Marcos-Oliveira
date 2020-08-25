import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export const getUsers = async (req: Request, res: Response) => {
  
  try {
    const token = req.headers.authorization as string
      
    const userBusiness = new UserBusiness()
    const user = await userBusiness.getUsers(token)

    res.status(200).send(user)
      
  } catch (error) {
    res.send({ message: error.message }).status(error.status)
  }
}