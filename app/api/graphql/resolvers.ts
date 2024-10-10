//import {bcrypt} from "bcrypt";
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    user: async (
      _: any,
      __: any,
      context: { dataSources: { user: { getUser: () => any } } }
    ) => {
      try {
        return await context.dataSources.user.getUser();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
    users: async (
      _: any,
      __: any,
      context: { dataSources: { users: { getAllUsers: () => any } } }
    ) => {
      try {
        return await context.dataSources.users.getAllUsers();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
  },
  Mutation: {
    createUser: async (_: any, { input }: any, context: any) => {
      try {
        //console.log("Creating new user:" + input.password);
        //console.log("bcrypt.hash:" + bcrypt.hash);
        const hashedPassword = await bcrypt.hash(input.password, 5);
        input.password = hashedPassword;
        //console.log("createUser (users):" + context.dataSources.users);
        const newUser = await context.dataSources.users.createUser({
          input,
        });
        return newUser;
      } catch (error) {
        throw new Error("Failed to create user");
      }
    },
    updateUser: async (_: any, { input }: any, context: any) => {
      try {
        return await context.dataSources.users.updateUser({ input });
      } catch (error) {
        throw new Error("Failed to update user");
      }
    },
    deleteUser: async (_: any, { id }: any, context: any) => {
      try {
        return await context.dataSources.users.deleteUser({ id });
      } catch (error) {
        throw new Error("Failed to delete user");
      }
    },
  },
};

export default resolvers;
