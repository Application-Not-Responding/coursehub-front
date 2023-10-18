'use client'

import {Card, CardBody} from '@nextui-org/react'
import Image from 'next/image'
import {FC} from 'react'

interface BadgeCardProps {
  href: string
  title: string
  description: string
}

const BadgeCard: FC<BadgeCardProps> = ({href, title, description}) => {
  return (
    <Card className='md:max-w-[300px] p-5'>
      <CardBody className='flex lg:flex-row flex-col gap-5'>
				<span className={`my-auto rounded-full`}>
					<Image src={href} alt='icon' width={60}/>
				</span>
        <span>
					<h1 className='text-2xl text-title_color font-semibold'>{title}</h1>
					<p className='text-sm text-paragraph_color font-normal'>
						{description}
					</p>
				</span>
      </CardBody>
    </Card>
  )
}

export default BadgeCard
