import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/resolver';

const typeDefs = `
    type Query {
        Users: [User]
    }
    type User {
        _id: ID,
        firstname: String
        lastname: String
        age: Int
        occupation: String
    } 
    type Mutation {
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }
    input UserInput {
        firstname: String
        lastname: String
        age: Int
        occupation: String!
    }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
