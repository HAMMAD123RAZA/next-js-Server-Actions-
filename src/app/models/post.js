import mongoose from "mongoose";

const userSchema = mongoose.Schema({   
    title: { type: String, required: true },
    body: { type: String, required: true },
})

// Check if the model already exists
const postModelExists = mongoose.models['post'];

// If the model doesn't exist, create it
const post = postModelExists || mongoose.model('post', userSchema);

export default post;
