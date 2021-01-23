
import React, { useContext } from 'react'
import styled from 'styled-components'
import JobItem from './JobItem'
import { JobContext } from '../contexts/JobContextProvider'

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: whitesmoke;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
width: 100vw;
background: whitesmoke;


& img {
  max-width: 50px;
  max-length: 50px;
  display: block;
  margin-bottom: 40px;
}
`

const Heading = styled.h1`
padding: 60px 0 0 0;
`

const JobBox = styled.div`
border-bottom: 1px solid grey;
width: 50%;
padding: 20px 0 20px 0;
margin: 20px auto;
`

export default function JobList() {
  const {jobs} = useContext(JobContext)
 
//  let i = 0;
  // console.log(searched)
  // console.log(jobs) 
  // let arr = [{ word: jobs.company }];
  
  // add obj to array
  // setHistory([...jobs, history])
  // console.log(history)
  // let i = 0;

  // for(i = 0 ; i <jobs.length ;i++)
  // {
    
  //   let obj = {
  //     "company": jobs.company,
  //     "type": jobs.type
  //    }

  //    setHistory(obj);
     
  //    i++;
  //    console.log("history array: " + history);
  // }
  // console.log(jobs)
 
  return (
    
    <Box>
      <Heading>Jobs that match</Heading>
      <Wrapper>
        {jobs.length > 0 ? jobs.map(job => {
          const jobco = job.id
          
          return (
            <JobBox key={jobco}>
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
    </Box>
  )
}