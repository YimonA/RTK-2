import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, incrementByPayLoadByCount } from '../features/counterSlice';

const Three = () => {
  const dispatch=useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(increment())} className="btn">inc</button>

      <button onClick={()=>dispatch(incrementByPayLoadByCount(10))} className="btn">inc by Count</button>
    </div>
  )
}

export default Three