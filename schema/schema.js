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
        isOnline: Boolean
    } 
    type Post {
        _id: ID
        message: String
        userId: String
        posted: ISODate
        user: User
    }
    input UserInput {
        firstname: String
        email: String
        lastname: String
        age: String
        occupation: String
        password: String
        isOnline: Boolean
    }
    input UserFilter {
        _id: ID
        firstname: String
        email: String
        password: String
        isOnline: Boolean
    }
    input PostFilter {
        _id: ID
        message: String
        userId: String
    }
    input PostInput {
        message: String!
        userId: String!
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
