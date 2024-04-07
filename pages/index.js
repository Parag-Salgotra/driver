import Image from "next/image";
import { Imprima, Inter } from "next/font/google";
import tw from "tailwind-styled-components";
import Map from "./components/Map"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      <Map id ="map" />
      <ActionItems>

        <Header>
          <UberLogo src="./Icons/UberLogo.png" />
          <Profile> 
            <Name>Parag Salgotra</Name>
            <UserImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" /> 
          </Profile>
        </Header>

        <ActionButtons>
        
            <ActionButton>
                <ActionButtonImage src="./Icons/Ride.png"/> 
                <Link href="/search">Ride</Link>
            </ActionButton>
          

            <ActionButton>
              <ActionButtonImage src="./Icons/Wheels.png"/>
              Wheels
            </ActionButton>

       
            <ActionButton>
              <ActionButtonImage src="./Icons/Reserve.png"/>
              Reserve
            </ActionButton>

        </ActionButtons>

        <InputButtons>
        Where to ?
        </InputButtons>

      </ActionItems>
    </Wrapper>
  );
}
const Wrapper = tw.div`
flex flex-col
h-screen
bg-white
text-black
`
const ActionItems = tw.div`
p-4 absolute bottom-10 right-10 left-10 z-10
bg-white rounded-lg
`
const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-20 text-sm
`
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`
const ActionButtons = tw.div`
flex
`
const ActionButton = tw.div`
flex 
bg-gray-200 flex-1 m-1 h-32 
items-center flex-col justify-center
rounded-lg text-xl
transform hover:scale-95 transition
`
const ActionButtonImage = tw.img`
h-3/5
`
const InputButtons = tw.div`
h-20 bg-gray-200 text-2xl p-4 mt-8 
rounded-lg
`