"use strict";
import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    },
    username: {
        type: String
    },
    keyword: {
        type: String
    },
    text: {
        type: String
    },
    image: {
        type: String
    },
    date: {
        type: Date
    },
    comments:{
        type: mongoose.Types.ObjectId, ref: 'Comments' 
    }
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);

//export { postSchema};