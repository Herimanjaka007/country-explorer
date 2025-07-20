import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { Country } from '../types/country';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';


const DefaultIcon = L.icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});
interface MapViewProps {
    countries: Country[];
    onCountryClick: (country: Country) => void;
}

const MapView = ({ countries, onCountryClick }: MapViewProps) => {
    const defaultCenter: [number, number] = [20, 0];
    const defaultZoom: number = 2;

    return (
        <div className="h-[600px] w-full rounded-lg shadow-md overflow-hidden">
            <MapContainer
                center={defaultCenter}
                zoom={defaultZoom}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {countries.map(country => {
                    if (country.latlng && country.latlng.length === 2) {
                        const [lat, lng] = country.latlng;
                        return (
                            <Marker key={country.cca3}
                                icon={DefaultIcon}
                                position={[lat, lng]}
                                eventHandlers={{ click: () => onCountryClick(country) }}>
                                <Popup>
                                    <div className="font-bold text-lg">{country.name.common}</div>
                                    <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-16 h-auto mt-1 border border-gray-200" />
                                    <p className="text-sm mt-2">Click to see details</p>
                                </Popup>
                            </Marker>
                        );
                    }
                    return null;
                })}
            </MapContainer>
        </div>
    );
};

export default MapView;