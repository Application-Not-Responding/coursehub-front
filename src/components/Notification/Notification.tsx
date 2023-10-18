'use client'

import { Button } from '@nextui-org/button'
import Image from 'next/image'
import notificationIcon from '../../assets/images/notification.svg'

const Notification = () => {
	return (
		<Button variant='light' className='p-0 min-w-[40px] bg-transparent'>
			<Image src={notificationIcon} alt='Icon' />
		</Button>
	)
}

export default Notification
