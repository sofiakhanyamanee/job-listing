import React from 'react'
import styled from 'styled-components'

const SearchBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #13505b;
width: 100vw;
height: 100vh;
`

const Heading = styled.h1`
color: #ede7e3;
margin-bottom: 40px;
`
const Inputfield = styled.input`
display: flex;
justify-content: center;
width: 40%;
padding: 15px 20px;
border-radius: 14pt;
margin-bottom: 40px;
border: none;
font-size: 17px;
color: darkslategrey;

&:focus {
  outline: none;
}

`

const SearchButton = styled.button`
width: 30%;
height: 6%;
border-radius: 14pt;
font-size: 17px;
border: none;
cursor: pointer;

&: hover {
  background: #b3e9c7;
}
`



export default function SearchInputField() {
  return (
    <SearchBox>
        <Heading>What type of job are you looking for? </Heading>
        <Inputfield />
        <SearchButton>Search</SearchButton>
    </SearchBox>
  )
}
