import React, { useState, useEffect, useRef } from "react"; // Import React
import { GoogleMap, MarkerF } from "@react-google-maps/api";

const Map = (props) => {
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const panToUserLocation = () => {
    if (mapRef.current && userLocation) {
      mapRef.current.setCenter({ lat: userLocation.latitude, lng: userLocation.longitude });
      mapRef.current.setZoom(15);
    }
  };

  const { isLoaded } = props;

  const containerStyle = {
    width: "1000px",
    height: "600px",
    margin: "0 auto",
    display: "block",
    border: "2px solid black",
  };

  const center = {
    lat: userLocation?.latitude || 0,
    lng: userLocation?.longitude || 0,
  };

  const markers = [
    {
      name: "center-1",
      location: {
        lat: 2.9578,
        lng: 101.79,
      },
    },
    {
      name: "center-2",
      location: {
        lat: 3.1227,
        lng: 101.6409,
      },
    },
    {
      name: "center-3",
      location: {
        lat: 3.0315,
        lng: 101.7533,
      },
    },
  ];

  return (
    isLoaded &&
    userLocation && (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={(map) => (mapRef.current = map)}
        >
          <MarkerF position={center} color="blue" />
          {markers.map((marker) => (
            <MarkerF key={marker.name} position={marker.location} />
          ))}
        </GoogleMap>
        <button onClick={panToUserLocation} style={{ display: "block", margin: "20px auto" }}>
          Find My Location
        </button>
      </>
    )
  );
};

export default Map;
