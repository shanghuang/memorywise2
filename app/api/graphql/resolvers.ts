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
    queryPosts: async (_: any, { keyword }: any, context: any) => {
      console.log("resolvers.ts:queryPosts");
      try {
        console.log("Querying posts with keyword: ");  console.log(keyword);
        return await context.dataSources.posts.queryPosts({ keyword });
      } catch (error) {
        throw new Error("Failed to query posts");
      }
    },
    queryPostsById: async (_: any, { id }: any, context: any) => {
      try {
        return await context.dataSources.posts.queryPostById({ id });
      } catch (error) {
        throw new Error("Failed to query post by id");
      }
    },
  },
  Mutation: {
    createUser: async (_: any, { input }: any, context: any) => {
      try {
        console.log("Creating new user:" + input.userName);
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
    addPost: async (_: any, { post }: any, context: any) => {
      try {
        console.log("Creating new post:"); console.log(post);

        console.log("dataSources:"); console.log(context.dataSources.posts.createPost);
        const created = await context.dataSources.posts.createPost({
          post,
        });
        console.log("Created post:" + created);
        return created;
      } catch (error) {
        throw new Error("Failed to create post:" + error);
      }
    },

    
  },
};

export default resolvers;
