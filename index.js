const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require('./src/graphql/types/')
const resolvers = require('./src/graphql/resolvers/');

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`🚀  Apollo Server funcionando:  ${url}  🚀 🚀 🚀 🚀`);
})