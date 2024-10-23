"use strict";
import mongoose from 'mongoose';
const qapostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId, ref: 'Users'
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
    answers: {
        type: mongoose.Types.ObjectId, ref: 'QAAnswers'
    }
});

export default mongoose.models.QAPostModel || mongoose.model('QAPost', qapostSchema);

//export {qapostSchema}