import React from 'react'
import { Link } from 'react-router-dom'

export default function JobItem({job, id}) {

  return (
    <div>
      <Link to={`/jobs/${id}`}>{job.company}</Link>
    </div>
  )
}

