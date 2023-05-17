import React from 'react'
import { useSelector } from 'react-redux'

const One = () => {
  const {value}=useSelector(state=>state.counter);

  return (
    <div>
      <h1>One-{value}</h1>
    </div>
  )
}

export default One