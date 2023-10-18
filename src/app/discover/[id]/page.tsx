import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import CourseDetails from '@/components/CourseDetails/CourseDetails'
import { FC } from 'react'

interface IPageProps {
	params: { id: number }
}

const DiscoverDetails: FC<IPageProps> = ({ params }) => {
	return (
		<div className='p-5 flex flex-col gap-5'>
			<h1 className='text-3xl font-semibold'>Discover</h1>
			<Breadcrumb />
			<CourseDetails id={params.id} />
		</div>
	)
}

export default DiscoverDetails
