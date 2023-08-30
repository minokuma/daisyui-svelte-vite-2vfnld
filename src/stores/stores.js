import { writable } from 'svelte/store';

/* 쓰기 전용 */
export const count = writable(0, () => {
  console.log('count 변수 구독');

  return () => {
    console.log('count 변수 구독 해제');
  };
});

export const name = writable('carrots', () => {
  console.log('name 변수 구독');

  return () => {
    console.log('name 변수 구독 해제');
  };
});

/* 읽기 전용 */
export let user = readable(
  {
    name: 'carrots',
    age: 18,
  },
  (set) => {
    console.log('user 변수 구독');

    return () => {
      console.log('user 변수 구독 해제');
    };
  }
);
