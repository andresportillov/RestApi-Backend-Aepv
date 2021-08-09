import User from "../models/user";
import Post from "../models/post";
import { generateId } from '../lib/lib';
import { GraphQLDateTime } from 'graphql-iso-date';

export const resolvers = {
    Query: {
        Users: async(data) => {
            const query = {};
            console.log('data: ', data);
            if (data) {
                const { _id, isOnline, email, password } = data;
                if (_id) query._id = _id;
                if (isOnline) query.isOnline = isOnline;
                if (email) query.email = email;
                if (password) query._id = password;
            }
            const Users = await User.find(query);
            return Users
        },
        Posts: async() => {
            const query = {};
            const Posts = await Post.find(query).sort({ posted: -1 });
            return Posts
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            input._id = generateId(18);
            const newUser = new User(input);
            await newUser.save();
            console.log('User Created');
            return newUser
        },
        async deleteUser(_, { _id }) {
            try {
                console.log('User Deleted');
                return await User.findOneAndDelete(_id);
            } catch (e) {
                console.log(e);
            }
        },
        async updateUser(_, { _id, input }) {
            try {
                console.log(_id);
                return await User.findOneAndUpdate(_id, input, { new: true })
            } catch (e) {
                console.log(e);
            }
        },
        async createPost(_, { input }) {
            try {
                input._id = generateId(18);
                const newPost = new Post(input);
                await newPost.save();
                console.log('Post Created');
                return newPost
            } catch (e) {
                console.log(e);
            }
        },
        async deletePost(_, { _id }) {
            try {
                console.log('Post Deleted');
                return await Post.findOneAndDelete(_id);
            } catch (e) {
                console.log(e);
            }
        },
        async updatePost(_, { _id, input }) {
            try {
                console.log('Post Updated');
                return await Post.findOneAndUpdate(_id, input, { new: true })
            } catch (e) {
                console.log(e);
            }
        }
    },
    ISODate: GraphQLDateTime
};