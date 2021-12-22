// import './style.css';
import displayShows from './displayShows.js';
import countShows from './countShows.js';

const allShowsAndLikes = await displayShows();
countShows(allShowsAndLikes, document.querySelector('.shows-wrapper'));
