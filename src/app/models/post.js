import mongoose from "mongoose";

const userSchema = mongoose.Schema({   
    title: {type: String, required: true},
    body: {type: String, required: true},

})

const post = mongoose.model('post', userSchema);
export default post;