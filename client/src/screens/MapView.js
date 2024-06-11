import React from "react";
import Map from "../components/Booking/MapView/Map";
import { mapOptions } from "../components/Booking/MapView/MapConfiguration";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import UserLocation from "../components/Booking/MapView/UserLocation";
import Navbar from "../components/HomePage/Navbar";

function MapView() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  return (
    <div className="MapView">
      <Navbar />
      <h1>JomServis AutoMobile Center </h1>
      <Map isLoaded={isLoaded} />
      {/* <UserLocation /> */}
    </div>
  );
}

export default MapView;
