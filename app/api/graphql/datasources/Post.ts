// MongoDB Data Source for Users
import Post from "@/app/components/PostQuery";
import PostModel from "../models/postSchema";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

interface PostDocument {
  _id: ObjectId;
  userName: string;
  password: string;
  email: string;
  //interests: [string];
}

export default class Posts extends MongoDataSource<PostDocument> {
  
  // Function to get user
  async getPost(name:string) {
    try {
      return await PostModel.find({name: name});
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }


  // Function to create a new user
  async createPost({post}: any) {
    try {
      console.log("Creating new post(datasources):"); console.log(post);
      //console.log("Creating new user(datasources):" + {...input}  );
      const res = await PostModel.create({ ...post });
      console.log("createPost result:" + res);
      return res;
      //return await PostModel.create({ ...post });
    } catch (error) {
      throw new Error("Failed to create post"); 
    }
  }

  // Function to update existing user
  async queryPosts( input : any) {
    try {
      console.log("queryPost :"); + console.log(input); 
      console.log("queryPost(datasources):" + input.keyword);
      const foundPosts = await PostModel.find(
        { keyword: input.keyword}
      );
      return foundPosts;
    } catch (error) {
      throw new Error("Failed to query post");
    }
  }

  // Function to update existing user
  async findPostByEmail({ input }: any) {
    try {
      console.log("findUserByEmail userModel:" + PostModel);  
      console.log("findUserByEmail(datasources):" + input.email);
      const foundUser = await PostModel.findOne(
        input.email
      );
      return foundUser;
    } catch (error) {
      throw new Error("Failed to find user");
    }
  }

  // Function to update existing user
  async updatePost({ input }: any) {
    try {
      const updatedUser = await PostModel.findByIdAndUpdate(
        input.id,
        { ...input },
        {
          new: true,
        }
      );
      return updatedUser;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }

  // Function to delete existing user
  async deletePost({ id }: { id: string }): Promise<string> {
    try {
      await PostModel.findByIdAndDelete(id);
      return "User deleted successfully";
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
}
