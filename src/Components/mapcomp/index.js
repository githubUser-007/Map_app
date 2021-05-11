import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './style.scss';

const center = [42.4464, -71.4594]

export default class Mapviewcomp extends React.Component{

    handlemarker = () => {
        let datas = [...this.props.citydetails];
        return datas.map((items,inx)=>{
            return(
                <Marker position={[items.latitude,items.longitude]}>
                <Popup>
                    {items["place name"]}
                </Popup>
              </Marker>
            )
        });
    }

    render(){
        console.log(this.props.citydetails);
        return(
            <>
            <div className="mapholder">
            <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.handlemarker()}
            </MapContainer>
            </div>
        </>
        )
    }
}