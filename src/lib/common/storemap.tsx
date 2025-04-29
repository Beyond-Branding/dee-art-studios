// src/components/StoreMap.jsx
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function StoreMap() {
  useEffect(() => {
    const map = L.map("map", {
      scrollWheelZoom: false,
    }).setView([53.52305037381912, -113.622746812808], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([53.52305037381912, -113.622746812808])
      .addTo(map)
      .bindPopup(
        `
         <a href="https://maps.app.goo.gl/REPiWYVimuy2B5XP7" target="_blank" rel="noopener noreferrer">
            Deee's Art Studios (Open in Maps)
        </a>`
      )
      .openPopup();
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
}
