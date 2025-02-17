const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
require('dotenv').config();

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

  const mongoUrl = process.env.MONGO_URL;
  
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((e) => console.log("MongoDB connection error:", e));

require("./userDetails");
require("./inquiries");
//require("./imageDetails");

const User = mongoose.model("UserInfo");
const Inquiry = mongoose.model("Inquiries");
//const Images = mongoose.model("ImageDetails");

app.post("/register", async (req, res) => {
  const { fname, lname, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.listen(5000, () => {
  console.log("Server Started");
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adarsh438tcsckandivali@gmail.com",
        pass: "rmdklolcsmswvyfw",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "thedebugarena@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});

app.get("/getAllUser", async (req, res) => {
  let query = {};
  const searchData = req.query.search;
  if (searchData) {
    query = {
      $or: [
        { fname: { $regex: searchData, $options: "i" } },
        { email: { $regex: searchData, $options: "i" } },
      ],
    };
  }

  try {
    const allUser = await User.find(query);
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    User.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/paginatedUsers", async (req, res) => {
  const allUser = await User.find({});
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results);
});



// Middleware to verify JWT token and get current user
const getCurrentUser = (req, res, next) => {
  // Get token from request headers
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Add the decoded user data to the request object
    req.currentUser = decoded;

    // Call the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Route to get current user data
app.get("/currentUser", getCurrentUser, async (req, res) => {
  try {
    // Get email from decoded token
    const email = req.currentUser.email;

    // Find user based on email
    const user = await User.findOne({ email });

    // Send user data as response
    res.json({ status: "ok", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/inquiries", async (req, res) => {
  const { name, phoneNumber, email, carMaker, issues, description } = req.body;

  try {
    await Inquiry.create({
      name,
      phoneNumber,
      email,
      carMaker,
      issues,
      description,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error", message: error.message });
  }
});

//Booking POST request
const bodyParser = require('body-parser');


const Appointment = require('./models/Appointment');


app.use(bodyParser.json());

app.post('/book', async (req, res) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1]; // Assuming token is stored in localStorage
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const { selectedService, serviceType, date, time, carDetails, currentUser } = req.body;

  try {
    // Validate that the user exists
    const user = await User.findById(currentUser._id);
    if (!user) {
      return res.status(404).send({ status: 'error', message: 'User not found' });
    }

    // Create a new appointment
    const appointment = new Appointment({
      selectedService,
      serviceType,  // Ensure serviceType is included here
      date,
      time,
      carDetails,
      currentUser
    });

    await appointment.save();

    res.send({ status: 'ok', appointment });
  } catch (error) {
    res.status(500).send({ status: 'error', message: error.message });
  }
});

// Route to get current user appointments
app.get("/getAllAppointments", async (req, res) => {
  let query = {};
  const searchData = req.query.search;
  
  if (searchData) {
    query = {
      "currentUser.email": { $regex: searchData, $options: "i" }
    };
  }

  try {
    const allAppointments = await Appointment.find(query);
    console.log("Appointments fetched:", allAppointments); // Debugging line
    res.send({ status: "ok", data: allAppointments });
  } catch (error) {
    console.error("Error fetching appointments:", error); // Improved error logging
    res.status(500).send({ status: "error", message: error.message });
  }
});

const Feedback = require('./Feedback');

// Route to handle feedback submission
app.post("/submitFeedback", getCurrentUser, async (req, res) => {
  const { bookingId, feedbackText, rating } = req.body;
  const currentUser = req.currentUser; // User data from decoded JWT

  try {
    // Validate that the booking exists
    const booking = await Appointment.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ status: "error", message: "Booking not found" });
    }

    // Create a new feedback entry
    const feedback = new Feedback({
      bookingId,
      feedbackText,
      rating,
      user: {
        _id: currentUser._id,
        fname: currentUser.fname,
        email: currentUser.email
      }
    });

    await feedback.save();

    res.json({ status: "ok", message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ status: "error", message: "Error submitting feedback" });
  }
});

// Route to fetch appointments with associated feedback for the current user
app.get("/getAllAppointmentsWithFeedback", getCurrentUser, async (req, res) => {
  try {
      const currentUserEmail = req.currentUser.email;
      const appointments = await Appointment.find({ "currentUser.email": currentUserEmail });

      // Map through appointments to check if feedback exists
      const appointmentsWithFeedback = await Promise.all(
          appointments.map(async (appointment) => {
              const feedback = await Feedback.findOne({ bookingId: appointment._id });
              return {
                  ...appointment.toObject(),
                  feedback: feedback ? { rating: feedback.rating } : null,
              };
          })
      );

      res.json({ status: "ok", data: appointmentsWithFeedback });
  } catch (error) {
      console.error("Error fetching appointments with feedback:", error);
      res.status(500).json({ status: "error", message: "Error fetching appointments with feedback" });
  }
});
