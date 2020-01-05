const resolvers = require('./resolver');
//const { makeExecutableSchema } = require('graphql-tools');

const usersAttribs = `
    id: ID
    nome: String!
    email: String!
    password: String!
`

module.exports = typeDefs = `
type users {
    ${usersAttribs}
}

type Query {
    getUser(id: ID!): users
    getUsers: [users]
}

input UserInput {
    ${usersAttribs}
}

type Mutation {
    createUser(input: UserInput): users
}
`

// module.exports = makeExecutableSchema({ 
//     typeDefs: typeDefs, 
//     resolvers
// });