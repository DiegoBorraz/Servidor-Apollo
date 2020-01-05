module.exports = `
    type users {
        id: ID
        nome: String!
        email: String!
        password: String!
    }

    type Query {
        getUser(id: ID!): users
        getUsers: [users]
    }

    input UserInput {
        id: ID
        nome: String!
        email: String!
        password: String!
    }

    type Mutation {
        createUser(input: UserInput): users
    }
`;
