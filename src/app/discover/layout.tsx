export default function DiscoverLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex relative bg-gray-100 box-border m-0 p-0'>
			<div className='px-4 py-5 w-full'>
				{children}
			</div>
		</div>
	)
}
