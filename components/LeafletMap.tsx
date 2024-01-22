import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {}

const LeafletMap: React.FC<LeafletMapProps> = () => {
  // Retrieve initial location from localStorage
  const initialLocation: [number, number] =
    JSON.parse(localStorage.getItem("clientLocation")) || [11.0706797, 76.9988557];
  const [clientLocation, setClientLocation] = useState<[number, number]>(initialLocation);
  const [manualLocation, setManualLocation] = useState<string>("");

  useEffect(() => {
    // Save the location to localStorage whenever it changes
    localStorage.setItem("clientLocation", JSON.stringify(clientLocation));
  }, [clientLocation]);

  const handleManualLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setManualLocation(event.target.value);
  };

  const handleSetLocation = () => {
    const [latitude, longitude] = manualLocation
      .split(",")
      .map((coord) => parseFloat(coord.trim()));
    if (!isNaN(latitude) && !isNaN(longitude)) {
      setClientLocation([latitude, longitude]);
    }
  };

  return (
    <div>
      {/* <div>
        <label htmlFor="manualLocation">Enter Manual Location (Latitude, Longitude):</label>
        <input
          type="text"
          id="manualLocation"
          value={manualLocation}
          onChange={handleManualLocationChange}
        />
        <button onClick={handleSetLocation}>Set Location</button>
      </div> */}
      <MapContainer
        center={clientLocation}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "50vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {clientLocation && (
          <Marker icon={L.icon({ iconUrl: "/img/marker-icon.png" })} position={clientLocation}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
        {/* Display coordinates in a popup when clicking on the map */}
        {clientLocation && (
          <Popup position={clientLocation}>
            Latitude: {clientLocation[0]} <br />
            Longitude: {clientLocation[1]}
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
