import { startServerAndCreateNextHandler } from "@as-integrations/next";
import mongoose from "mongoose";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
//import typeDefs from "./schema";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import Users from "./datasources/User";
import User from "./models/userSchema";
import Post from "./models/postSchema";
import Posts from "./datasources/Post";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

console.log("graphql/resolver.ts");

const connectDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log("🎉 connected to database successfully");
    }
  } catch (error) {
    console.error(error);
  }
};

console.log("calling connectDB()" + uri);
connectDB();

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({
    req,
    res,
    dataSources: {
      users: new Users({ modelOrCollection: User }),
      posts: new Posts({ modelOrCollection: Post }),
    },
  }),
});
export async function GET(request: NextRequest) {
  return handler(request);
}
export async function POST(request: NextRequest) {
  return handler(request);
}
