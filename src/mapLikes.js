import getShows from './getShows.js';
import getLikes from './getLikes.js';

const mapLikes = async () => {
  const allShows = await getShows();
  const allLikes = await getLikes();
  allShows.map((show) => {
    const item = allLikes.find((item) => item.item_id === show.id);
    show.likes = item !== undefined ? item.likes : 0;
    return show;
  });
  return allShows;
};
export default mapLikes;
