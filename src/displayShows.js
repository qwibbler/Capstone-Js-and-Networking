import getShows from "./getShows.js";
import makeCard from "./makeCard.js";

const showsWrapper = document.querySelector(".shows-wrapper");
const allShows = await getShows()

showsWrapper.appendChild(showCard);