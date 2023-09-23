import type { MarkdownInstance } from 'astro'
import slugify from '@sindresorhus/slugify'

export type PostFrontmatter = {
	title: string
	date: string
	thumbnail: {
		src: string
		alt?: string
	}
	legend: string[]
	images?: {
		image: {
			src: string
			alt?: string
		}
	}[]
	video?: string
}

export const formatPosts = (rawPosts: MarkdownInstance<PostFrontmatter>[]) => {
	const sortedPosts = rawPosts.sort((a, b) => {
		const dateA = new Date(a.frontmatter.date)
		const dateB = new Date(b.frontmatter.date)
		return dateB.getTime() - dateA.getTime()
	})

	const posts = sortedPosts.map((post) => {
		const frontmatter = post.frontmatter
		const { legend, title, thumbnail, video, images: rawImages } = frontmatter
		const images = rawImages?.map((el) => ({ ...el.image }))
		const url = slugify(title)
		const Content = post.Content
		return { title, legend, thumbnail, video, url, Content, images }
	})
	return posts.map((post, i) => {
		const previous = posts[i - 1]?.url
		const next = posts[i + 1]?.url
		return { ...post, previous, next }
	})
}
