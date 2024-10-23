"use strict";

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    },
    ken3Amount: {
        type: String
    },
    ken5Amount: {
        type: String
    },
    receiverName: {
        type: String
    },
    receiverAddress: {
        type: String
    },
    receiverPhone: {
        type: String
    },
    totalPrice: {
        type: Number
    },
    date: {
        type: Date
    }
});

export default mongoose.models.OrderModel || mongoose.model('Order', orderSchema);

//export { orderSchema};