import { GoogleMap, Marker, useLoadScript, InfoWindowF } from '@react-google-maps/api';
import { useState } from 'react';
import Link from 'next/link'

const Map: React.FC = () => {
  const center = { lat: -22.523965275093655, lng: -41.939493840902806 }; // Coordenadas da localização da loja , -, 
  const zoom = 18; // Nível de zoom do mapa

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Sua chave de API do Google Maps
  });

  const [selected, setSelected] = useState(false);

  if (loadError) {
    return <div>Error loading map</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '500px', borderRadius: '5px' }}
      center={center}
      zoom={zoom}
    >
      <Marker 
      position={center} 
      title="Localização da loja" 
      animation={google.maps.Animation.DROP}
      onClick={()=>{
        setSelected(!selected);
      }}
      /> {/* Marcador na localização da loja */}
    
    {selected ? (<InfoWindowF
      position={center}
      zIndex={1}
      options={{
        pixelOffset: {
          width:0,
          height:-40,
        }
      }}
    >
      <div>
        <h6>Elegance Rommanel</h6>
        <p>
          Rod. Amaral Peixoto, 5231 - Centro <br/>
          Rio das Ostras - RJ <br/>
          28890-000 <br/>
          Brasil
        </p>
        <Link 
        href='https://maps.google.com/maps?ll=-22.523965,-41.939494&z=20&t=m&hl=pt-BR&gl=US&mapclient=apiv3&cid=7967111427536696554'
        >Visualize no Google Maps</Link>
      </div>
    </InfoWindowF>) : null}
    </GoogleMap>
  );
};

export default Map;