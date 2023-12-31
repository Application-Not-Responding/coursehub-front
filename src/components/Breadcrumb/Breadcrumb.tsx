import Link from 'next/link'

const Breadcrumb = () => {
	return (
		<nav className='flex' aria-label='Breadcrumb'>
			<ol className='inline-flex items-center space-x-1 md:space-x-3'>
				<li className='inline-flex items-center'>
					<Link
						href='/discover'
						className='inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
					>
						Discover
					</Link>
				</li>
				<li>
					<div className='flex items-center'>
						<svg
							className='w-3 h-3 text-gray-400 mx-1'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 6 10'
						>
							<path stroke='currentColor' d='m1 9 4-4-4-4' />
						</svg>
						<a
							href='#'
							className='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
						>
							Projects
						</a>
					</div>
				</li>
			</ol>
		</nav>
	)
}

export default Breadcrumb
