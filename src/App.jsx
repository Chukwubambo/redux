import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slice/counterSlice'


const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(increment())} className='bg-green-500 shadow hover:bg-green-900 text-white py-2 px-4 rounded'>
        Increment
        </button>

      <button onClick={() => dispatch(decrement())} className='bg-red-500 shadow hover:bg-red-900 text-white py-2 px-4 rounded'>
        Decrement
        </button>

      <button onClick={() => dispatch(reset())} className='bg-gray-500 shadow hover:bg-gray-900 text-white py-2 px-4 rounded'>
        Reset
        </button>

      <h1>Count:{count}</h1>
    </>
  )
}

export default App
