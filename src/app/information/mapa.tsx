import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import Link from "next/link";

export default function Map() {
  const center = { lat: -22.523965275093655, lng: -41.939493840902806 }; // Coordenadas da localização da loja , -,
  const marker = {
    geocode: { lat: -22.523965275093655, lng: -41.939493840902806 },
    popUp: (
      <div>
        <h6>Elegance Rommanel</h6>
        <p>
          Rod. Amaral Peixoto, 5231 - Centro <br />
          Rio das Ostras - RJ <br />
          28890-000 <br />
          Brasil
        </p>
        <Link href="https://maps.google.com/maps?ll=-22.523965,-41.939494&z=20&t=m&hl=pt-BR&gl=US&mapclient=apiv3&cid=7967111427536696554">
          Visualize no Google Maps
        </Link>
      </div>
    ),
  };
  const customIcon = new Icon({
    iconUrl: "https://freesvg.org/img/map-pin.png",
    iconSize: [40, 40],
  });
  return (
    <MapContainer center={center} zoom={50} style={{ position: "sticky" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={marker.geocode} icon={customIcon}>
        <Popup>{marker.popUp}</Popup>
      </Marker>
    </MapContainer>
  );
}
