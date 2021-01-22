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

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`

const Heading = styled.h1`
color: #ede7e3;
margin-bottom: 40px;
`
const Inputfield = styled.input`
display: flex;
justify-content: center;
width: 450px;
padding: 15px 20px;
border-radius: 14pt;
border: none;
font-size: 17px;
color: darkslategrey;
margin-right: 20px;

&:focus {
  outline: none;
}

`

const SearchButton = styled.button`
width: 200px;
border-radius: 14pt;
font-size: 17px;
border: none;
cursor: pointer;
padding: 15px 0 15px 0;
background: #b3e9c7;

&: hover {
  background: lightgreen;
}
`

export default function SearchInputField() {

  const {search, setSearch, setJobs} = useContext(JobContext)
  const history = useHistory()

  function getJobList() {
    
    const str = search.replace(" ", "+");
    // console.log(str)
    
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${str}`
    fetch(url)
    .then(res => res.json())
    .then(data => setJobs(data))
    
    history.push("/jobs")
    // console.log(url)
  }
  

  return (
    <SearchBox>
        <Heading>What type of job are you looking for? </Heading>
        <Box>
        <Inputfield type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        <SearchButton onClick={() => getJobList(search)}>Search</SearchButton>
        </Box>
    </SearchBox>
  )
}
