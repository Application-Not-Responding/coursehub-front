'use client'

import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import headerIcon from '../../assets/images/header_icon.svg'

const SearchBar = () => {
	return (
		<>
			<Button variant='light' className='p-0 min-w-[40px] bg-transparent'>
				<Image src={headerIcon} alt='Icon' />
			</Button>
			<Input type='text' placeholder='&#xf002; Search anything' />
		</>
	)
}

export default SearchBar
