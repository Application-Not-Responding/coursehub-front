export function createSlug(inputString: string): string {
	let slug: string = inputString.toLowerCase()

	slug = slug.replace(/\s+/g, '-')

	slug = slug.replace(/[^a-z0-9\-]/g, '')

	return slug
}
