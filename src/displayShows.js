import getShows from "./getShows.js";

const showsWrapper = document.querySelector(".shows-wrapper");
const allShows = await getShows()
const egImg = new Image();
egImg.src = allShows[0].image.medium;
showsWrapper.appendChild(egImg);
