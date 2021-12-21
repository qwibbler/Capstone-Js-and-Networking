import getShows from "./getShows.js";
const showsWrapper = document.querySelector(".shows-wrapper");

// import './style.css';
// import logo from './images/logo.jpg';
const logo = './images/logo.jpg';

const logoDiv = document.querySelector('#logo');
const logoImage = new Image();
logoImage.src = logo;
logoDiv.appendChild(logoImage);

const allShows = await getShows()
const egImg = new Image();
egImg.src = allShows[0].image.medium;
showsWrapper.appendChild(egImg);
