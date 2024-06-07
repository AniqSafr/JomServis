import Navbar from "../components/HomePage/Navbar";
import ServiceRepairOption from "../components/Booking/ServiceRepairOption";

function BookingServiceRepairOption(){
    return (
        <div className="BookingServiceLocation">
            <Navbar />
            <div className="InSiteServiceLocation">
                <ServiceRepairOption />
            </div>
        </div>
    );
}

export default BookingServiceRepairOption;