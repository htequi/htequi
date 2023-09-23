<script lang="ts">
	import type { MarkdownHeading } from 'astro'
	import { onMount } from 'svelte'

	interface Item extends MarkdownHeading {
		childrens?: MarkdownHeading[]
	}

	export let headings: MarkdownHeading[]
	let currentId = headings[0]?.slug
	const items = headings.filter(({ depth }) => depth === 2 || depth === 3)

	const tocItems = items.reduce<Item[]>((result, current) => {
		const heading = { ...current }
		const { depth } = heading
		if (depth === 2) return [...result, heading]
		const last = result[result.length - 1]
		if (!last) return result
		const childrens = last.childrens?.length ? [...last.childrens, heading] : [heading]
		result[result.length - 1].childrens = childrens
		return result
	}, [])

	onMount(() => {
		const setCurrent: IntersectionObserverCallback = (entries) => {
			for (const { isIntersecting, target } of entries) {
				if (isIntersecting && headings.some((el) => el.slug === target.id)) {
					if (currentId === target.id) continue
					currentId = target.id
					break
				}
			}
		}
		const observerOptions: IntersectionObserverInit = {
			// Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
			rootMargin: '-25px 0% -83%',
			threshold: 1
		}
		const observer = new IntersectionObserver(setCurrent, observerOptions)
		const headingElments = document.querySelectorAll('h2,h3')

		headingElments.forEach((el) => {
			observer.observe(el)
		})

		return () =>
			headingElments.forEach((el) => {
				observer.unobserve(el)
			})
	})
</script>

<h3 class="mb-3 font-semibold">Table des matières</h3>
<ul class="pl-2 mt-1 text-sm text-gray-800">
	{#each tocItems as { slug, text, childrens }}
		<li>
			<a
				href={`#${slug}`}
				class="line-clamp-1 transition-colors hover:underline focus-visible:underline data-[active=true]:border-primary-1 data-[active=true]:font-bold data-[active=true]:text-primary-2 my-1"
				data-active={currentId === slug}>{text}</a
			>
			{#if childrens}
				<ul>
					{#each childrens as child}
						<li>
							<a
								href={`#${child.slug}`}
								class="line-clamp-1 transition-colors hover:underline focus-visible:underline data-[active=true]:border-primary-1 data-[active=true]:font-bold data-[active=true]:text-primary-2 border-l pl-3"
								data-active={currentId === child.slug}>{child.text}</a
							>
						</li>{/each}
				</ul>
			{/if}
		</li>
	{/each}
</ul>
