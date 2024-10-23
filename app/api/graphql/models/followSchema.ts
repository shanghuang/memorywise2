"use strict";
import mongoose from 'mongoose';
let followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    },
    followee: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    }
});

export default mongoose.models.FollowModel || mongoose.model('Follow', followSchema);

//export {followSchema};