<script>
  let isToggled = false;

  import {
    Collapse,
    Navbar,
    Styles,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button, 
    Icon
  } from 'sveltestrap';
  
  let theme = 'light';
  let isOpen = false;
  let isNavbarOpaque = true;

  function handleScroll() {
    isNavbarOpaque = window.scrollY === 0; // 스크롤 위치에 따라 투명 여부 결정
  }

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
  
  import AiOutlineMenu from "svelte-icons-pack/ai/AiOutlineMenu";
  import AiOutlineClose from "svelte-icons-pack/ai/AiOutlineClose";
  
  import Divider from './reveal/Divider.svelte';
  // let isMenuOpen = false;

  // function toggleMenu() {
  //   alert();
  //   console.log('토글 메뉴!!');
  //   isMenuOpen = !isMenuOpen;
  // }


  let isMobile = false;

  // 브라우저 창 크기에 따라 화면 크기를 판별하는 함수
  function checkWindowSize() {
    isMobile = window.innerWidth <= 640; // 기준 값 설정
  }

  // 초기화 시 화면 크기를 판별하고, 창 크기가 변경될 때마다 업데이트
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);


  import Carousel from "svelte-carousel";
  const images = [
    {
      url: "https://selinerapp.tk/images/wallpaper_1.jpg",
      description: "image1",
      text: "언제 어디서든<br/>꾸민하세요!"
    },
    {
      url: "https://selinerapp.tk/images/wallpaper_2.jpg",
      description: "image2",
      text: "새롭게 인테리어를<br/>꾸미고 싶을 때<br/>꾸민!"
    },
    {
      url: "https://selinerapp.tk/images/wallpaper_3.jpg",
      description: "image3",
      text: "새로운 분위기의<br/>전환이 필요할 때<br/>꾸민!"
    },
    {
      url: "https://selinerapp.tk/images/wallpaper_4.jpg",
      description: "image4",
      text: "내 마음대로<br/>꾸미고 싶을 때<br/>꾸민!"
    },
    {
      url: "https://selinerapp.tk/images/wallpaper_5.jpg",
      description: "image5",
      text: "순식간에<br/>디자인하고 싶을 때<br/>꾸민!"
    },
  ];
  
  let carousel; // for calling methods of the carousel instance
  const handleNextClick = () => {
    carousel.goToNext();
  };

  let text = "Hello, Svelte!";

  // 시차 효과 스크립트 시작
  import { Parallax, ParallaxLayer} from 'svelte-parallax'
  
  let parallax;
  let disabled = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  // 시차 효과 스크립트 종료

  // 줌 페이드 효과 스크립트 시작
  let y = 0
  let innerHeight

  function calculate(y, startY, endY, startValue, endValue) {
    const diffY = endY - startY
    const diffValue = endValue - startValue

    if (y < startY) {
      return startValue
    } else if(startY <= y && y <= endY) {
      const progress = (y - startY)/diffY
      return startValue + (diffValue * progress)
    } else if(endY < y){
      return endValue
    }
  }

  import { fade } from 'svelte/transition';
  // 줌 페이드 효과 스크립트 종료

  import Sidebar from './Sidebar.svelte'
  
  import Main from './Main.svelte'

  let open = false
  import { reveal } from 'svelte-reveal';
  import Example1 from './reveal/Example1.svelte';

  // 메뉴
  function Menu(e) {
    // alert(e);
    let list = document.querySelector('ul');

    e.name === 'menu' 
      ? ( 
        e.name = "close", 
        list.classList.add('top-[80px]'), 
        list.classList.add('opacity-100')
      )
      : ( 
        e.name = "menu", 
        list.classList.remove('top-[80px'),
        list.classList.remove('opacity-100')
      )  
  }

  let menuState = "menu";

  // function toggleMenu() {
  //   let list = document.querySelector('ul');
    
  //   if (menuState === "menu") {
  //     menuState = "close";
  //     list.classList.add('top-[80px]');
  //     list.classList.add('opacity-100');
  //   } else {
  //     menuState = "menu";
  //     list.classList.remove('top-[80px]');
  //     list.classList.remove('opacity-100');
  //   }
  // }
  
  function toggleMenu(e) {
    menuState = menuState === "menu" ? "close" : "menu";
  }
  
