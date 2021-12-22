import makeCard from './makeCard.js';
import mapLikes from './mapLikes.js';

const displayShows = async () => {
  const showsLikes = await mapLikes();
  const showsWrapper = document.querySelector('.shows-wrapper');
  const frag = document.createDocumentFragment();
  showsLikes.forEach((show) => {
    const card = makeCard(show);
    frag.appendChild(card);
  });
  showsWrapper.appendChild(frag);
  return showsLikes;
};
export default displayShows;
