
import React from 'react'
import styled from 'styled-components'
import JobItem from './JobItem'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
width: 100vw;
padding: 0 0 100px;
background: whitesmoke;


& img {
  max-width: 50px;
  max-length: 50px;
  display: block;
  margin-bottom: 40px;
}
`

const BackButton = styled.button`
width: 160px;
border-radius: 14pt;
font-size: 17px;
border: none;
cursor: pointer;
padding: 15px 0 15px 0;
margin: 50px;
background: #8AA895;
color: white;
font-weight: bold;
box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;

&: hover {
  background: #B6C9BD;
}
:focus {
  outline: none;
}
`

export default function JobList() {
  const history = useHistory()

  function toStartpage(){
    history.push("/")
  }

  return (
      <Wrapper>
        <BackButton onClick={() => toStartpage()}>Back</BackButton>
        <JobItem/>
      </Wrapper>
  )
}


