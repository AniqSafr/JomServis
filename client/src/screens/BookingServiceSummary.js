import Navbar from "../components/HomePage/Navbar";
import ServiceSummary from "../components/Booking/ServiceSummary";

function BookingServiceSummary(){
    return (
        <div className="BookingServiceLocation">
            <Navbar />
            <div className="ServiceSummary">
                <ServiceSummary />
            </div>
        </div>
    );
}

export default BookingServiceSummary;