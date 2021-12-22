import countShows from './countShows.js';

const array = [
  { show: 'show1' },
  { show: 'show2' },
  { show: 'show3' },
  { show: 'show4' }]

test('Count Shows', () => {
  expect(countShows(array)).toBe(4);
})