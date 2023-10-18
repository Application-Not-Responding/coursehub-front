import counterReducer from '@/features/counter/counterSlice'
import { courseApi } from '@/services/getCourse'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[courseApi.reducerPath]: courseApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(courseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const typedStore: typeof store = store
