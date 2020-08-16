import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import moment from "moment";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

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

/**************************************************************/

function generateId():string {
  return ( Date.now() + Math.random().toString() )
}


// EXERCÍCIO 1
const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  if (name || nickname || email !== "") {
    try {
      await connection
        .insert({
          id: generateId(),
          name,
          nickname,
          email
        })
        .into("TodoListUser");
    } catch (error) {
      console.log(error)
    }
  } else {
    throw new Error("Campos não preenchidos!")
  }
}

app.put("/user", async (req: Request, res: Response) => {
  try {
    await createUser(
      req.body.name,
      req.body.nickname,
      req.body.email
    )
  
    res.status(200).send({
      message: "Usuário criado com sucesso!"
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})

//****************************************************** */

// EXERCÍCIO 2
const getUserId = async (id: string): Promise<any> => {
  if (id !== "") {
    try {
      const result = await connection("TodoListUser")
        .select("*")
        .where({"id": id});
    
      return result
    } catch (error) {
      console.log(error)
    }
  } else {
    throw new Error("Id não informado!")
  }
}

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const user = await getUserId(req.params.id)
 
    res.status(200).send({
      user: user 
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})

//****************************************************** */

// EXERCÍCIO 3
const editUserId = async (
  id: string, 
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  if (id  || name || nickname || email !== "") {
    try {
      await connection("TodoListUser")
        .update({
          name,
          nickname,
          email
        })
        .where({"id": id})
    } catch (error) {
      console.log(error)
    }
  } else {
    throw new Error("Campos não preenchidos!")
  }
}

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const editUser = {
      id: req.params.id,
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email
    }

    await editUserId(
      req.params.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    )
  
    res.status(200).send({
      message: "Usuário atualizado com sucesso!"
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

//****************************************************** */

// EXERCÍCIO 4
const createTask = async (
  title: string,
  description: string,
  limitDate: moment.Moment = moment("DD/MM/YYYY"),
  creatorUserId: string,
): Promise<void> => {
  if (title || description || limitDate || creatorUserId !== "") {
    const date = moment(limitDate, "DD/MM/YYYY")
    try {
      await connection
        .insert({
          id: generateId(),
          title,
          description,
          limit_date: date.format("YYYY-MM-DD"),
          creator_user_id: creatorUserId
        })
        .into("TodoListTask");
    } catch (error) {
      console.log(error)
    }
  } else {
    throw new Error("Campos não preenchidos!")
  }
}

app.put("/task", async (req: Request, res: Response) => {
  try {
    await createTask(
      req.body.title,
      req.body.description,
      req.body.limitDate,
      req.body.creatorUserId
    )
  
    res.status(200).send({
      message: "Tarefa criada com sucesso!"
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})

//****************************************************** */

// EXERCÍCIO 5
const getTaskId = async (id: string): Promise<any> => {
  if (id !== "") {
    try {
      const result = await connection.raw(`
        SELECT 
          t.id AS taskId, 
          title,
          description,
          t.limit_date AS limitDate,
          status,
          t.creator_user_id AS creatorUserId,
          u.nickname AS creatorUserNickName
        FROM TodoListTask AS t
        INNER JOIN TodoListUser AS u
        ON t.creator_user_id = u.id
        WHERE t.id = "${id}"
      `)

      return result[0]
    } catch (error) {
      console.log(error)
    }
  } else if (id === ""){
    throw new Error("Id não informado!")
  }
}

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const task = await getTaskId(req.params.id)
    if (task[0].taskId) {
      task[0].limitDate = moment(task[0].limitDate).format("DD/MM/YYYY")
    
      res.status(200).send(task)
    } else {
      res.status(200).send({message: "Tarefa não encontrada"})
    }
     
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

//****************************************************** */

// EXERCÍCIO 6
const getAllUser = async (): Promise<any> => {
  try {
    const result = await connection("TodoListUser")
      .select("*")

    return result
  } catch (error) {
    console.log(error)
  }
}

app.get("/allUser", async (req: Request, res: Response) => {
  try {
    const users = await getAllUser()
 
    res.status(200).send({
      users: users
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

//****************************************************** */

// EXERCÍCIO 7
const getTaskUserCreatorId = async (query: string): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT  
        t.id AS taskId,
        title,
        description,
        t.limit_date AS limitDate,
        status,
        t.creator_user_id AS creatorUserId,
        u.nickname AS creatorUserNickName
      FROM TodoListTask AS t
      INNER JOIN TodoListUser AS u
      ON t.creator_user_id = u.id
      WHERE t.creator_user_id = '${query}'
    `)

    return result[0]
  } catch (error) {
    console.log(error)
  }
}

app.get("/task", async (req: Request, res: Response) => {
  try {
    const tasks = await getTaskUserCreatorId(req.query.creatorUserId as string)

    if (req.query.creatorUserId === "") {
      res.status(200).send({message: "Id não informado"})
    }

    tasks.map((item: any) => {
      item.limitDate = moment(item.limitDate).format("DD/MM/YYYY")
    })

    res.status(200).send(tasks)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

//****************************************************** */

// EXERCÍCIO 8
const searchUser = async (query: string): Promise<any> => {
  try {
    const result = await connection("TodoListUser")
      .select("id", "nickname")
      .where("name", "LIKE", `%${query}%`)
      .orWhere("nickname", "LIKE", `%${query}%`)
    
    return result
  } catch (error) {
    console.log(error)
  }
}

app.get("/user", async (req: Request, res: Response) => {
  try {
    const users = await searchUser(req.query.query as string)
  
    res.status(200).send({
      users: users
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})

//****************************************************** */

// EXERCÍCIO 9
const responsibleUserTask = async (
  id: string,
  responsible: string
): Promise<void> => {
  if (id || responsible !== "") {
    try {
      await connection
        .insert({
          task_id: id,
          responsible_user_id: responsible
        })
        .into("TodoListResponsibleUserTaskRelation")
    } catch (error) {
      console.log(error)
    }
  } else {
    throw new Error("Campos não preenchidos!")
  }
}

app.post("/task/responsible", async (req: Request, res: Response) => {
  try {
    const responsibleUser = {
      id: req.body.id, 
      responsible: req.body.responsible
    }

    await responsibleUserTask(
      req.body.id,
      req.body.responsible
    )
  
    res.status(200).send({
      message: "Sucesso!"
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})

//****************************************************** */
