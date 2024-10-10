const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    active: Boolean
  }
  
  input NewUserInput {
    name: String!
    email: String!
    password: String!
    walletAddress: String
  }

  input UpdateUserInput {
    name: String!
    email: String!
    password: String!
    walletAddress: String
  }

  type Query {
    user: User
    users: [User]
  }

  type Mutation {
    createUser(input: NewUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): String
  }
`;

export default typeDefs;
