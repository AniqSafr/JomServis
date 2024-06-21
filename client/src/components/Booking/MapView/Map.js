import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import CustomMarker from "./user2.png";
import { useNavigate } from "react-router-dom";
import './Map.css';

const Map = (props) => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null); // State to track which marker is selected
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
      mapRef.current.setCenter({
        lat: userLocation.latitude,
        lng: userLocation.longitude,
      });
      mapRef.current.setZoom(15);
    }
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
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
      name: "Sime Darby Auto Selection, Balakong",
      location: {
        lat: 3.027623326187986,
        lng: 101.75320028470553,
      },
    },
    {
      name: "Sime Darby Auto Import, Shah Alam",
      location: {
        lat: 3.091791959840775,
        lng: 101.57304864287077,
      },
    },
    {
      name: "Sime Darby Auto Hyundai, Ara Damansara",
      location: {
        lat: 3.12000079739564,
        lng: 101.56968523394795,
      },
    },
    {
      name: "Sime Darby Motor Division Sdn, Bhd, Jalan Tun Razak",
      location: {
        lat: 3.1666127267457345,
        lng: 101.71677294321128,
      },
    },
    {
      name: "Sime Darby Motor Division, Bukit Bintang",
      location: {
        lat: 3.1504887733690747,
        lng: 101.70687950905283,
      },
    },
    {
      name: "Sime Darby Auto Selection TREC",
      location: {
        lat: 3.1469362440250217,
        lng: 101.7218146521597,
      },
    },
  ];

  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/service-options");
  };

  return (
    isLoaded &&
    userLocation && (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={handleMapLoad}
        >
          <MarkerF
            position={center}
            options={{
              icon: {
                url: CustomMarker,
                scaledSize: new window.google.maps.Size(30, 30), // Adjusted size to make the icon smaller
              },
            }}
          />
          {markers.map((marker) => (
            <MarkerF
              key={marker.name}
              position={marker.location}
              onClick={() => setSelectedMarker(marker)} // Set the selected marker when clicked
            />
          ))}

          {selectedMarker && (
            <InfoWindowF
              position={selectedMarker.location}
              onCloseClick={handleInfoWindowClose} // Close the InfoWindow when the close button is clicked
              options={{ disableAutoPan: true }} // This option prevents automatic panning when the InfoWindow opens
            >
              <div>
                <h2>{selectedMarker.name}</h2>
                <p>Latitude: {selectedMarker.location.lat}</p>
                <p>Longitude: {selectedMarker.location.lng}</p>
                <button
                  onClick={handleContinue}
                  className="continue-button"
                  disabled={!center}
                >
                  Select
                </button>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
        <button
          onClick={panToUserLocation}
          style={{ display: "block", margin: "20px auto" }}
        >
          Find My Location
        </button>
      </>
    )
  );
};

export default Map;
