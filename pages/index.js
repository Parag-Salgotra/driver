import Image from "next/image";
import { Imprima, Inter } from "next/font/google";
import tw from "tailwind-styled-components";
import Map from "./components/Map"
import Link from "next/link"
import {auth} from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect( () => {
    onAuthStateChanged(auth, user => {
        if(user) {
            setUser({
              name: user.displayName,
              photoUrl: user.photoURL,
            })
          } else {
            setUser(null)
            router.push('/login')
          }
    })
  }, [])

  return (
    <Wrapper>
      <Map id ="map" />
      <ActionItems>

        <Header>
          <UberLogo src="./Icons/UberLogo.png" />
          <Profile> 
            <Name>{user && user.name}</Name>
            <UserImage 
              src={user && user.photoUrl} 
              onClick={()=>signOut(auth)}
              /> 
          </Profile>
        </Header>

        <ActionButtons>
        
            <ActionButton>
            <Link href="/search">
                <ActionButtonImage src="./Icons/Ride.png"/> 
            </Link>
            Ride
            </ActionButton>
          

            <ActionButton>
            <Link href="/search">
              <ActionButtonImage src="./Icons/Wheels.png"/>
            </Link>
            Wheels
            </ActionButton>

       
            <ActionButton>
            <Link href="/search">
              <ActionButtonImage src="./Icons/Reserve.png"/>
            </Link>
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
h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer
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
h-24
`
const InputButtons = tw.div`
h-20 bg-gray-200 text-2xl p-4 mt-8 
rounded-lg
`