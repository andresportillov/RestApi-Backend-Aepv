import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/graphqlTest', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Connect');
    } catch(e){
        console.log(e);
        
    }
}