<script>
	import Logo from './Logo.svelte'
	import Hamburger from './Hamburger.svelte'
	import Menu from './Menu.svelte'
	
	export let sidebar = false

  // 모바일 환경 판단
  let isMobile = false;
  
  function checkWindowSize() {
    isMobile = window.innerWidth <= 768; // 예시로 768px를 기준으로 모바일 환경 판단
  }

  // 초기화 및 창 크기 변경 시에도 업데이트
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);
</script>


<header class="drawer-content flex flex-col">
	<nav class="flex ">
    {#if isMobile}
      <!-- 모바일 환경에서 보여지는 내용 -->
      <Logo/>
      <Hamburger bind:open={sidebar}/>  
    {:else}
      <!-- 데스크탑 환경에서 보여지는 내용 -->
      <Logo/>
      <Menu/>
    {/if}
	</nav>
	
	
</header>
