import { GoogleMap, Marker, useLoadScript, InfoWindow } from '@react-google-maps/api';

const Map: React.FC = () => {
  const center = { lat: -22.523965275093655, lng: -41.939493840902806 }; // Coordenadas da localização da loja , -, 
  const zoom = 15; // Nível de zoom do mapa

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Sua chave de API do Google Maps
  });

  if (loadError) {
    return <div>Error loading map</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '500px' }}
      center={center}
      zoom={zoom}
    >
      <Marker position={center} title="Localização da loja" animation={google.maps.Animation.DROP}/> {/* Marcador na localização da loja */}
    
    {/* Fazer infowindow */}
    
    </GoogleMap>
  );
};

export default Map;