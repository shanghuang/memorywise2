// MongoDB Data Source for Users
import CommentsModel from "../models/commentsSchema";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

interface CommentsDocument {
  _id: ObjectId;
  userName: string;
  password: string;
  email: string;
  //interests: [string];
}

export default class CommentsDS extends MongoDataSource<CommentsDocument> {
  
  // Function to get user
  async getComments(id:string) {
    try {
      return await CommentsModel.find({_id: id});
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }


  // Function to create a new user
  async addComment({comment}: any) {
    try {
        console.log("Creating new comment(datasources):"); console.log(comment);
        //console.log("Creating new user(datasources):" + {...input}  );
        const parentComments = comment.parent;
        const emptyComments = await CommentsModel.create({ comments : [] });
        const commentAppended = {...comment, comments: emptyComments};
        const res = await CommentsModel.findOneAndUpdate(
            { _id: parentComments }, 
            { $push: { comments: commentAppended } }
        );
        console.log("addComment result:" + res);
        return res;
        //return await PostModel.create({ ...post });
    } catch (error) {
      throw new Error("Failed to create comment"); 
    }
  }

  // Function to update existing user
  async queryComments( input : any) {
    try {
      console.log("queryPost :"); console.log(input); 
      console.log("queryPost(datasources):" + input.keyword);
      const foundPosts = await CommentsModel.find(
        { keyword: input.keyword}
      );
      return foundPosts;
    } catch (error) {
      throw new Error("Failed to query post");
    }
  }

  async queryCommentsById( input : any) {
    try {
      console.log("queryCommentsById :");  console.log(input); 
      console.log("queryCommentsById(datasources):" + input.id);
      const foundComments = await CommentsModel.findOne(
        { _id: input.id}
      );
      console.log("foundComments:"); console.log(foundComments?.comments);
      return foundComments?.comments;
    } catch (error) {
      throw new Error("Failed to query post");
    }
  }


  // Function to update existing user
  async updateComment({ input }: any) {
    try {
      const updatedUser = await CommentsModel.findByIdAndUpdate(
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
  async deleteComment({ id }: { id: string }): Promise<string> {
    try {
      await CommentsModel.findByIdAndDelete(id);
      return "User deleted successfully";
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
}
