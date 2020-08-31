import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export const signUp = async (req: Request, res: Response) => {

  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    const userBusiness = new UserBusiness();
    const token = await userBusiness.signUp(name, email, password, role);

    res.status(200).send({
      message: 'Usuário criado com sucesso',
      token
    });

  } catch (e) {
    res.status(400).send({
      message: e.message
    })
  }
};