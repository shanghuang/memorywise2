/*import { ApolloServer} from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

import resolvers from "./api/graphql/resolvers";
import typeDefs from './api/graphql/typeDefs';
*/

const { ApolloServer } = require('apollo-server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const resolvers = require('./api/graphql/resolvers');
const typeDefs = require('./api/graphql/typeDefs');

interface MyContext {
    token?: String;
  }
  
  //const server = new ApolloServer<MyContext>({ typeDefs, resolvers });
  const server = new ApolloServer({ typeDefs, resolvers });

  startStandaloneServer(server, {
    //context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: 4000 },
  })/*.then(({ url }) => {
    console.log("Server ready at " + url);
  }
);*/
  //console.log(`🚀  Server ready at ${url}`);