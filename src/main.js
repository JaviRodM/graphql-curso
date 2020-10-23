import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => 'Hola Mundo'
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start( () => console.log('server running on localhost:4000'));