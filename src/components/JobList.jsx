
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import JobItem from './JobItem'


const Heading = styled.h1`
padding: 60px 0 0 0;
`

const JobBox = styled.div`
border-bottom: 1px solid grey;
width: 100%;
padding: 20px 0 20px 0;
`

export default function JobList() {
  const [jobList, setJobList] = useState(null)

  function getJobList() {
    const url = "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript"
    fetch(url)
    .then(res => res.json())
    .then(data => setJobList(data))
  }


  useEffect( () => {
    getJobList()
  }, [])

  
  return (
    <div>
      <Heading>List of jobs</Heading>

      {jobList && jobList.map(job => {
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