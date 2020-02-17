<script>
	import Actions from './Actions.svelte'
	import CatWrapper from './cheats/CatWrapper.svelte'

	import { get, like, dislike } from './cheats/api'

	let isLoading = false
	let cat

	const fetchCat = async () => {
		isLoading = true
		cat = await get()
		isLoading = false
	}

	const likeCat = () => {
		like(cat.id)
		fetchCat()
	}

	const dislikeCat = () => {
		dislike(cat.id)
		fetchCat()
	}

	fetchCat()
</script>

<main>
	<CatWrapper>
		{#if cat}
			<img src={cat.url} alt={`Picture of cat ${cat.id}`} />
		{/if}
	</CatWrapper>
	<Actions on:like={likeCat} on:dislike={dislikeCat} disabled={isLoading} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100vw;
	}
</style>
