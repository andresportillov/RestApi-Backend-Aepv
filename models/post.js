import { Schema, model, version } from "mongoose";

const postSchema = new Schema({
    _id: { type: String, required: true },
    message: { type: String, required: true },
    userId: { type: String },
    posted: { type: Date, default: Date.now }
}, {
    versionKey: false,
    _id: false
});

export default model('Post', postSchema)
