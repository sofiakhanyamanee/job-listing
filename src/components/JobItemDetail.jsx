import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: center;
height: auto;
width: 100vw;
background: whitesmoke;
padding: 50px;

 & img {
  width: 70px;
 }
`

const Box = styled.div`
width: 50%;
`

const Paragraph = styled.p`
font-size: 14px;
text-align: right;
`


export default function JobItemDetail({job}) {


  return (
    <Wrapper>
      <Box>
      { job ? 
      <div>
        <img alt="img" src={job.company_logo}/>
        <Paragraph>{job.created_at}</Paragraph>
        <strong>{job.type}</strong>
        <h2>{job.title}</h2>
        <h2>{job.location}</h2>
        <div dangerouslySetInnerHTML={{__html: job.description}}></div>
        <a href={job.company_url}>{job.company_url}</a>      
        {console.log("job", job)}
      </div> 

      : <h1>Loading</h1> }
      </Box>
    </Wrapper>
  )
}
