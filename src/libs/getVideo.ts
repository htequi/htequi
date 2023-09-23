export const getVideo = async (src?: string) => {
	if (!src) return
	try {
		const response = await fetch(`https://vimeo.com/api/oembed.json?url=${src}&responsive=true`)
		const data = await response.json()
		return data.html as string
	} catch (error) {
		console.error(
			`Impossible d'obtenir l'intégration pour la vidéo : "${src}". La vidéo existe-t-elle toujours ? Est-elle disponible ? Peut-être une erreure dans l'url`
		)
	}
}
