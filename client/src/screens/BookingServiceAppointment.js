import Navbar from "../components/HomePage/Navbar";
import BookingAppointment from "../components/Booking/BookAppointment";

function BookingServiceAppointment(){
    return (
        <div className="BookingServiceAppointment">
            <Navbar />
            <div className="BookingServiceSummary">
                <BookingAppointment />
            </div>
        </div>
    );
}

export default BookingServiceAppointment;