import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
})


const getActorById = async (id: string): Promise<void> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor 
      WHERE id = '${id}'
    `)
      
    console.log(result[0])
  } catch (error) {
    console.log(error)
  }
}

//console.log(getActorById("003"))


const searchActor = async (name: string): Promise<void> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor 
      WHERE name = "${name}"
    `)
    console.log(result[0]) 
  } catch (error) {
    console.log(error)
  }
}

//console.log(searchActor("Tony Ramos"))


const countActors = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT COUNT(*) as count 
      FROM Actor 
      WHERE gender = "${gender}"
    `)
    
    console.log(result[0])
    return result[0]
      
  } catch (error) {
    console.log(error)  
  }
}

//console.log(countActors("male"))


const updateActor = async (id: string, salary: number): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        salary
    })
      .where("id", id)
    
    console.log("Sucesso!")    
  } catch (error) {
    console.log(error)
  }
}

//console.log(updateActor("003", 800000))


const deleteActor = async (id: string): Promise<void> => {
  try {
    await connection("Actor")
      .delete()
      .where("id", id)
      
    console.log("Sucesso!")    
  } catch (error) {
    console.log(error)
  }
}

//console.log(deleteActor("004"))


const avgSalary = async (gender: string): Promise<void> => {
  try {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender })
     
    console.log(result)  
  } catch (error) {
    console.log(error)
  }
}

//console.log(avgSalary("male"))



const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})


app.get("/actor/:gender", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.params.gender as string);
    res.status(200).send({quantity: count})
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})


app.post("/actor", async (req: Request, res: Response) => {
  try {
    const actorData = {
      id: req.body.id, 
      salary: req.body.salary
    }
    
    await updateActor(req.body.id, req.body.salary)
      res.status(200).send({
        message: "Success",
      })
    } catch (err) {
      res.status(400).send({
        message: err.message,
      })
    }
})


app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id)
    res.status(200).send({message: "Sucess"})
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})


const createMovie = async (
  id: string,
  name: string,
  sinopse: string,
  releaseDate: Date,
  playingLimitDate: Date
) => {
  await connection
    .insert({
      id,
      name,
      sinopse,
      release_date: releaseDate,
      playing_limit_date: playingLimitDate,
    })
    .into("Movies");
}

app.post("/movies", async (req: Request, res: Response) => {
  try {
    const movieData = {
      id: req.body.id, 
      name: req.body.name,
      sinopse: req.body.sinopse,
      releaseDate: req.body.releaseDate,
      playingLimitDate: req.body.playingLimitDate
    }

    await createMovie(
      req.body.id,
      req.body.name,
      req.body.sinopse,
      req.body.releaseDate,
      req.body.playingLimitDate
    )
  
    res.status(200).send({
      message: "Success"
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})


const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movies LIMIT 15
  `)
  
  return result[0];
}

app.get("/movies", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();
 
    res.status(200).send({
      movies: movies,
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})


const searchMovie = async (name: string): Promise<any> => {
    try {
      const result = await connection.raw(`
        SELECT * FROM Movies
        WHERE name LIKE "${name}" OR
        sinopse LIKE "${name}"
      `)

      return result[0] 
    } catch (error) {
      console.log(error)
    }
  }

app.get("/movies/search", async (req: Request, res: Response) => {
  try {
    //const movies = await searchMovie(req.query.name)
  
    res.status(200).send({
      //movies: movies
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})