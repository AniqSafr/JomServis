const mongoose = require("mongoose");

const carDetailsSchema = new mongoose.Schema({
    carPlateNo: { type: String, required: true },
    carBrand: { type: String, required: true },
    carModel: { type: String, required: true },
    carYear: { type: String, required: true }
}, { _id: false });

const appointmentSchema = new mongoose.Schema({
    selectedService: { type: String, required: true },
    serviceType: { type: String, required: true },  // Added serviceType field
    date: { type: Date, required: true },
    time: { type: String, required: true },
    carDetails: { type: carDetailsSchema, required: true },
    currentUser: {
        type: {
            _id: mongoose.Schema.Types.ObjectId,
            fname: String,
            email: String
        },
        ref: 'userDetails',
        required: true
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
