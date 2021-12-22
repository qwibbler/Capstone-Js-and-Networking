/**
 * @jest-environment jsdom
 */

import countShows from './countShows.js';

describe('Check Count of Shows Shown', () => {
  const array = [
    { show: 'show1' },
    { show: 'show2' },
    { show: 'show3' },
    { show: 'show4' }
  ]

  document.body.innerHTML = '<ul></ul>'
  const list = document.querySelector('ul');

  test('If not equal', () => {
    expect(countShows(array, list)).tobe([4, 0, false]);
  })
  
  test('If equal', () => {
      array.forEach(show => {
        list.innerHTML += `<li>${show.show}</li>`
      });
    expect(countShows(array, list)).toStrictEqual([4, 4, true]);
  })
})
