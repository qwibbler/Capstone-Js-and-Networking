import makeCard from './makeCard.js';
import showsLikes from './showsLikes.js';

const displayShows = async () => {
  const showsWrapper = document.querySelector('.shows-wrapper');
  const frag = document.createDocumentFragment();
  showsLikes.forEach((show) => {
    const card = makeCard(show);
    frag.appendChild(card);
  });
  showsWrapper.appendChild(frag);
};
export default displayShows;
