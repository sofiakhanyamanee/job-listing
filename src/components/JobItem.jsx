import React from 'react'
import { Link } from 'react-router-dom'
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

export default function JobItem({job}) {

    return (
      <Wrapper>
        <JobCard className="jobcard" key={job.id}>
          <img alt="img" src={job.company_logo}/>
          <strong>Job type: {job.type}</strong>
          <h2 className="title">Title:{job.title}</h2>
          <h3>Company: {job.company}</h3>
          <div dangerouslySetInnerHTML={{__html: job.description.substring(0, 200)+ "..."}}></div>
          <div className="linkWrap">
            <Link className="readMore" to={`/jobs/${job.id}`}>Read more</Link>
          </div>
        </JobCard>          
      </Wrapper>
    )
}

