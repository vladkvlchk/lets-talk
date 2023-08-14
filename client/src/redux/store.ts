import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from './slices/user/slice'
import currentPage from './slices/currentPage/slice'
import cachedUsers from './slices/cachedUsers/slice'

export const store = configureStore({
  reducer: {
    user,
    currentPage,
    cachedUsers,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const UseAppDispatch = () => useDispatch<AppDispatch>();