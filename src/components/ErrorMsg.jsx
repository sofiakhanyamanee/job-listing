import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
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

const BackButton = styled.button`
width: 200px;
border-radius: 14pt;
font-size: 17px;
border: none;
cursor: pointer;
padding: 15px 0 15px 0;
background: #b3e9c7;

&: hover {
  background: #7DC9A9;
}

:focus {
  outline: none;
}
`

export default function ErrorMsgPage() {
  const history = useHistory()

  function toStartpage(){
    history.push("/")
  }

  return (
    <Wrapper>
      <Heading>No jobs found</Heading>
      <BackButton onClick={() => toStartpage()}>Try again</BackButton>
    </Wrapper>
  )
}
