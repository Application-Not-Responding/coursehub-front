import BadgeCard from '@/components/BadgeCard/BadgeCard'
import GridCards from '@/components/GridCards/GridCards'
import certifiedIcon from '../assets/images/certified.svg'
import courseCompleteIcon from '../assets/images/courseComplete.svg'
import courseProgressIcon from '../assets/images/courseProgress.svg'

interface BadgeMockDataProps {
	href: string
	title: string
	description: string
}

const BadgeMockData: BadgeMockDataProps[] = [
	{
		href: courseCompleteIcon,
		title: '12K',
		description: 'Course completed',
	},
	{
		href: certifiedIcon,
		title: '470',
		description: 'Certificate earned',
	},
	{
		href: courseProgressIcon,
		title: '342',
		description: 'Course in progress',
	},
]

export default function Home() {
	return (
		<div>
			<div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly py-5 gap-5'>
				{BadgeMockData.map((item, index) => (
					<BadgeCard
						key={index}
						href={item.href}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
			<div className='px-8'>
				<h1 className='text-lg text-black	'>Most Popular</h1>
				<GridCards />
			</div>
		</div>
	)
}
