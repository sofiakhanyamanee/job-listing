
import React, { useContext } from 'react'
import styled from 'styled-components'
import JobItem from './JobItem'
import { JobContext } from '../contexts/JobContextProvider'
import { useHistory } from 'react-router-dom'



const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
// background: #c9e4de;
width: 100vw;
padding: 0 0 100px;
// background: #edf2f4;
// background: #D3DED6;
background: whitesmoke;


& img {
  max-width: 50px;
  max-length: 50px;
  display: block;
  margin-bottom: 40px;
}
`

const BackButton = styled.button`
width: 8vw;
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

const Heading = styled.h1`
padding: 60px 0 0 0;
`

const JobBox = styled.div`
width: 50%;
padding: 40px;
margin: 20px auto;
background: white;
border-radius: 8pt;
`

export default function JobList() {

  const { jobs } = useContext(JobContext)
  const history = useHistory()

  function toStartpage(){
    history.push("/")
  }

 
  return (
    
      <Wrapper>
        <BackButton onClick={() => toStartpage()}>Back</BackButton>
        {jobs.length > 0 ? jobs.map(job => {
          const jobco = job.id
          
          return (
            <JobBox className="jobcard" key={jobco}>
              <img alt="img" src={job.company_logo}/>
              <strong>Job type: {job.type}</strong>
              <h2>Title: {job.title}</h2>
              <h3>Company: {job.company}</h3>
              <div dangerouslySetInnerHTML={{__html: job.description.substring(0, 200)+ "..."}}></div>
              <JobItem job={job} id={jobco}/>
            </JobBox>     
          )
        }) : <Heading>Loading...</Heading> }

      </Wrapper>

  )
}