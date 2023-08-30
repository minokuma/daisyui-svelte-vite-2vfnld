<script>
	export let open = false
</script>

<aside class="absolute w-full h-full bg-white border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="#about">소개</a>
		<a class="block" href="#contact">로그인</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: top 0.5s ease-in-out
	}
	
	.open {
		left: 0;
    color: black;
    z-index: 1;
	}
</style>