</script>

<style>
  a { 
    display: block; 
  }
  
  .container {
    position: relative;
    /* height: 200px; */
  }

  .carousel-text-container {
    position: relative;
  }

  .img-container {
    /* width: 100%;
    height: 100%; */
    width: 100%; /* 모바일 웹 및 데스크탑 웹을 위해 가로 사이즈 풀 */
    height: 700px; /* 모바일 웹 화면을 위해 높이 700px 로 고정 */
    /* background-position: -50px -30px;  */
    object-fit: cover; /* 이미지를 비율 유지하며 가득 채움 */
    transition: background-color 0.3s ease;
  }

  .overlay-appbar-center {
    position: absolute;
    top: 35%;
    /* left: 20%; */
    /* right: 50%; */
    /* transform: translate(-50%, -50%); */
    letter-spacing: 20;
    line-height: 1.4;
    font-weight: bold;
    color: white;
    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
  }

  .overlay-appbar-left {
    position: absolute;
    top: 60px;
    left: 10%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .overlay-appbar-right {
    position: absolute;
    top: 5%;
    right: 0%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  /* 시차 효과 스타일 */
  :global(body) {
    padding: 0;
  }
  .server, .bash, .clients-main {
    cursor: pointer;
  }
  img:focus {
    outline: 1px dotted gray;
  }
  img:focus:not(:focus-visible) {
    outline: none;
  }
  .server:focus-visible {
    outline: 2px dotted gray;
  }
  .bash:focus-visible {
    outline: 2px dotted purple;
  }
  .clients-main:focus-visible {
    outline: 2px dotted blue;
  }

  /* 줌 페이드 효과 시작 */
  #y-scroll {
    position: fixed;
    top: 1rem;
    left: 1rem;
    color: white;
    z-index: 10;
    font-size: 1.5rem;
    font-weight: bold;
  }
  #content {
    height: 500vh;
  }
  #home {
    height: 260vh;
    border-bottom: 5px solid #90aaa3;
  }
  #img-container {
    position: sticky;
    top: 0;
    width: 100%; /* 모바일 웹 및 데스크탑 웹을 위해 가로 사이즈 풀 */
    height: 750px; /* 모바일 웹 화면을 위해 높이 700px 로 고정 */
    /* width: 100%;
    height: 100vh; */
    background-image: url("https://selinerapp.tk/images/wallpaperbetter.com_2560x1440.jpg");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;   
  }
  h1 {
    color: white;
    text-align: center;
  }
  :global(body) {
    margin: 0;
    background-color: black;
  }
  :global(*){
    box-sizing: border-box;
  }
  /* 줌 페이드 효과 종료 */

  /* 커스텀 drop-shadow 스타일 클래스 정의 */
  .text-drop-shadow {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5)); /* 원하는 drop-shadow 스타일을 설정 */
  }
</style>


<Styles {theme} />

<!-- <Button
  color="primary"
  outline
  active={theme === 'auto'}
  on:click={() => (theme = 'auto')}
>
  기본 <Icon name="circle-half" />
</Button> -->

<nav class="sticky top-0 z-50 ">
  <Navbar color={theme === 'dark'} light expand="md" class="{theme === 'dark' ? 'backdrop-blur-sm bg-black/30 ' : 'backdrop-blur-sm bg-white/30 '} ">
    <NavbarBrand href="/">
      <!-- 커서 포인터 영역 활성화 -->
        <span class="text-2xl font-[Poppins] cursor-pointer ">
          <!-- 인라인 처리! -->
          <img class="h-8 inline" src="https://www.ggumin.me/images/logo-b.png" alt="" >
        </span>    
    </NavbarBrand>
    
    <!-- 버튼 -->
    <Button
      outline
      active={theme === 'light'}
      on:click={() => (
        theme = theme === 'light' ? 'dark' : 'light'
      )}
    >
      <Icon name={theme === 'light' ? "moon-stars-fill": "sun-fill" }  />
    </Button>

    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink class="text-center"  href="#">
            <span class="{theme === 'dark' ? 'text-gray-300': 'text-gray'}">소개</span> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink class="text-center"  href="#">
            <span class="{theme === 'dark' ? 'text-gray-300': 'text-gray'}">채용</span> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink class="text-center"  href="#">
            <span class="{theme === 'dark' ? 'text-gray-300': 'text-gray'}">로그인</span> 
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</nav>


