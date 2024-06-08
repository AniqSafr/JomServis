import Home from "./screens/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/RegisterPage/Register";
import UserDetails from "./components/userDetails";
import Test from "./components/Campaign/Card"
import Booking1 from './screens/Booking.js';
import Profile from "./screens/Profile.js"
import BookingServiceLocation from './screens/BookingServiceLocation.js';
import Inquiry from './components/Inquiry/Inquiry.js';
import Feedback from './components/Feedback/Feedback.js';
import MapView from "./screens/MapView.js"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Campaign from './screens/Campaign';
import BookingServiceRepairOption from './screens/BookingServiceRepairOption.js';
import BookingServiceAppointment from "./screens/BookingServiceAppointment.js";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
            exact
            path="/home"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/campaign" element={<Campaign/>}/>
          <Route path="/test" element={<Test />} />
          <Route path="/profile" element={<Profile />} />
          <Route path ="/booking" element ={<Booking1/>}/>
          <Route path = "/inquiries" element ={<Inquiry/>}/>
          <Route path="/feedback" element ={<Feedback/>}/>
          <Route path="/in-site-service-location" element={<BookingServiceLocation/>}/>
          <Route path="/service-options" element={<BookingServiceRepairOption/>}/>
          <Route path="/house-call-location" element={<MapView />} />
          <Route path="/book-appointment" element={<BookingServiceAppointment/>}/>
      </Routes>
    </BrowserRouter>
    
    
    
    </>

    
    

  );
}

export default App;
