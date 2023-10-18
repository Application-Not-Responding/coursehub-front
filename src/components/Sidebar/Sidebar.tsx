import Image from 'next/image'
import Link from 'next/link'

import account from '../../assets/images/account.svg'
import discover from '../../assets/images/discover.svg'
import help from '../../assets/images/help.svg'
import home from '../../assets/images/home.svg'
import logo from '../../assets/images/logo.svg'
import logout from '../../assets/images/logout.svg'

interface NavProps {
	icon: string
	text: string
	href: string
}

const navItems: NavProps[] = [
	{ icon: home, text: 'Home', href: '/' },
	{ icon: discover, text: 'Discover', href: '/discover' },
	{ icon: help, text: 'Help & Support', href: '/help' },
]

const Sidebar = () => {
	return (
		<div
			className='bg-gradient-to-b from-[#418CD1] from-[20.93%] to-[#9C41D1] to-[116.08%] 
			w-[80px] md:w-[150px] lg:w-[230px] xl:w-[250px] min-h-screen h-full shadow-lg flex flex-col md:items-start items-center justify-between py-10 md:px-6 px-0
			fixed'
		>
			<div className='flex flex-col gap-14 w-full'>
				<div className='mx-auto md:block hidden'>
					<Image src={logo} alt='logo' />
				</div>
				<div>
					<ul className='flex flex-col md:items-start items-center gap-8 text-gray_shade_color text-sm font-[500]'>
						{navItems.map((item, index) => (
							<li key={index}>
								<Link href={item.href} className='flex gap-4 items-start'>
									<Image
										src={item.icon}
										alt={`${item.text}_icon`}
										className='w-[20px] md:w-[16px]'
									/>
									<p className='md:block hidden'>{item.text}</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='flex flex-col gap-8 text-gray_shade_color text-sm'>
				<Link href='/account' className='flex gap-4 items-start'>
					<Image
						src={account}
						alt='account_icon'
						className='w-[20px] md:w-[16px]'
					/>
					<p className='md:block hidden'>Account</p>
				</Link>
				<Link href='#' className='flex gap-4'>
					<Image
						src={logout}
						alt='logout_icon'
						className='w-[20px] md:w-[16px]'
					/>
					<p className='md:block hidden'>Logout</p>
				</Link>
			</div>
		</div>
	)
}

export default Sidebar
