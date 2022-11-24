import React from 'react'

export default function Alert({msg, setError}) {
  return (
    <div className="alert">
        {msg}
        <button className="alert__closebtn" onClick={() => setError(false)}>x</button>
    </div>
  )
}
