'use client'

import DropdownOptions from '@/components/DropdownOptions/DropdownOptions'
import GridCards from '@/components/GridCards/GridCards'
import ListBoxOptions from '@/components/ListBox/ListBoxOptions'
import { IoFilterSharp, IoGrid } from 'react-icons/io5'

const Discover = () => {
	return (
		<div className={'px-4 py-5 '}>
			<h1 className='text-3xl font-semibold mb-5'>Discover</h1>
			<div className='w-full flex flex-col md:flex-row md:items-center justify-between '>
				<span className='flex items-start lg:items-center flex-col lg:flex-row justify-evenly lg:gap-5'>
					<ListBoxOptions text='Sort by' />
					<ListBoxOptions />
					<ListBoxOptions text='Category' />
				</span>
				<span className='flex gap-3'>
					<DropdownOptions
						buttonContent={
							<>
								<IoFilterSharp />
								Filters
							</>
						}
						buttonVariant={'flat'}
						variants={['Oldest', 'Newest', 'Select']}
					/>
					<DropdownOptions
						buttonContent={<IoGrid />}
						buttonVariant={'flat'}
						variants={['Grid', 'Column']}
					/>
				</span>
			</div>
			<GridCards />
		</div>
	)
}

export default Discover
