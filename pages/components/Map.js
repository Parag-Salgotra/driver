import react from 'react'
 import { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  `pk.eyJ1IjoicHNhbGdvdHJhIiwiYSI6ImNsdGFoc2ozeTA1aWEybGxyc3lpMzIweGEifQ.XOoMyeoSxD4HsnBM7QpM2w`


const Map = (props) => {
    useEffect(() => {
        const map  = new mapboxgl.Map({
          container: "map",
          style: `mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph`,
          center: [-99.29011, 39.39172],
          zoom: 3,
        });

        if(props.pickUpCoordinates){
            addToMap(map, props.pickUpCoordinates)
        }
        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates)
        }

        if(props.pickUpCoordinates && props.dropoffCoordinates){
            map.fitBounds([props.pickUpCoordinates, props.dropoffCoordinates],{
                padding: 60
            })
        }
        
      }, [props.pickUpCoordinates, props.dropoffCoordinates]);

      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
      }

    return <Wrapper id = 'map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
h-screen
relative
z-0
`