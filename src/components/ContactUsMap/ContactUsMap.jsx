import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './contactUsMap.module.css';
import { useEffect } from 'react';

const customIcon = new L.Icon({
    iconUrl: './2e43ef7093427ceb8adf6de9dad09693.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -40],
});

// eslint-disable-next-line react/prop-types
const PopupOpener = ({ position }) => {
    const map = useMap();

    useEffect(() => {
        L.popup()
            .setLatLng(position)
            .setContent('Riyadh, Saudi Arabia')
            .openOn(map);
    }, [map, position]);

    return null;
};

export default function ContactUsMap() {
    return (
        <div className={`${styles.map_container}`}>
            <MapContainer
                center={[24.7136, 46.6753]}
                zoom={8}
                style={{ height: '500px', width: '100%' }}
                className={styles.contactMap}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[24.7136, 46.6753]} icon={customIcon} />
                {/* Automatically open popup */}
                <PopupOpener position={[24.9, 46.77]} />
            </MapContainer>
        </div>
    );
};
