import { configureStore } from '@reduxjs/toolkit'

//after importing counterSlice, change counterSlice to counterReducer
import counterReducer from '../slice/counterSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})