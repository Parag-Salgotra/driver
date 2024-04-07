import React from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map"
import { useEffect, useState } from "react";
import { accessToken } from "mapbox-gl";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {

    const router = useRouter();
    const { pickup, dropoff } = router.query;

    const  [pickUpCoordinates, setPickUpCoordinates] = useState();
    const  [dropoffCoordinates, setDropOffCoordinates] = useState();

    const getPickUpCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
             new URLSearchParams({
                access_token: 'pk.eyJ1IjoicHNhbGdvdHJhIiwiYSI6ImNsdGFoc2ozeTA1aWEybGxyc3lpMzIweGEifQ.XOoMyeoSxD4HsnBM7QpM2w',
                limit: 1 
            })
        )
        .then(response => response.json())
        .then(
            data => {
                setPickUpCoordinates(data.features[0].center);
            }
        )
    }

    const getDropOffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
             new URLSearchParams({
                access_token: 'pk.eyJ1IjoicHNhbGdvdHJhIiwiYSI6ImNsdGFoc2ozeTA1aWEybGxyc3lpMzIweGEifQ.XOoMyeoSxD4HsnBM7QpM2w',
                limit: 1 
            })
        )
        .then(response => response.json())
        .then(
            data => {
                setDropOffCoordinates(data.features[0].center);
            }
        )
    }

    useEffect( ()=>{
        getPickUpCoordinates(pickup);
        getDropOffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            < Map id ="map" 
            pickUpCoordinates = {pickUpCoordinates}
            dropoffCoordinates ={dropoffCoordinates} />
            <BackContainer>
                <Link href="/search"><Back src="./Icons/Arrow.png"/></Link> 
            </BackContainer>
            <RideContainer>
                <RideSelector/>
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm Uber X
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    );
}

export default Confirm;

const Wrapper = tw.div`
flex flex-col
h-screen
bg-white
text-black
`
const RideContainer = tw.div`
absolute bottom-10 right-10 left-10 z-10
bg-white rounded-lg
flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
p-2 border-t-2
`
const ConfirmButton = tw.div`
bg-black text-white mx-4 py-4 text-center
`
const Back = tw.img`
h-12
`
const BackContainer = tw.div`
absolute h-12 rounded-full
bg-white m-4
`