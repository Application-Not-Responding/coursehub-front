'use client'

import bgImage from '@/assets/images/BgImage.png'
import CommentBlock from '@/components/CommentBlock/CommentBlock'
import ReviewBlock from '@/components/ReviewBlock/ReviewBlock'
import { useGetCourseQuery } from '@/services/getCourse'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import { FC } from 'react'
import { RxCross2 } from 'react-icons/rx'

interface ICourseDetailsProps {
	id: number
}

const CourseDetails: FC<ICourseDetailsProps> = ({ id }) => {
	const { data, error, isLoading } = useGetCourseQuery(`${id}`)

	return (
		<div className='flex items-start justify-between gap-5'>
			<div className='bg-white p-8 rounded-xl flex-1'>
				<Image src={bgImage} alt={'hero'} />
				<div className='my-8'>
					<h1 className='text-2xl'>{data?.title}</h1>
					<p className='text-gray-400 font-light'>
						By Simon Shaw, Illustrator and 3D designer
					</p>
				</div>
				<span className={'flex items-center gap-5'}>
					{data?.tags.map((tag, key) => (
						<span
							key={key}
							className={
								'bg-orange-500 text-white px-5 py-2 text-sm rounded-3xl'
							}
						>
							{tag}
						</span>
					))}
					{/* <p>Content</p>
					<p className={'flex items-center gap-1 text-gray-600'}>
						<AiOutlineLock className={'fill-gray-600 text-medium'} />
						Students
					</p> */}
				</span>
				<span>
					<p className='text-gray-700 text-base mt-6'>{data?.description}</p>
				</span>

				<span className='flex flex-col gap-5 mt-10'>
					<h3 className='text-xl py-4'>Reviews</h3>
					{data?.comments.map(comment => (
						<ReviewBlock key={comment.id} comment={comment} />
					))}
					<CommentBlock />
				</span>
			</div>
			<div className='bg-white p-8 rounded-xl w-3/12 flex flex-col items-center justify-between gap-14'>
				<Button className='bg-indigo-500 text-white text-medium font-semibold rounded-lg py-7 w-full'>
					Join the course
				</Button>
				<span className={'w-full'}>
					<span>
						<h1 className={'text-xl'}>What you’ll learn</h1>
						<p className={'text-base font-light py-4 text-gray-400 mb-10'}>
							Access to IBM Cloud modelling what is I was looking for and Aaron
							got me the solution.
						</p>
					</span>
					<span>
						<h1 className={'text-xl'}>This course includes:</h1>
						<ul
							className={
								'text-gray-400 text-sm font-light py-4 flex flex-col gap-2 mb-10'
							}
						>
							<li>100% Positive reviews (45)</li>
							<li>2167 students</li>
							<li>59 Lessons (9h 11m)</li>
							<li>6 courses</li>
							<li>Level:</li>
						</ul>
					</span>
					<span className={'flex flex-col gap-2'}>
						<h1 className={'text-lg'}>Tags:</h1>
						<span className={'flex gap-3 flex-wrap'}>
							{data?.tags.map((tag, key) => (
								<span
									key={key}
									className={
										'bg-gray-100 text-gray-500 text-sm py-1 px-2 rounded-medium flex items-center gap-2'
									}
								>
									{tag}
									<RxCross2 />
								</span>
							))}
						</span>
					</span>
				</span>
			</div>
		</div>
	)
}

export default CourseDetails
