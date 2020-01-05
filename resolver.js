const db = require("./src/database/database");

module.exports = {
    Query: {
        async getUser(_, param) {
            return await db('users').where({ id: param.id }).first();
        },
        async getUsers() {
            return await db('users');
        }
    },
    Mutation: {
        async createUser(_, { input }){
            const result = await db('users').insert({
                nome: input.nome,
                email: input.email,
                password: input.password
            });
            const id = result[0];
            return await db('users').where({ id }).first();
        }
    }
}