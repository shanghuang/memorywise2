"use strict";
import mongoose from 'mongoose';
const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    },
    text: {
        type: String
    },
    date: {
        type: Date
    }
});
//exports.commentSchema = commentSchema;
const commentsSchema = new mongoose.Schema({
    post: {
        type: mongoose.Types.ObjectId, ref: 'Posts'
    },
    comments: {
        type: [commentSchema]
    }
});

export default mongoose.models.CommentsModel || mongoose.model('Comments', commentsSchema);
