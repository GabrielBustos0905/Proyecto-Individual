import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Popup } from "react-leaflet";
import 'leaflet/dist/Leaflet.css';
import './MapViews.css'

const MapViews = ({coords, name}) => {
    // console.log(coords)
    const position = coords
    return (
        <div>
            <MapContainer center={position} zoom={0} scrollWheelZoom={true}>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <p>{name}</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
};

export default MapViews;