'use client'
import { IResponseCourse } from '@/types/course'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { FC } from 'react'
import { LuListVideo } from 'react-icons/lu'

const CourseCard: FC<IResponseCourse> = props => {
	const { title, lessons, tags, duration } = props

	return (
		<Card
			className='md:min-w-[180px] lg:min-w-[200px] xl:min-w-[249px] 
			min-h-[300px]'
			shadow='sm'
			isPressable
			onPress={() => console.log('item pressed')}
		>
			<CardBody className='overflow-visible p-4 flex items-center'>
				<Image
					radius='lg'
					alt={'img'}
					className='object-cover min-w-[280px] h-[200px] mx-auto'
					src={'https://i.pravatar.cc/'}
				/>
			</CardBody>
			<CardFooter className='flex-col text-start items-start gap-1 px-5 pb-3 pt-1'>
				<h1 className='text-wrap'>{title}</h1>
				<p className='text-sm text-paragraph_color flex items-center gap-2'>
					<LuListVideo />
					{lessons} lessons
					<p className='pl-6'>{duration}</p>
				</p>
			</CardFooter>
			<div className='absolute top-3 left-3 bg-gray-200 rounded-lg z-10 text-sm px-2 py-1'>
				{tags[0].toUpperCase()}
			</div>
		</Card>
	)
}

export default CourseCard
