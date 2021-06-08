import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { gql, ApolloServer } from "apollo-server";

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(3000, () =>
  console.log("Server is running at http://localhost:3000 😎")
);
