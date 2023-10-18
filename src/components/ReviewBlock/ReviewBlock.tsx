'use client'

import { IComment } from '@/types/course'
import { Avatar } from '@nextui-org/react'
import { formatDistanceToNow } from 'date-fns'
import { FC } from 'react'

interface IReviewBlockProps {
	comment: IComment
}

const ReviewBlock: FC<IReviewBlockProps> = ({ comment }) => {
	function formatRelativeTime(backendTimeString: Date): string {
		const date = new Date(backendTimeString)
		return formatDistanceToNow(date, { addSuffix: true })
	}

	return (
		<div>
			<span className='flex items-center gap-5'>
				<Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
				<span>
					<h1>{comment.user}</h1>
					<h4 className={'text-gray-400 text-xs'}>
						{formatRelativeTime(comment.date)}
					</h4>
				</span>
			</span>
			<span>
				<p className='py-3 ml-14 text-sm text-gray-400'>{comment.text}</p>
			</span>
		</div>
	)
}

export default ReviewBlock
