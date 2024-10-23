"use strict";
import mongoose from 'mongoose';
import {qaAnswerScoresSchema} from "./qaAnswerScoreSchema.js";
const qaanswerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    },
    text: {
        type: String
    },
    date: {
        type: Date
    },
    scoresId: {
        //type : qaAnswerScoresSchema
        type: mongoose.Types.ObjectId, ref: 'QAAnswerScores'
    },
    totalScorer: {
        type: Number
    },
    totalScore: {
        type: Number
    }
});
//exports.qaanswerSchema = qaanswerSchema;
const qaanswerSetSchema = new mongoose.Schema({
    post: {
        type: mongoose.Types.ObjectId, ref: 'QAPosts'
    },
    answers: {
        type: [mongoose.Types.ObjectId], ref: 'QAAnswers'
    }
});
//exports.qaanswerSetSchema = qaanswerSetSchema;
export default mongoose.models.QAAnswerModel || mongoose.model('QAAnswer', qaanswerSchema);

//export { qaanswerSetSchema, qaanswerSchema };
