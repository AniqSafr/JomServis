const mongoose = require("mongoose");

const InquiriesSchema = new mongoose.Schema(
  {
    name: String,
    phoneNumber: String,
    email: String,
    carMaker: String,
    issues: String,
    description: String,
  },
  {
    collection: "Inquiries",
  }
);

mongoose.model("Inquiries", InquiriesSchema);
