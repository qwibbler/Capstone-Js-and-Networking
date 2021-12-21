import getShows from "./getShows.js";
import makeCard from "./makeCard.js";

const displayShows = (pg = 1) => {
  const showsWrapper = document.querySelector(".shows-wrapper");
  const allShows = await getShows(pg)
  allShows.forEach(show => {
    const card = makeCard(allShows, show);
    showsWrapper.appendChild(card);
  });
}
export default displayShows;
