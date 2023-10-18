'use client'

import { useGetAllCourseQuery } from '@/services/getCourse'
import Link from 'next/link'
import CourseCard from '../CourseCard/CourseCard'

const GridCards = () => {
	const { data, error, isLoading } = useGetAllCourseQuery('')

	return (
		<div className='gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pt-5 '>
			{data?.map((item, key) => (
				<Link
					key={item.id}
					className='flex justify-center'
					href={`/discover/${item.id}`}
				>
					<CourseCard
						title={item.title}
						lessons={item.lessons}
						tags={item.tags}
						description={item.description}
						id={item.id}
						comments={item.comments}
						duration={item.duration}
					/>
				</Link>
			))}
		</div>
	)
}

export default GridCards
