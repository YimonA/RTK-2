import React from 'react'
import { useSelector } from 'react-redux';

const Two = () => {
  const {count}=useSelector(state=>state.counter);

  return (
    <div>
      <h1>Two-{count}</h1>
    </div>
  )
}

export default Two