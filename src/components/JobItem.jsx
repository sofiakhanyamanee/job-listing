import React from 'react'
import { Link } from 'react-router-dom'

export default function JobItem({id}) {

  return (
    <div>
      <Link className="a-tag" to={`/jobs/${id}`}>Read more</Link>
    </div>
  )
}

