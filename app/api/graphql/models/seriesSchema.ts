"use strict";
import mongoose from 'mongoose';
const seriesSchema = new mongoose.Schema({
    seriesName: {
        type: String
    },
    year: {
        type: Number
    },
    rating: {
        type: String
    }
});

export default mongoose.models.SeriesModel || mongoose.model('Series', seriesSchema);


//export { seriesSchema };