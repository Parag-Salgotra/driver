import React from "react";
import tw from "tailwind-styled-components";
import Map from "./Map"
import { carList } from "../../public/data/carList";
import { useEffect, useState } from "react";

const RideSelector = ({pickUpCoordinates, dropoffCoordinates}) => {
    const [rideDuration, setRideDuration] = useState(0); 
    
    useEffect(()=> {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoicHNhbGdvdHJhIiwiYSI6ImNsdGFoc2ozeTA1aWEybGxyc3lpMzIweGEifQ.XOoMyeoSxD4HsnBM7QpM2w`)
        .then(res => res.json())
        .then(data => {
        if (data.routes && data.routes.length > 0) {
            setRideDuration(data.routes[0].duration / 1000); // dividing by 1000 to convert seconds to milliseconds
        } else {
            // Handle case where no routes are found
            console.error('No routes found');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}, [pickUpCoordinates, dropoffCoordinates]);   

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe for more</Title>
            <CarList>
                { carList.map ((car)=> (
                    <Car key={car.key}>
                        <CarImage src={car.imgUrl}/>
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>{ '$' + (rideDuration * car.mutiplier).toFixed(2) }</Price>
                    </Car>
                )) }
            </CarList>
        </Wrapper>
    );
}

export default RideSelector;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-2
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-4 items-center
`
const CarImage = tw.img`
h-12 m-4
`
const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium 
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
tex-sm
`