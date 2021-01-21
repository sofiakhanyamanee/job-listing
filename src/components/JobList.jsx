
import React, { useContext } from 'react'
import styled from 'styled-components'
import JobItem from './JobItem'
import { JobContext } from '../contexts/JobContextProvider'


const Heading = styled.h1`
padding: 60px 0 0 0;
`

const JobBox = styled.div`
border-bottom: 1px solid grey;
width: 100%;
padding: 20px 0 20px 0;
`

export default function JobList() {
  const {jobs} = useContext(JobContext)
  
  return (
    <div>
      <Heading>List of jobs</Heading>

      {jobs && jobs.map(job => {
        const jobco = job.id
        
        return (
          <JobBox key={jobco}>
            <h3>{job.company} - {job.type}</h3>
            <p>{job.title}</p>
            <JobItem job={job} id={jobco}/>
          </JobBox>     
        )
      })}
    </div>
  )
}