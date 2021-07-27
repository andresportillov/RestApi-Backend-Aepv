import { Schema, model, version } from "mongoose";

const userSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String,},
    age: Number,
    occupation: {type: String, required: true}
},{
versionKey: false
});

export default model('User', userSchema)