import React, { useContext }  from 'react'
import { Link } from 'react-router-dom'
import { JobContext } from '../contexts/JobContextProvider'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
width: 100vw;
padding: 0 0 100px;
background: whitesmoke;
`

const JobCard = styled.div`
width: 50%;
padding: 40px;
margin: 20px auto;
background: white;
border-radius: 8pt;
`

export default function JobItem() {
  const { jobs } = useContext(JobContext)

    return (
      <Wrapper>
        {jobs && jobs.map(job => {
          const id = job.id         
            return (
              <JobCard className="jobcard" key={id}>
                <img alt="img" src={job.company_logo}/>
                <strong>Job type: {job.type}</strong>
                <h2 className="title">Title:{job.title}</h2>
                <h3>Company: {job.company}</h3>
                <div dangerouslySetInnerHTML={{__html: job.description.substring(0, 200)+ "..."}}></div>
                <div className="linkWrap">
                  <Link className="readMore" to={`/jobs/${id}`}>Read more</Link>
                </div>
                
              </JobCard>     
            )
        })}
      </Wrapper>
    )
}

