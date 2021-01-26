import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
height: 100vh;
`

const Heading = styled.h1`
color: #8AA895;
margin-bottom: 40px;
`

const BackButton = styled.button`
width: 200px;
border-radius: 14pt;
border: none;
cursor: pointer;
padding: 15px 0 15px 0;
background: #8AA895;
color: white;
font-weight: bold;
font-size: 16px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;

&: hover {
  background: #B6C9BD;
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
