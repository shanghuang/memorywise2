// MongoDB Data Source for Users
import UserModel from "../models/userSchema";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

interface UserDocument {
  _id: ObjectId;
  userName: string;
  password: string;
  email: string;
  //interests: [string];
}

export default class Users extends MongoDataSource<UserDocument> {
  
  // Function to get user
  async getUser(name:string) {
    try {
      return await UserModel.find({name: name});
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }

  // Function to fetch all users
  async getAllUsers() {
    try {
      return await UserModel.find();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }

  // Function to create a new user
  async createUser({ input }: any) {
    try {
      //console.log("Creating new user(datasources):" + input.name  );
      //console.log("Creating new user(datasources):" + {...input}  );
      return await UserModel.create({ ...input });
    } catch (error) {
      throw new Error("Failed to create user"); 
    }
  }

  // Function to update existing user
  async findUserByEmail({ input }: any) {
    try {
      console.log("findUserByEmail userModel:" + UserModel);  
      console.log("findUserByEmail(datasources):" + input.email);
      const foundUser = await UserModel.findOne(
        input.email
      );
      return foundUser;
    } catch (error) {
      throw new Error("Failed to find user");
    }
  }

  // Function to update existing user
  async updateUser({ input }: any) {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
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
  async deleteUser({ id }: { id: string }): Promise<string> {
    try {
      await UserModel.findByIdAndDelete(id);
      return "User deleted successfully";
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
}
