import getShows from './getShows.js';
import makeCard from './makeCard.js';

const displayShows = async (pg = 1) => {
  const allShows = await getShows(pg);
  const showsWrapper = document.querySelector('.shows-wrapper');
  allShows.forEach((show) => {
    const card = makeCard(show);
    showsWrapper.appendChild(card);
  });
};
export default displayShows;
