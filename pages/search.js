import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link"
import Map from "./components/Map"
import mapboxgl from "!mapbox-gl";
import { useState } from "react";

const Search = () => {

    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");

    return (
        <Wrapper>
            <Map id ="map" />
            <Container>
            <ButtonContainer>
                <Link href="/">
                <BackButton src="./Icons/Arrow.png"/>
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcon>
                    <Circle src="./Icons/Circle.png"/>
                     <Line src="./Icons/Line.png"/>
                     <Square src="./Icons/Square.png"/>
                </FromToIcon>
                <InputBoxes>
                    <Input placeholder="Enter pickup location"
                        value = {pickup}
                        onChange = {(e)=> setPickup(e.target.value)}
                    />
                    <Input placeholder="Where to?"
                        value = {dropoff}
                        onChange = {(e) => setDropoff(e.target.value)}
                    />
                </InputBoxes>
                <PlusIcon src="./Icons/Plus.png"/>
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="./Icons/Star.png"/>
                Saved Places
            </SavedPlaces>
            <Link href={{
                pathname: "/confirm",
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }}>
                <ConfirmLoation>
                    Confirm Location
                </ConfirmLoation>
            </Link>
            </Container>
        </Wrapper>
    );
}


export default Search;

const Container = tw.div`
p-4 absolute bottom-10 right-10 left-10 z-10
bg-white rounded-lg
`
const Wrapper = tw.div`
text-black
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
h-12 cursor-pointer
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const FromToIcon = tw.div`
w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1 
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2
outline-none border-none
`
const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 
rounded-full ml-3
`
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full
mr-2
`
const ConfirmLoation = tw.div`
bg-black text-white text-center px-4 py-2
m-4 cursor-pointer
`