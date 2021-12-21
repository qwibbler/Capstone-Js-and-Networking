import getShows from './getShows.js';
import makeCard from './makeCard.js';
import getLikes from './getLikes.js';

const mapLikes = async (pg = 0) => {
  const allShows = await getShows(pg);
  const allLikes = await getLikes();
  allShows.map((show) => {
    const item = allLikes.find((item) => item.item_id === show.id);
    show.likes = item !== undefined ? item.likes : 0;
    return show;
  });
  return allShows;
};

const displayShows = async (pg = 0) => {
  const showsLikes = await mapLikes(pg);
  const showsWrapper = document.querySelector('.shows-wrapper');
  showsLikes.forEach((show) => {
    const card = makeCard(show);
    showsWrapper.appendChild(card);
  });
};
export default displayShows;
