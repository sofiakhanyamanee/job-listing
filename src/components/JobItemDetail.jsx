import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: #ede7e3;
`

export default function JobItemDetail({job}) {


  return (
    <Wrapper>

      { job ? 
      <div>
        <span>{job.created_at}</span>
        <h1>{job.title}</h1>
        <h2>{job.type} - {job.location}</h2>
      </div> 

      : <div>Loading</div> }

    </Wrapper>
  )
}
