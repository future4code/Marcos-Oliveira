import {Request, Response} from "express";
import { UserBusiness } from "../business/UserBusiness";

export const deleteUser = async (req: Request, res: Response) => {
       
  try {

    const input = {
      id: req.params.id,
      token: req.headers.authorization as string
    }

    const userBusiness = new UserBusiness();
            
    await userBusiness.deleteUser(input);

    res.status(200).send({ message: "Usuário apagado com sucesso" });

  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};