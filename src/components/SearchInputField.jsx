import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { JobContext } from '../contexts/JobContextProvider'

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

  const {search, setSearch, setJobs} = useContext(JobContext)
  const history = useHistory()

  function getJobList() {
    
    // const rep = search.replace(" ", "+")
    // setSearch(rep)
    
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => setJobs(data))

    history.push("/jobs")
  }
  

  return (
    <SearchBox>
        <Heading>What type of job are you looking for? </Heading>
        <Inputfield type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        <SearchButton onClick={() => getJobList(search)}>Search</SearchButton>
    </SearchBox>
  )
}
