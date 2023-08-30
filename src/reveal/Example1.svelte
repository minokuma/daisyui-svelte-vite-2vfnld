<script>

  // import { user } from '../stores/stores.js';

	import { reveal } from 'svelte-reveal';
	import Label from './Label.svelte';

	import { onMount } from "svelte";
  let isMobile = false;

  // 모바일 환경 여부를 체크하는 함수
  function checkMobile() {
    isMobile = window.innerWidth < 768; // 예시로 768px보다 작으면 모바일로 간주
  }

  onMount(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  });

</script>

<style>
	p {
		line-height: 1.75rem
	}
	
	h1 {
		display: block;
		font-size: 4rem;
		margin: 1.5rem 0;
	}
	
	h2 {
		font-size: 2.5rem;
		margin-bottom: 0;
	}
	
	h3 {
		font-size: 2rem;
		margin-bottom: 0;
	}
	
	.box {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
	}
</style>

<!-- <Label>Example 1</Label> -->
<!-- <h1 use:reveal={{ transition: "fade", delay: 50 }}>꾸민과 함께 꾸며!</h1>
<h2 use:reveal={{ delay: 100 }}>상상의 나래를 펼쳐~</h2>

<div class="box">
	<h3 use:reveal={{ delay: 600}}>이 글을 보게될 거에요~</h3>
	
</div> -->
<!-- <h3 use:reveal={{ delay: 100, x: -20, y: 20 }}>안녕하세요</h3> -->
<!-- <h3 use:reveal={{ transition: "fly", delay: 1300}}>blur !! 이어서 이 글까지요~</h3>
<h3 use:reveal={{ transition: "scale", delay: 1400}}>이어서 이 글까지요2~</h3>
<h3 use:reveal={{ transition: "blur", delay: 1400}}>이어서 이 글까지요2~</h3> -->

<!-- <p use:reveal={{ delay: 1800 }}>그렇죠? 😎</p> -->
<!-- <div class="flex place-items-center h-screen bg-blue-400 justify-center items-center">
  <div class="box">
		<div use:reveal={{ x: -10, y: 150 }}>
			<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" width=55% />
		</div>
		<div use:reveal={{ x: -10, y: 150 }}>
			<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" width=55% />
		</div>
	</div>
</div> -->






<!-- 카드 -->
<!-- <div class="h-screen w-screen w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex flex-col justify-center items-center">
	<div class="card w-96 glass">
		<figure><img src="http://thescienceplus.com/news/data/20200810/p1065585306800416_891_thum.png" alt="car!"/></figure>
		<div class="card-body">
			<h2 class="card-title">고객관리</h2>
			<p>연락처부터 공사정보까지 꼼꼼하게~</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Learn now!</button>
			</div>
		</div>
	</div>
