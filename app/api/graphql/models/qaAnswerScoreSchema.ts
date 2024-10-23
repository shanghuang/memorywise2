"use strict";
import mongoose from 'mongoose';

const qaAnswerScoreSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    },
    text: {
        type: String
    },
    score: {
        type: Number
    },
    date: {
        type: Date
    }
});
//exports.qaAnswerScoreSchema = qaAnswerScoreSchema;
const qaAnswerScoresSchema = new mongoose.Schema({
    qaAnswer: {
        type: mongoose.Types.ObjectId, ref: 'QAAnswer'
    },
    scores: {
        type: [qaAnswerScoreSchema]
    },
    totalscorer: {
        type: Number
    },
    totalscore: {
        type: Number
    }
});

export default mongoose.models.QAAnswerScoreModel || mongoose.model('QAAnswerScore', qaAnswerScoreSchema);

//export {qaAnswerScoreSchema, qaAnswerScoresSchema};