<!--  여기다 -->
<!-- <body class="bg-cyan-400">
  <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div class="flex justify-between items-center">
      <span class="text-2xl font-[Poppins] cursor-pointer">
        <img class="h-8 inline" src="https://www.ggumin.me/images/logo-b.png" alt="">
        꾸민
      </span>

      <span class="text-3xl cursor-pointer mx-2 md:hidden block">
      
        <button on:click={toggleMenu}>{menuState}</button>

        <header class="drawer-content flex flex-col">
          <nav class="flex">
            {#if menuState === "menu"}
              <Icon src={AiOutlineMenu} on:click={toggleMenu} />
              <div>
                <a href="/">메뉴1</a>
                <a href="/">메뉴2</a>
                <a href="/">메뉴3</a>
                <a href="/">메뉴4</a>
            </div>
            {:else}
              <Icon src={AiOutlineClose} on:click={toggleMenu} />
            {/if}
          </nav>
        </header>
      </span>
    </div>
    <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7">
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">HOME</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">SERVICE</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">ABOUT</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">CONTACT</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">LOGIN</a>
      </li>

      <button class="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">시작하기
      </button>
    </ul>
  </nav>
</body> -->

<!-- <Navbar bind:sidebar={open}/> -->

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight}/>

<Carousel
        bind:this={carousel}
        let:loaded
        autoplay
        autoplayDuration={3000}
        autoplayProgressVisible={false}
        arrows={false}
        swiping={true}
        dots={false}
        particlesToShow={1}
      >
        {#each images as src, imageIndex (src)}
         <!-- 여기 class="container" -->
          <div class="carousel-text-container " > 
            {#if loaded.includes(imageIndex)}
              <img 
                src={src.url} 
                alt={src.description} 
                class="img-container {theme === 'dark' ? 'opacity-50' : 'opacity-80'}"
              />
              <!-- <video width="100%" autoplay loop=true>
                <source src="https://selinerapp.tk/images/simul.mp4" type="video/mp4" />
              </video> -->
              
              <div class="{isMobile ? 'inset-0 flex justify-center text-3xl' : 'mx-20 text-5xl' } overlay-appbar-center ">
              <p class="text-black-1000 text-drop-shadow" use:reveal={{ transition: "fade" }}>{@html src.text}</p>
              </div>
                <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            {/if}
          </div>
        {/each}
      </Carousel>



<div class="h-screen w-screen w-full relative">
  <!-- 그라데이션 glass 효과 -->
  <div class="absolute inset-0 bg-gradient-to-b from-black to-black"></div>
  
  <!-- 텍스트 -->
  <div class="absolute inset-x-0 top-0 p-4 text-center">
    <div use:reveal={{ x: -50, y: 10 }} class="md:w-full mb-4" >
      <h2
        use:reveal={{ transition: "blur", delay: 100 }} 
        class="py-10 text-center text-white text-5xl font-fh font-bold leading-relaxed">꾸민이여야만 하는 이유!
      </h2>
      <p
        use:reveal={{ transition: "blur", delay: 300 }}
        class="text-center text-gray-300 text-2xl font-fh font-bold leading-relaxed ">비용, 시간, 공간이 부담없는<br/>3D 디자인 앱 서비스로
      </p>
      <br/>
      <p
        use:reveal={{ transition: "blur", delay: 500 }}
        class="text-center text-gray-300 text-2xl font-fh font-bold leading-relaxed">오직 인테리어 고객님들을 위해<br/> 혁신을 만들어 갑니다.
      </p>
      <br/>
      <p
        use:reveal={{ transition: "blur", delay: 700 }} 
        class="text-center text-gray-300 text-2xl font-fh font-bold leading-relaxed">지금까지 없던 새로운 경험으로
      </p>
      <p
        use:reveal={{ transition: "blur", delay: 900 }} 
        class="text-center text-gray-300 text-2xl font-fh font-bold leading-relaxed">고객의 만족도와 신뢰도를
      </p>
      <br/>
      <h3
        use:reveal={{ transition: "blur", delay: 1100 }} 
        class="text-center text-gray-300 text-2xl font-fh font-bold leading-relaxed">고객님의 높은 기술성을
      </h3>
      <h3
        use:reveal={{ transition: "blur", delay: 1300 }} 
        class="text-center text-gray-300 text-2xl font-fh font-bold leading-relaxed">꾸민이 만들어 드립니다.
      </h3>
    </div>
  </div>
</div>



<Example1 />


<div class="box h-screen w-screen w-full flex flex-col items-center">
  <div class="w-full md:w-[35%] md:flex md:justify-center">
    {#if isMobile}
      <div class="flex flex-col space-y-4 p-3">
        <div class='w-full mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
          <div class='max-w-md mx-auto'>
            <!-- <img src="https://media.istockphoto.com/id/1480711849/ko/%EB%B2%A1%ED%84%B0/%EC%9B%90%ED%98%95-%EC%8B%9C%EA%B3%84-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%95%8C%EB%9E%8C-%EC%8B%9C%EA%B3%84%EC%9E%85%EB%8B%88%EB%8B%A4-3d-%ED%8C%8C%EB%9E%80%EC%83%89-%EC%9E%89%ED%81%AC-%EC%8B%9C%EA%B3%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%88%98%EB%A9%B4-%ED%83%80%EC%9D%B4%EB%A8%B8%EC%9D%98-%EC%B5%9C%EC%86%8C-%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B0%9C%EB%85%90-3d-%EC%8B%9C%EA%B3%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EB%8A%94-%EA%B2%A9%EB%A6%AC%EB%90%9C-%ED%8C%8C%EB%9E%80%EC%83%89%EC%9C%BC%EB%A1%9C-%EB%A0%8C%EB%8D%94%EB%A7%81%EB%90%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=NbGpFHLMiNgzIesdKjXky46tMmNo-zC_R8OOhcIYhOs=" alt=""> -->
            <div class="bg-cover bg-center h-80" style="background-image: url('https://media.istockphoto.com/id/1480711849/ko/%EB%B2%A1%ED%84%B0/%EC%9B%90%ED%98%95-%EC%8B%9C%EA%B3%84-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%95%8C%EB%9E%8C-%EC%8B%9C%EA%B3%84%EC%9E%85%EB%8B%88%EB%8B%A4-3d-%ED%8C%8C%EB%9E%80%EC%83%89-%EC%9E%89%ED%81%AC-%EC%8B%9C%EA%B3%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%88%98%EB%A9%B4-%ED%83%80%EC%9D%B4%EB%A8%B8%EC%9D%98-%EC%B5%9C%EC%86%8C-%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B0%9C%EB%85%90-3d-%EC%8B%9C%EA%B3%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EB%8A%94-%EA%B2%A9%EB%A6%AC%EB%90%9C-%ED%8C%8C%EB%9E%80%EC%83%89%EC%9C%BC%EB%A1%9C-%EB%A0%8C%EB%8D%94%EB%A7%81%EB%90%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=NbGpFHLMiNgzIesdKjXky46tMmNo-zC_R8OOhcIYhOs=');"></div>
            <div class='p-4 sm:p-6'>
              <p class='font-bold text-gray-700 text-[22px] leading-7 mb-3'>타임 퍼포먼스</p>
              <!-- <div class='flex flex-row'>
                <p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>MVR 700</p>
                <p class='text-[17px] font-bold text-[#0FB478]'>MVR 700</p>
              </div> -->
              <p class='text-[#7C7C80] font-[15px]'>
                디자인 1회 제작시간 대비<br/>평균 64시간 단축
              </p>
            </div>
          </div>
        </div>
        <div class='w-full mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
          <div class='max-w-md mx-auto'>
            <div class="bg-cover bg-center h-80" style="background-image: url('https://img.freepik.com/free-photo/hand-putting-coin-to-pink-piggy-money-savings-concept-on-pink-background-3d-rendering_56104-1439.jpg?w=1380&t=st=1693387183~exp=1693387783~hmac=14ff71522c046b5efb3e925435804108c2c07d730adcb38559c55e85fd66075a');"></div>
            <div class='p-4 sm:p-6'>
              <p class='font-bold text-gray-700 text-[22px] leading-7 mb-3'>디자이너 인건비 절약</p>
              <!-- <div class='flex flex-row'>
                <p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>MVR 700</p>
                <p class='text-[17px] font-bold text-[#0FB478]'>MVR 700</p>
              </div> -->
              <p class='text-[#7C7C80] font-[15px]'>
                디자이너 고용인력 1인 대비<br/>평균 월 190만원 절약
              </p>
            </div>
          </div>
        </div>
        <div class='w-full mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
          <div class='max-w-md mx-auto'>
            <div class="bg-cover bg-center h-80" style="background-image: url('https://img.freepik.com/premium-photo/3d-render-of-roi-concept-return-on-investment-people-managing-financial-chart-profit-income_95505-341.jpg?w=360');"></div>
            <div class='p-4 sm:p-6'>
              <p class='font-bold text-gray-700 text-[22px] leading-7 mb-3'>계약 성사 극대화</p>
              <!-- <div class='flex flex-row'>
                <p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>MVR 700</p>
                <p class='text-[17px] font-bold text-[#0FB478]'>MVR 700</p>
              </div> -->
              <p class='text-[#7C7C80] font-[15px]'>
                3D 상담직후 계약 성사율<br/>평균 62% 증가
              </p>
            </div>
          </div>
        </div>
      </div>
			
    {:else}

    <div class='flex flex-row'>
      <div class='w-[300px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div class='max-w-[300px] mx-auto'>
          <div class="bg-cover bg-center h-80" style="background-image: url('https://media.istockphoto.com/id/1480711849/ko/%EB%B2%A1%ED%84%B0/%EC%9B%90%ED%98%95-%EC%8B%9C%EA%B3%84-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%95%8C%EB%9E%8C-%EC%8B%9C%EA%B3%84%EC%9E%85%EB%8B%88%EB%8B%A4-3d-%ED%8C%8C%EB%9E%80%EC%83%89-%EC%9E%89%ED%81%AC-%EC%8B%9C%EA%B3%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%88%98%EB%A9%B4-%ED%83%80%EC%9D%B4%EB%A8%B8%EC%9D%98-%EC%B5%9C%EC%86%8C-%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B0%9C%EB%85%90-3d-%EC%8B%9C%EA%B3%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EB%8A%94-%EA%B2%A9%EB%A6%AC%EB%90%9C-%ED%8C%8C%EB%9E%80%EC%83%89%EC%9C%BC%EB%A1%9C-%EB%A0%8C%EB%8D%94%EB%A7%81%EB%90%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=NbGpFHLMiNgzIesdKjXky46tMmNo-zC_R8OOhcIYhOs=');"></div>
          <div class='p-4 sm:p-6'>
            <p class='font-bold text-gray-700 text-[22px] leading-7 mb-3'>타임 퍼포먼스</p>
            <p class='text-[#7C7C80] font-[15px]'>
              디자인 1회 제작시간 대비<br/>평균 64시간 단축
            </p>
          </div>
        </div>
      </div>
      <div class='w-[300px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div class='max-w-[300px] mx-auto'>
          <div class="bg-cover bg-center h-80" style="background-image: url('https://img.freepik.com/free-photo/hand-putting-coin-to-pink-piggy-money-savings-concept-on-pink-background-3d-rendering_56104-1439.jpg?w=1380&t=st=1693387183~exp=1693387783~hmac=14ff71522c046b5efb3e925435804108c2c07d730adcb38559c55e85fd66075a');"></div>
          <div class='p-4 sm:p-6'>
            <p class='font-bold text-gray-700 text-[22px] leading-7 mb-3'>디자이너 인건비 절약</p>
            <p class='text-[#7C7C80] font-[15px]'>
              디자이너 고용인력 1인 대비<br/>평균 월 190만원 절약
            </p>
          </div>
        </div>
      </div>
      <div class='w-[300px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div class='max-w-[300px] mx-auto'>
          <div class="bg-cover bg-center h-80" style="background-image: url('https://img.freepik.com/premium-photo/3d-render-of-roi-concept-return-on-investment-people-managing-financial-chart-profit-income_95505-341.jpg?w=360"></div>
          <div class='p-4 sm:p-6'>
            <p class='font-bold text-gray-700 text-[22px] leading-7 mb-3'>계약 성사 극대화</p>
            <p class='text-[#7C7C80] font-[15px]'>
              3D 상담직후 계약 성사율<br/>평균 62% 증가
            </p>
          </div>
        </div>
      </div>
    </div>
    {/if}
  </div>
</div>




<!-- This is an example component -->
<div class="h-screen">
</div>




<!-- <div class="relative"> -->
  <!-- <div class="sticky top-0 flex h-screen items-center justify-center">
    <img src="https://selinerapp.tk/images/wallpaper_1.jpg" class="h-full w-full object-cover" />
    <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
      <h2 class="text-2xl font-bold">첫번째 섹션</h2>
      <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>
  </div>
  <div class="sticky top-0 flex h-screen items-center justify-center">
    <img src="https://selinerapp.tk/images/wallpaper_2.jpg" class="h-full w-full object-cover" />

    <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
      <h2 class="text-2xl font-bold text-white">Second Section</h2>
      <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>
  </div>

  <div class="sticky top-0 flex h-screen items-center justify-center">
    <img src="https://selinerapp.tk/images/wallpaper_3.jpg" class="h-full w-full object-cover" />

    <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
      <h2 class="text-2xl font-bold text-white">Third Section</h2>
      <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>
  </div>

  <div class="sticky top-0 flex h-screen items-center justify-center">
    <img src="https://selinerapp.tk/images/wallpaper_4.jpg" class="h-full w-full object-cover" />

    <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
      <h2 class="text-2xl font-bold text-white">Fourth Section</h2>
      <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>
  </div> -->
<!-- </div> -->


<!-- <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style="background-image: url('https://picsum.photos/id/1018/1000')">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" style="backdrop-filter: blur(20px);">
      <div class="max-w-md mx-auto">
        <div>
          <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg" class="h-16 sm:h-24" />
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>Tailwind CSS update bring a new powerful features.</p>
            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Customizing style and create design system
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Just-In-Time : The Next Generation of Tailwind CSS
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">Tailwind CSS from Zero to Production</p>
              </li>
            </ul>
            <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
          </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>See me on <a class="font-bold text-blue-700" href="https://www.linkedin.com/in/ferdianar/"> LinkedIn </a></p>
            <p>
              <a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700"> Read the docs &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->
<!--  -->








<!-- <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
  <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
  <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
  <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
  <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
  <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="">
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="">
  </div>
</div> -->




<footer class="p-10 footer bg-base-200 text-base-content footer-center">
  <div class="grid grid-flow-col gap-4">
    <a class="link link-hover">소개</a> 
    <a class="link link-hover">문의</a> 
    <a class="link link-hover">채용</a> 
    <a class="link link-hover">언론보도</a>
  </div> 
  <div>
    <div class="grid grid-flow-col gap-4">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a> 
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a> 
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by 마인스페이스 Industries Ltd</p>
  </div>
</footer>




<!-- 시차 효과 -->
<!-- <Parallax 
  sections=3
  style="background-color: #253237;" {disabled} 
  class="bg-gradient-to-r from-cyan-500 to-blue-500"
  bind:this={parallax}
> -->
    <!-- <ParallaxLayer 
      offset=1 
      rate=1 
      class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    />

    <ParallaxLayer 
      offset=2 
      rate=1 
      class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-80%"
    />

    <ParallaxLayer 
      offset=0 
      rate=0 
      span=3 
      style="background-image: { url('stars', true) }; background-size: cover;"
    />
  
    <ParallaxLayer 
      offset=1.3  
      rate=-0.3
    >
      <img 
        src="https://static.toss.im/3d/tossbank-web-assest-02-apng.png"
        alt='' 
        style="width: 15%; margin-left: 70%;"
      >
    </ParallaxLayer>
    
    <ParallaxLayer 
      offset=1 
      rate=0.8 
      style="opacity: 0.1;"
    >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 20%; margin-left: 55%;"
      >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 10%; margin-left: 15%;"
      >
      
    </ParallaxLayer>
      
    <ParallaxLayer 
      offset=1.75 
      rate=0.5 
      style="opacity: 0.1;"
    >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 20%; margin-left: 70%;"
      >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 20%; margin-left: 40%;"
      >
    </ParallaxLayer> -->
    
    <!-- <ParallaxLayer 
      offset=1 
      rate=0.2 
      style="opacity: 0.2;"
    >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 10%; margin-left: 10%;"
      >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 20%; margin-left: 75%;"
      >
    </ParallaxLayer> -->

    <!-- <ParallaxLayer 
      offset=1.6
      rate=0.4
      style="opacity: 1.0;"
    >
    <center text-black>또 다른 세계<br/>나의 비슷한 조건의 사용자들의<br/>리얼한 후기들을 확인하고<br/>내게 딱 맞는 파트너와 함께 해요!</center>

    </ParallaxLayer> -->
     
    <!-- <ParallaxLayer 
      offset=1.3
      rate=-0.1 
      style="opacity: 0.4;"
    >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 20%; margin-left: 60%;"
      >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 25%; margin-left: 30%;"
      >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 10%; margin-left: 80%;"
      >
    </ParallaxLayer> -->
    
    <!-- <ParallaxLayer 
      offset=2.6 
      rate=0.4 
      style="opacity: 0.6;"
    >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 20%; margin-left: 5%;"
      >
      <img 
        src={url('cloud')} 
        alt='' 
        style="display: block; width: 15%; margin-left: 75%;"
      >
    </ParallaxLayer> -->
    
    <!-- <ParallaxLayer 
      offset=2.5 
      rate=-0.4 
      style="display: flex; align-items: center; justify-content: center;"
    >
      <img 
        src={url('earth')} 
        alt='' 
        style="width: 60%;"
      >
    </ParallaxLayer> -->

    <!-- <ParallaxLayer 
      offset=2
      rate=-0.3
      style="display: flex; align-items: center; justify-content: center;"
    >
      <img 
        src={url('clients')} 
        alt='' 
        style="height: 80%; width: 80%;"
      >
  </ParallaxLayer> -->

    <!-- <ParallaxLayer 
      offset=0 
      rate=0.1
      style="display: flex; align-items: center; justify-content: center;"
    >
      <img 
        src={url('server')} 
        alt='' 
        class="server" 
        style="width: 20%;" 
        on:click={() => parallax.scrollTo(2, {selector: '.bash'})}
        on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(2, {selector: '.bash'})}
        tabindex=0
      >
    </ParallaxLayer> -->

    <!-- <ParallaxLayer 
      offset=1
      rate=0.1
      style="display: flex; align-items: center; justify-content: center;"
    >
      <img 
        src={url('bash')} 
        alt=''
        class="bash"
        style="width: 40%;"  
        on:click={() => parallax.scrollTo(3, {selector: '.clients-main'})}
        on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(3, {selector: '.clients-main'})} 
        tabindex=0
      >
    </ParallaxLayer> -->
    
    <!-- <ParallaxLayer 
      offset=2
      rate=-0
      style="display: flex; align-items: center; justify-content: center;"
    >
     
      <img 
        src={url('clients-main')} 
        alt='' 
        class="clients-main" 
        style="width: 40%;" 
        on:click={
          () => parallax.scrollTo(
            1, {
              selector: '.server'
            }
          )
        }
        on:keyup={
          (e) => e.key === 'Enter' && parallax.scrollTo(
            1, {
              selector: '.server'
            }
          )
        }
        tabindex=0
      >
    </ParallaxLayer> -->
  <!-- </Parallax> -->



