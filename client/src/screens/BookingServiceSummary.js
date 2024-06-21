import Navbar from "../components/HomePage/Navbar";
import ServiceSummary from "../components/Booking/ServiceSummary";
import Payment from "../components/Booking/Payment";

function BookingServiceSummary(){
    return (
        <div className="BookingServiceLocation">
            <Navbar />
            <div className="ServiceSummary">
                <ServiceSummary />
            </div>
            <div className="ServiceSummary pb-4">
                <Payment />
            </div>
        </div>
    );
}

export default BookingServiceSummary;