import { GraphQLServer } from "graphql-yoga";
import Query from './resolvers/Query'
import db from './db'
import Author from './resolvers/Author'
import Book from './resolvers/Book'
import Mutation from './resolvers/Mutation'

const resolvers = {
    Query,
    Author,
    Book,
    Mutation,
}

const context = {
  db
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context
});

server.start(() => console.log("server running on localhost:4000"));