</div> -->
<div class="box h-screen w-screen w-full flex flex-col justify-center items-center">
  <div class="w-full md:w-[65%] md:flex md:justify-center">
    {#if isMobile}
      <div use:reveal={{ x: -50, y: 10 }} class="md:w-full mb-4">
        <h3 use:reveal={{ transition: "blur", delay: 0 }} class="text-center text-black">3D 시뮬레이션
			</div>
			<p use:reveal={{ transition: "blur", delay: 300 }} 
				class="text-xl text-center text-gray-500 text-1xl font-fh font-bold leading-normal mb-1">아파트 인테리어라면
			</p>
			<p use:reveal={{ transition: "blur", delay: 500 }} 
				class="text-xl text-center text-gray-500 text-1xl font-fh font-bold leading-normal mb-1">3분만에
			</p>
			<p use:reveal={{ transition: "blur", delay: 700 }} 
				class="text-xl text-center text-gray-500 text-5xl font-fh font-bold leading-normal mt-1">디자인까지 완성!
			</p>
      <div use:reveal={{ x: -10, y: 150 }} class="md:w-full">
        <img class="max-w-full h-auto w-full" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" />
		</div>
			
    {:else}
			<div use:reveal={{ x: -10, y: 150 }} class="md:max-w-[100%] md:mr-2 mx-20  px-10">
        <!-- <img class="max-w-full h-auto w-full md:w-[100%]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" /> -->
				<!-- 데스크탑 디바이스 스크린 시작 -->
        <div class="max-w-full h-auto w-full md:w-[100%] flex justify-center items-center h-screen">
          <div class="bg-base-200 mockup-phone">
          <div class="camera"></div>
          <div class="display">
              <div class="relative flex flex-col overflow-hidden shadow rounded-box artboard phone-3">
                  <div class="flex-grow h-full drawer">
                      <input id="mobile-drawer" type="checkbox" class="drawer-toggle">
                      <div class="flex flex-col  pt-6 items-center flex-grow h-full text-center drawer-content">
                          <div class="navbar flex-none w-full pt-6 bg-base-200 text-neutral-content">
                              <div class="flex-none">
                                  <label for="mobile-drawer" class="btn btn-circle btn-ghost drawer-button">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                      </svg>
                                  </label>
                              </div>
                              <div class="flex-1 px-2 mx-2">
                                  <span class="text-lg font-bold"></span>
                              </div>
                              <div class="flex-none">
                                  <button class="btn btn-circle btn-ghost">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                      </svg>
                                  </button>
                              </div>
                          </div>
                          <div class="flex flex-col items-center flex-1 w-full h-full pt-10 overflow-y-auto bg-base-200">
                            <div class="avatar">
                                <div class="w-32 h-32 mask mask-squircle">
                                    <img src="https://img.freepik.com/premium-photo/opulent-contemporary-futuristic-interior-in-stark-black-and-white-with-fascinating-stylish-black-furniture-and-accent-walls_872147-13299.jpg">
                                </div>
                            </div>
                            <div class="my-4 text-2xl font-bold">꾸린이
                          </div>
                          <p class="text-sm">나만의 분위기있는 꾸민 모던스타일~</p>
                          <div class="mt-4 mb-10">
                            <button class="btn btn btn-secondary btn-sm mt-4">친구등록</button>
                          </div>
                          <div class="w-full tabs">
                            <a class="flex-grow tab tab-lifted"></a>
                            <a class="tab tab-lifted tab-active">이미지 목록</a>
                            <a class="tab tab-lifted">팔로워 목록</a>
                            <a class="tab tab-lifted">팔로잉 목록</a>
                            <a class="flex-grow tab tab-lifted"></a>
                          </div>
                          <div class="grid grid-cols-3 gap-2 p-2 pt-4 bg-base-100">
                            <img src="https://picsum.photos/id/1004/200/200">
                            <img src="https://picsum.photos/id/1003/200/200">
                            <img src="https://picsum.photos/id/1002/200/200">
                            <img src="https://picsum.photos/id/1001/200/200">
                            <img src="https://picsum.photos/id/1000/200/200">
                            <img src="https://picsum.photos/id/999/200/200">
                            <img src="https://picsum.photos/id/998/200/200">
                            <img src="https://picsum.photos/id/997/200/200">
                            <img src="https://picsum.photos/id/996/200/200">
                            <img src="https://picsum.photos/id/995/200/200">
                            <img src="https://picsum.photos/id/994/200/200">
                            <img src="https://picsum.photos/id/993/200/200">
                          </div>
                        </div>
                          <ul class="menu justify-center flex-none w-full px-3 horizontal ">
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="drawer-side">
                          <label for="mobile-drawer" class="drawer-overlay"></label>
                          <ul class="p-7 overflow-y-auto pt-14 menu w-80 h-full bg-base-100 text-base-content">
                            <li>
                                <a>프로필</a>
                            </li>
                            <li>
                                <a>메세지</a>
                            </li>
                            <li>
                                <a>설정</a>
                            </li>
                            <li>
                                <a>소개</a>
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <!-- 데스크탑 디바이스 스크린 종료 -->
      </div>
			<div use:reveal={{ x: -50, y: 10 }} class="md:w-full mb-1 px-20 relative">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <h1
					use:reveal={{ transition: "blur", delay: 100 }} 
					class="text-left text-black text-5xl font-fh font-bold leading-relaxed">3D 시뮬레이션
				</h1>
				<h3
					use:reveal={{ transition: "blur", delay: 300 }} 
					class="text-left text-gray-500 text-5xl font-fh font-bold leading-normal">아파트 인테리어라면
				</h3>
				<h3
					use:reveal={{ transition: "blur", delay: 500 }} 
					class="text-left text-gray-500 text-5xl font-fh font-bold leading-normal">3분만에
				</h3>
				<h3
					use:reveal={{ transition: "blur", delay: 700 }} 
					class="text-left text-gray-500 text-5xl font-fh font-bold leading-normal">디자인까지 완성!
				</h3>
    	</div>
    {/if}
  </div>
</div>

<div class="box h-screen w-screen w-full bg-gradient-to-r from-indigo-500 from-20% via-40% via-sky-500 via-60% to-emerald-500 to-80% flex flex-col justify-center items-center">
  <div class="w-full md:w-[55%] md:flex md:justify-center">
    {#if isMobile}
      <div use:reveal={{ x: -50, y: 10 }} class="md:w-full mb-4">
        <h3 use:reveal={{ transition: "blur", delay: 0 }} class="text-center text-white">고객관리
			</div>
			<p use:reveal={{ transition: "blur", delay: 300 }} 
				class="text-xl text-center text-gray-200 text-1xl font-fh font-bold leading-normal mb-1">다양한 고객님들의
			</p>
			<p use:reveal={{ transition: "blur", delay: 500 }} 
				class="text-xl text-center text-gray-200 text-1xl font-fh font-bold leading-normal mb-1">연락처부터 공사정보까지
			</p>
			<p use:reveal={{ transition: "blur", delay: 700 }} 
				class="text-xl text-center text-gray-200 text-5xl font-fh font-bold leading-normal mt-1">관리할 수 있어요.
			</p>
      <div use:reveal={{ x: -10, y: 150 }} class="md:w-full">
        <img class="max-w-full h-auto w-full" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" />
    </div>
			
    {:else}
			<div use:reveal={{ x: -50, y: 10 }} class="md:w-full mb-4">
        <h1
					use:reveal={{ transition: "blur", delay: 100 }} 
					class="text-left text-white text-5xl font-fh font-bold leading-relaxed">고객관리
				</h1>
				<h3
					use:reveal={{ transition: "blur", delay: 300 }} 
					class="text-left text-white text-5xl font-fh font-bold leading-normal">다양한 고객님들의
				</h3>
				<h3
					use:reveal={{ transition: "blur", delay: 500 }} 
					class="text-left text-white text-5xl font-fh font-bold leading-normal">연락처부터 공사정보까지
				</h3>
				<h3
					use:reveal={{ transition: "blur", delay: 700 }} 
					class="text-left text-white text-5xl font-fh font-bold leading-normal">관리할 수 있어요.
				</h3>
    	</div>
      <div use:reveal={{ x: -10, y: 150 }} class="md:max-w-[50%] md:mr-2 mx-20 flex">
        <!-- <img class="max-w-full h-auto w-full md:w-[100%]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" /> -->

        <!-- 데스크탑 디바이스 스크린 시작 -->
        <div class="max-w-full h-auto w-full md:w-[100%] flex justify-center items-center h-screen">
          <div class="bg-base-200 mockup-phone">
          <div class="camera"></div>
          <div class="display">
              <div class="relative flex flex-col overflow-hidden shadow rounded-box artboard phone-3">
                  <div class="flex-grow h-full drawer">
                      <input id="mobile-drawer" type="checkbox" class="drawer-toggle">
                      <div class="flex flex-col  pt-6 items-center flex-grow h-full text-center drawer-content">
                          <div class="navbar flex-none w-full pt-6 bg-base-200 text-neutral-content">
                              <div class="flex-none">
                                  <label for="mobile-drawer" class="btn btn-circle btn-ghost drawer-button">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                      </svg>
                                  </label>
                              </div>
                              <div class="flex-1 px-2 mx-2">
                                  <span class="text-lg font-bold"></span>
                              </div>
                              <div class="flex-none">
                                  <button class="btn btn-circle btn-ghost">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                      </svg>
                                  </button>
                              </div>
                          </div>
                          <div class="flex flex-col items-center flex-1 w-full h-full pt-10 overflow-y-auto bg-base-200">
                            <div class="avatar">
                                <div class="w-32 h-32 mask mask-squircle">
                                    <img src="https://img.freepik.com/premium-photo/opulent-contemporary-futuristic-interior-in-stark-black-and-white-with-fascinating-stylish-black-furniture-and-accent-walls_872147-13299.jpg">
                                </div>
                            </div>
                            <div class="my-4 text-2xl font-bold">꾸린이
                          </div>
                          <p class="text-sm">나만의 분위기있는 꾸민 모던스타일~</p>
                          <div class="mt-4 mb-10">
                            <button class="btn btn btn-secondary btn-sm mt-4">친구등록</button>
                          </div>
                          <div class="w-full tabs">
                            <a class="flex-grow tab tab-lifted"></a>
                            <a class="tab tab-lifted tab-active">이미지 목록</a>
                            <a class="tab tab-lifted">팔로워 목록</a>
                            <a class="tab tab-lifted">팔로잉 목록</a>
                            <a class="flex-grow tab tab-lifted"></a>
                          </div>
                          <div class="grid grid-cols-3 gap-2 p-2 pt-4 bg-base-100">
                            <img src="https://picsum.photos/id/1004/200/200">
                            <img src="https://picsum.photos/id/1003/200/200">
                            <img src="https://picsum.photos/id/1002/200/200">
                            <img src="https://picsum.photos/id/1001/200/200">
                            <img src="https://picsum.photos/id/1000/200/200">
                            <img src="https://picsum.photos/id/999/200/200">
                            <img src="https://picsum.photos/id/998/200/200">
                            <img src="https://picsum.photos/id/997/200/200">
                            <img src="https://picsum.photos/id/996/200/200">
                            <img src="https://picsum.photos/id/995/200/200">
                            <img src="https://picsum.photos/id/994/200/200">
                            <img src="https://picsum.photos/id/993/200/200">
                          </div>
                        </div>
                          <ul class="menu justify-center flex-none w-full px-3 horizontal ">
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="drawer-side">
                          <label for="mobile-drawer" class="drawer-overlay"></label>
                          <ul class="p-7 overflow-y-auto pt-14 menu w-80 h-full bg-base-100 text-base-content">
                            <li>
                                <a>프로필</a>
                            </li>
                            <li>
                                <a>메세지</a>
                            </li>
                            <li>
                                <a>설정</a>
                            </li>
                            <li>
                                <a>소개</a>
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <!-- 데스크탑 디바이스 스크린 종료 -->
      </div>
    {/if}
  </div>
</div>


<div class="box h-screen w-screen w-full flex flex-col justify-center items-center">
  <div class="w-full md:w-[65%] md:flex md:justify-center">
    {#if isMobile}
      <div use:reveal={{ x: -50, y: 10 }} class="md:w-full mb-4">
        <h3 use:reveal={{ transition: "blur", delay: 0 }} class="text-center text-black">모바일 견적서
			</div>
			<p use:reveal={{ transition: "blur", delay: 300 }} 
				class="text-xl text-center text-gray-500 text-1xl font-fh font-bold leading-normal mb-1">꾸민 앱으로
			</p>
			<p use:reveal={{ transition: "blur", delay: 500 }} 
				class="text-xl text-center text-gray-500 text-1xl font-fh font-bold leading-normal mb-1">언제 어디서든
			</p>
			<p use:reveal={{ transition: "blur", delay: 700 }} 
				class="text-xl text-center text-gray-500 text-5xl font-fh font-bold leading-normal mt-1">편리하게 작성하고
			</p>
      <p use:reveal={{ transition: "blur", delay: 900 }} 
				class="text-xl text-center text-gray-500 text-5xl font-fh font-bold leading-normal mt-1">공유하세요.
			</p>
      <div use:reveal={{ x: -10, y: 150 }} class="md:w-full">
        <img class="max-w-full h-auto w-full" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" />
		</div>
			
    {:else}
			<div use:reveal={{ x: -10, y: 150 }} class="md:max-w-[100%] md:mr-2 mx-20  px-10">
        <!-- <img class="max-w-full h-auto w-full md:w-[100%]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" /> -->
				<!-- 데스크탑 디바이스 스크린 시작 -->
        <div class="max-w-full h-auto w-full md:w-[100%] flex justify-center items-center h-screen">
          <div class="bg-base-200 mockup-phone">
          <div class="camera"></div>
          <div class="display">
              <div class="relative flex flex-col overflow-hidden shadow rounded-box artboard phone-3">
                  <div class="flex-grow h-full drawer">
                      <input id="mobile-drawer" type="checkbox" class="drawer-toggle">
                      <div class="flex flex-col  pt-6 items-center flex-grow h-full text-center drawer-content">
                          <div class="navbar flex-none w-full pt-6 bg-base-200 text-neutral-content">
                              <div class="flex-none">
                                  <label for="mobile-drawer" class="btn btn-circle btn-ghost drawer-button">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                      </svg>
                                  </label>
                              </div>
                              <div class="flex-1 px-2 mx-2">
                                  <span class="text-lg font-bold"></span>
                              </div>
                              <div class="flex-none">
                                  <button class="btn btn-circle btn-ghost">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                      </svg>
                                  </button>
                              </div>
                          </div>
                          <div class="flex flex-col items-center flex-1 w-full h-full pt-10 overflow-y-auto bg-base-200">
                            <div class="avatar">
                                <div class="w-32 h-32 mask mask-squircle">
                                    <img src="https://img.freepik.com/premium-photo/opulent-contemporary-futuristic-interior-in-stark-black-and-white-with-fascinating-stylish-black-furniture-and-accent-walls_872147-13299.jpg">
                                </div>
                            </div>
                            <div class="my-4 text-2xl font-bold">꾸린이
                          </div>
                          <p class="text-sm">나만의 분위기있는 꾸민 모던스타일~</p>
                          <div class="mt-4 mb-10">
                            <button class="btn btn btn-secondary btn-sm mt-4">친구등록</button>
                          </div>
                          <div class="w-full tabs">
                            <a class="flex-grow tab tab-lifted"></a>
                            <a class="tab tab-lifted tab-active">이미지 목록</a>
                            <a class="tab tab-lifted">팔로워 목록</a>
                            <a class="tab tab-lifted">팔로잉 목록</a>
                            <a class="flex-grow tab tab-lifted"></a>
                          </div>
                          <div class="grid grid-cols-3 gap-2 p-2 pt-4 bg-base-100">
                            <img src="https://picsum.photos/id/1004/200/200">
                            <img src="https://picsum.photos/id/1003/200/200">
                            <img src="https://picsum.photos/id/1002/200/200">
                            <img src="https://picsum.photos/id/1001/200/200">
                            <img src="https://picsum.photos/id/1000/200/200">
                            <img src="https://picsum.photos/id/999/200/200">
                            <img src="https://picsum.photos/id/998/200/200">
                            <img src="https://picsum.photos/id/997/200/200">
                            <img src="https://picsum.photos/id/996/200/200">
                            <img src="https://picsum.photos/id/995/200/200">
                            <img src="https://picsum.photos/id/994/200/200">
                            <img src="https://picsum.photos/id/993/200/200">
                          </div>
                        </div>
                          <ul class="menu justify-center flex-none w-full px-3 horizontal ">
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="drawer-side">
                          <label for="mobile-drawer" class="drawer-overlay"></label>
                          <ul class="p-7 overflow-y-auto pt-14 menu w-80 h-full bg-base-100 text-base-content">
                            <li>
                                <a>프로필</a>
                            </li>
                            <li>
                                <a>메세지</a>
                            </li>
                            <li>
                                <a>설정</a>
                            </li>
                            <li>
                                <a>소개</a>
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <!-- 데스크탑 디바이스 스크린 종료 -->
      </div>
			<div use:reveal={{ x: -50, y: 10 }} class="md:w-full mb-1 px-20 relative">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <h1
					use:reveal={{ transition: "blur", delay: 100 }} 
					class="text-left text-black text-5xl font-fh font-bold leading-relaxed">모바일 견적서
				</h1>
				<h3
					use:reveal={{ transition: "blur", delay: 300 }} 
					class="text-left text-gray-500 text-5xl font-fh font-bold leading-normal">언제 어디서든 
				</h3>
				<h3
					use:reveal={{ transition: "blur", delay: 500 }} 
					class="text-left text-gray-500 text-5xl font-fh font-bold leading-normal">편리하게 작성하고
				</h3>
				<h3
					use:reveal={{ transition: "blur", delay: 700 }} 
					class="text-left text-gray-500 text-5xl font-fh font-bold leading-normal">공유하세요.
				</h3>
    	</div>
      
    {/if}
  </div>
</div>

<div class="box h-screen w-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center">
  <div class="w-full md:w-[55%] md:flex md:justify-center">
    {#if isMobile}
      <div use:reveal={{ x: -50, y: 10 }} class="md:w-full mb-4">
        <h3 use:reveal={{ transition: "blur", delay: 0 }} class="text-center text-white">주문제작 디자인
			</div>
			<p use:reveal={{ transition: "blur", delay: 300 }} 
				class="text-xl text-center text-gray-200 text-1xl font-fh font-bold leading-normal mb-1">내가 원하는 디자인을
			</p>
			<p use:reveal={{ transition: "blur", delay: 500 }} 
				class="text-xl text-center text-gray-200 text-1xl font-fh font-bold leading-normal mb-1">꾸민 앱에 담아
			</p>
			<p use:reveal={{ transition: "blur", delay: 700 }} 
				class="text-xl text-center text-gray-200 text-5xl font-fh font-bold leading-normal mt-1">쉽게 공유할 수 있어요.
			</p>
      <div use:reveal={{ x: -10, y: 150 }} class="md:w-full transform -rotate-90 transform-origin-center">
        <img class="max-w-full h-auto max-w-[63%]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png"  />
      </div>
			
    {:else}
			<div use:reveal={{ x: -50, y: 10 }} class="md:w-full mb-4" >
        <h1
					use:reveal={{ transition: "blur", delay: 100 }} 
					class="text-left text-white text-5xl font-fh font-bold leading-relaxed">주문제작 디자인
				</h1>
				<h3
					use:reveal={{ transition: "blur", delay: 300 }} 
					class="text-left text-white text-5xl font-fh font-bold leading-relaxed">내가 원하는 디자인을
				</h3>
				<h3
					use:reveal={{ transition: "blur", delay: 500 }} 
					class="text-left text-white text-5xl font-fh font-bold leading-relaxed">꾸민 앱에 담아
				</h3>
				<h3
					use:reveal={{ transition: "blur", delay: 700 }} 
					class="text-left text-white text-5xl font-fh font-bold leading-relaxed">쉽게 공유할 수 있어요.
				</h3>
    	</div>
      <div use:reveal={{ x: -10, y: 150 }} class="md:max-w-[50%] md:mr-2 mx-20 flex transform -rotate-90 transform-origin-center">
        <img class="max-w-full h-auto max-w-[100%] md:w-[100%]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" />
      </div>
    {/if}
  </div>
</div>





<!-- 
<div class="box h-screen w-full  bg-blue-700 flex flex-col justify-center flex items-center ">
    <div class="flex items-center w-full md:flex md:justify-center">
				<div use:reveal={{ x: -50, y: 10 }} class="md:max-w-[50%] md:mr-2">
            <h3 use:reveal={{ transition: "blur", delay: 500 }}>간편하고 안전하게 파트너를 찾아요!</h3>
        </div>
        <div use:reveal={{ x: -10, y: 150 }} class="md:max-w-[50%] md:mr-2">
            <img class="max-w-full h-auto w-full md:w-[100%]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEWpzF%2FbtqGfMB0vZl%2FkqkwUwBXr2XyCQjNICA4x1%2Fimg.png" />
        </div>
    </div>
</div>
 -->

