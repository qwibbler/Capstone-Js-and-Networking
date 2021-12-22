import makeCard from './makeCard.js';
import mapLikes from './mapLikes.js';
import countShows from './countShows.js';

const displayShows = async () => {
  const page = document.querySelector('#pg-no');
  const count = document.querySelector('#count');
  const showsLikes = await mapLikes();
  const showsWrapper = document.querySelector('.shows-wrapper');
  const frag = document.createDocumentFragment();

  showsLikes.forEach((show) => {
    const card = makeCard(show);
    frag.appendChild(card);
  });
  showsWrapper.appendChild(frag);

  count.textContent = `[1 -  ${countShows(showsLikes)}]`;
  return showsLikes;
};
export default displayShows;
