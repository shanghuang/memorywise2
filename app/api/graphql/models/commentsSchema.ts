"use strict";
import mongoose from 'mongoose';
//import commentSchema from './commentSchema';

export const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    },
    username: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: Date
    },
    comments: {
        type: mongoose.Types.ObjectId, ref: 'Comments'
    },
});

const commentsSchema = new mongoose.Schema({
    parentPost: {
        type: mongoose.Types.ObjectId, ref: 'Comments'
    },
    parentComment: {    
        type: mongoose.Types.ObjectId, ref: 'Comment'
    },
    comments: {
        type: [commentSchema]
    }
});

export default mongoose.models.CommentsModel || mongoose.model('Comments', commentsSchema);