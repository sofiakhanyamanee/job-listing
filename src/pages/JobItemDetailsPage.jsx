import React, {useEffect, useState} from 'react'
import JobItemDetail from '../components/JobItemDetail'


export default function JobItemDetailsPage(props) {
  const id = props.match.params.id
  const [job, setJob] = useState(null)

  function getDetails() {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setJob(data))
  }
  
  useEffect( () => {
    getDetails()
  }, [])
  
  return (
    <div>
      <JobItemDetail job={job} />
    </div>
  )
}

