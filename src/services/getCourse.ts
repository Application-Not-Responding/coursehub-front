'use client'

import { IResponseCourse } from '@/types/course'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseApi = createApi({
	reducerPath: 'courseApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
	endpoints: builder => ({
		getAllCourse: builder.query<IResponseCourse[], string>({
			query: () => 'courses/',
		}),
		getCourse: builder.query<IResponseCourse, string>({
			query: id => `courses/${id}`,
		}),
	}),
})

export const { useGetAllCourseQuery, useGetCourseQuery } = courseApi
