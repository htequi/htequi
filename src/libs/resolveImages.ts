import type { ImageMetadata } from 'astro'
const allImages = await import.meta.glob<{ default: ImageMetadata }>(
	'/public/assets/*.{png,jpg,jpeg,webp}'
)

export const resolveImage = async (src: string) => {
	const url = '/public' + src
	if (!(url in allImages)) {
		throw new Error(`Image "${src}" not found! Is there a typo?`)
	}
	const { default: image } = await allImages[url]()
	return image as ImageMetadata
}
