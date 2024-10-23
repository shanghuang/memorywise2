"use strict";
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    phone: {
        type: String
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    password:{
        type: String
    },
    age:{
        type: Number
    },
    introduction:{
        type: String
    },

    walletAddress: {
        type: String
    },
    
    privateKey:{
        type: String
    },

    coinName:{
        type: String
    },
    
    coinSymbol:{
        type: String
    },
});

export default mongoose.models.User || mongoose.model('User', userSchema);

//export { userSchema };