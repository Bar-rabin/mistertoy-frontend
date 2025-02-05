
import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

export function ToyShops() {
    const [center, setCenter] = useState({ lat: 32.109333, lng: 34.855499 })
    const zoom = 11
    const SHOP1 = { lat: 32.11116869763355, lng: 34.79713413183594 }
    const SHOP2 = { lat: 32.14705734634284, lng: 34.88777133886719 }


    function onHandleClick({ lat, lng }) {
        // console.log('Click', ev)
        // console.log('lat,lng:', lat, lng)
        setCenter({ lat, lng })
    }


    return (
        <section>
            <button onClick={() => onHandleClick({ ...SHOP1 })}>Ramt Aviv</button>
            <button onClick={() => onHandleClick({ ...SHOP2 })}>Hod Hasharon</button>

            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyA5YAKbctMWmj2etXv-KY7MSXDMGaWr0qs" }}
                    // defaultCenter={center}
                    center={center}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        // lat={center.lat}
                        // lng={center.lng}

                        {...center}
                        text="📍"
                    />
                </GoogleMapReact>
            </div>
        </section>
    );
}

const AnyReactComponent = ({ text }) => <div style={{ fontSize: '22px' }}>{text}</div>;
