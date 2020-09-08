import dotenv from "dotenv";
import { PostDatabase } from "../src/data/PostDatabase";

dotenv.config()

describe ("Post creation test", () => {
  const newPost = new PostDatabase();
    
  afterAll (async () => {
    await newPost.deletePostById("0015652");
  })

  test("Create Post", async () => {
    const post = {
      id: "0015652", 
      photo: "Url da foto",
      description: "Viagem para o Caribe",
      created_at: "31/08/2020",
      type: "NORMAL",
      userId: "a6c92a14-ac9c-4220-87e2-c7279e732928"
    };

    await newPost.createPost(
      post.id, 
      post.photo, 
      post.description,
      post.created_at,
      post.type, 
      post.userId
    );  
    const postFromDb = await newPost.getPostById(post.id);
    
    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
      id: "0015652", 
      photo_url: "Url da foto",
      description: "Viagem para o Caribe", 
      created_at: "31/08/2020",
      type: "NORMAL",
      user_id: "a6c92a14-ac9c-4220-87e2-c7279e732928"
    });
  });

  test("Testing duplicate post", async () => {
    expect.assertions(1)

    try {
      const post = {
        id: "009980802", 
        photo: "Url da foto",
        description: "Viagem para as Bahamas",
        created_at: "30/11/2020",
        type: "NORMAL",
        userId: "a6c92a14-ac9c-4220-87e2-c7279e732928"
      };
      
      await newPost.createPost(
        post.id, 
        post.photo, 
        post.description,
        post.created_at,
        post.type, 
        post.userId
      ); 

      await newPost.createPost(
        post.id, 
        post.photo, 
        post.description,
        post.created_at,
        post.type, 
        post.userId
      ); 
    } catch (err) {
      expect(err).not.toBe(undefined)
    }
  });

})