import React from "react";
import tw from "tailwind-styled-components";

const Login = () => {
    return(
        <Wrapper>
            <UberLog src='./Icons/UberLogo.png'/>
            <Title>Log in to access your account</Title>
            <HeadImage src="/Icons/Signup.png"/>
            <SignInButton>Sign in with Google</SignInButton>
        </Wrapper>
    )
}

export default Login;

const Wrapper = tw.div`
h-screen bg-gray-200
flex flex-col p-4
`
const SignInButton = tw.div`
bg-black text-white text-center py-4 mt-8 
`
const UberLog = tw.img`
h-20 w-auto object-contain self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const HeadImage = tw.img`
object-contain w-full h-1/2
`
