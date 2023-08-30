<script>
	import { reveal } from 'svelte-reveal'
	
	export let useReveal = {};
</script>

<p use:reveal={ useReveal }><slot/></p>

<style>
	p {
		display: flex;
		background: violet;
		color: white;
		font-weight: bold;
		margin-bottom: 0;
		width: fit-content;
		padding: 0.25rem 0.5rem;
	}
</style>