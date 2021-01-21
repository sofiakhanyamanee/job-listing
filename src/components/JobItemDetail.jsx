import React from 'react'

export default function JobItemDetail({job}) {


  return (
    <div>

      { job ? 
      <div>
        <span>{job.created_at}</span>
        <h1>{job.title}</h1>
        <h2>{job.type} - {job.location}</h2>
      </div> 

      : <div>Loading</div> }

    </div>
  )
}
