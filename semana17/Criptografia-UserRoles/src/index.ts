import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/idGenerator";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { UserDatabase } from "./data/UserDatabase";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//********************************************************************** */

const myUser: UserDatabase = new UserDatabase();

//myUser.createUser(IdGenerator.generate(), "marcos@gmail.com", "123456")

//myUser.getUserByEmail("marcos@gmail.com")

//********************************************************************** */

app.post("/signup", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }
    

    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };

    const id = IdGenerator.generate();
    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(userData.password);

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, hashPassword, userData.role);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
      role: userData.role
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//********************************************************************** */

app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager();
    const compareResult = await hashManager.compare(
      userData.password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//********************************************************************** */

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.auth as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Unauthorized");
    }

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//********************************************************************** */

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.auth as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    await userDatabase.deleteUser(id);

    res.sendStatus(200)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.auth as string;

    const authenticator = new Authenticator();
    authenticator.getData(token);

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserById(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

});


/*
(async () => {
  console.log(await new HashManager().hash("bananinha"));
})();*/

