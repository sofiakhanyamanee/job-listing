import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ErrorMsgPage() {
  const history = useHistory()

  function toStartpage(){
    history.push("/")
  }

  return (
    <div>
      <h1>No jobs found</h1>
      <button onClick={() => toStartpage()}>Try again</button>
    </div>
  )
}
