import Navbar from "../components/HomePage/Navbar";
import InSiteServiceLocation from "../components/Booking/InSiteServiceLocation";

function BookingServiceLocation(){
    return (
        <div className="BookingServiceLocation">
            <Navbar />
            <div className="InSiteServiceLocation">
                <InSiteServiceLocation />
            </div>
        </div>
    );
}

export default BookingServiceLocation;