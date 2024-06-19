const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    bookingId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Appointment', 
        required: true 
    },
    feedbackText: { 
        type: String, 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true 
    },
    user: {
        type: {
            _id: mongoose.Schema.Types.ObjectId,
            fname: String,
            email: String
        },
        ref: 'userDetails',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;