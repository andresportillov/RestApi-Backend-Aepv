import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/resolver';

const typeDefs = `
    
    scalar ISODate

    type User {
        _id: ID
        firstname: String
        lastname: String
        age: String
        email: String
        occupation: String
        password: String
    } 
    type Post {
        _id: ID
        message: String
        userId: String
        posted: ISODate
    }
    input UserInput {
        firstname: String!
        email: String!
        lastname: String
        age: String
        occupation: String
        password: String!
    }
    input UserFilter {
        _id: ID
        isOnline: Boolean
        firstname: String
        email: String
        password: String
    }
    input PostFilter {
        _id: ID
        message: String
        userId: String
    }
    input PostInput {
        message: String!
        userId: String
    }
    type Query {
        Users(data: UserFilter): [User]
        Posts(data: PostFilter): [Post]
    }
    type Mutation {
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
        createPost(input: PostInput): Post
        deletePost(_id: ID): Post
        updatePost(_id: ID, input: PostInput): Post
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});