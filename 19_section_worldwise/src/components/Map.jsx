import { useEffect, useState } from 'react';
import styles from './Map.module.css';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents} from 'react-leaflet';
import { useCities } from '../contexts/CitiesContext';
import { useGeolocation } from '../hooks/useGeolocation';
import Button from '../components/Button';
import { useUrlPosition } from '../hooks/useUrlPosition';

const flagEmojiToPNG = (flag) => {
    let countryCode = 
        Array
           .from(flag, (codeUnit) => codeUnit.codePointAt())
           .map((char) => String.fromCharCode(char - 127397)
           .toLowerCase())
           .join("");
           
    return (
      <img 
        src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

const Map = () => {
    const { cities } = useCities();
    const [mapPosition, setMapPosition] = useState([40, 0]);
    const { 
        isLoading: isLoadingPosition,
        position: geolocationPosition,
        getPosition
    } = useGeolocation();
    
    const [mapLat, mapLng] = useUrlPosition();

    useEffect(() => {
       if (mapLat && mapLng) {
            setMapPosition([mapLat, mapLng]);
        }
    }, [mapLat, mapLng]);

    useEffect(() => {
        if (geolocationPosition) {
            setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
        }
    }, [geolocationPosition]);

    return (
        <div className={styles.mapContainer}>
            {!geolocationPosition && (
                <Button type='position' onClick={getPosition}>
                    {isLoadingPosition ? 'Loading...' : 'Use your position'}
                </Button>
            )}
            <MapContainer 
                // center={[mapLat, mapLng]}
                center={mapPosition} 
                zoom={6} 
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map((city ) => {
                    return (
                        <Marker 
                            position={[city.position.lat, city.position.lng]}
                            key={city.id}
                        >
                            <Popup>
                                <span>{flagEmojiToPNG(city.emoji)}</span>
                                <span>{city.cityName}</span>
                            </Popup>
                        </Marker>
                    )
                })}
                {/* <ChangeCenter position={[mapLat || 40, mapLng || 0]}/> */}
                <ChangeCenter position={mapPosition}/>
                <DetectClick />
            </MapContainer>
        </div>
    );
};

const ChangeCenter = ({ position }) => {
    const map = useMap();
    map.setView(position);
    return null;
};

const DetectClick = () => {
    const navigate = useNavigate();

    useMapEvents({
        click: (event) => {
            // console.log(event);
            navigate(`form?lat=${event.latlng.lat}&lng=${event.latlng.lng}`);
        },
    });
};

export default Map;