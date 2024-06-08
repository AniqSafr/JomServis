import React, { useState, useEffect } from "react";

const UserLocation = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "317122b5dcfe35d498218d829a5b571a"; // Replace with your actual API key

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            setError("Unable to retrieve your location");
            console.error("Error getting location:", error);
          }
        );
      } else {
        setError("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  }, []); // Empty dependency array to run the effect only once on mount

  useEffect(() => {
    if (location) {
      const fetchWeatherData = async () => {
        const { latitude, longitude } = location;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setWeather(data);
        } catch (error) {
          setError("Unable to fetch weather data");
          console.error("Error fetching weather data:", error);
        }
      };

      fetchWeatherData();
    }
  }, [location, apiKey]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!location || !weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Location</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <h2>Weather Data</h2>
      <p>City: {weather.name}</p>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Description: {weather.weather[0].description}</p>
    </div>
  );
};

export default UserLocation;
