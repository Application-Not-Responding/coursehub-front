export interface IResponseCourse {
	id: number
	title: string
	description: string
	lessons: number
	duration: string
	tags: string[]
	comments: IComment[]
}

export interface IComment {
	id: number
	user: string
	text: string
	date: Date
}
