"use strict";
import mongoose from 'mongoose';
let feedSchema = new mongoose.Schema({
    receiver: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    },
    post: {
        type: mongoose.Types.ObjectId, ref: 'Posts'
    },
    date: {
        type: Date
    }
});

export default mongoose.models.FeedModel || mongoose.model('Feed', feedSchema);

//export { feedSchema};